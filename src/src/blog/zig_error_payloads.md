---
path: "/blog/zig-error-payloads"
title: "How I leaarned to love Zig's diagnostic pattern"
date: "2024-07-24"
---

I have a confession to make. I really like [zig](https://ziglang.com).

But one thing can be a bit weird to some at first,
especially if you've gotten used to returning error union types
(like Rust's `rust:LANG>Result`) for error handling.

The problem is zig already has the very similar [error unions](https://ziglang.org/documentation/master/#Error-Union-Type).
They just don't carry payloads, only an error code without context.

Some people ask if you could, and then realize you shouldn't.
Unfortunately I tend to see if I could.
So I tried to roll my own result union. Zig has unions after all, how hard could it be?

TL;DR: I love zig's diagnostic pattern now.

### Errors require context

Suppose for example, that you're trying to model parse errors. Maybe you're writing a JSON parser.
Then you probably want to provide some context with any parsing errors,
like at which position a comma token
was missing.

The prevailing idiom today, the [*diagnostic pattern*](/FIXME), suggests
your error-returning function should take an additional parameter which is an
(often optional) pointer to a struct to fill with error context. It looks like this:

```zig

test "valid" {
    var diagnostic: Diagnostic = .{};
    const result = parseJson(std.testing.allocator, "[1, 2]", &diagnostic);
    _ = result catch return error.TestUnexpectedResult;
}

test "invalid" {
    var diagnostic: Diagnostic = .{};
    const result = parseJson(std.testing.allocator, "[1, 2, invalid]", &diagnostic);
    // we must check there was an error before we can use the diagnostic
    try std.testing.expectEqual(result, error.InvalidToken);
    try std.testing.expectEqual(diagnostic.position, 7);
}
```

Some people don't like it because the disconnectedness of the parameter to the
return value makes it easy to forget to populate the diagnostics or even forget
to add error context to APIs at all, like the zig standard library has [historically](/FIXME) done (insofar as zig's youth can have a history).

So, can we get error context without adding a parameter? Do we want to?
We could "just" use zig's language support for tagged unions to
make our own union with one (or more) error states, and return that.

But then you miss out on using zig's builtin `zig:LANG>try`,
`zig:LANG>catch`, and `zig:LANG>errdefer` to handle errors.
Unlike rust's `rust:LANG>?` operator which can be extended to user-defined types.

In practice I think lacking `zig:LANG>try`/`zig:LANG>catch` turns out to not be the worst,
but, more on `zig:LANG>errdefer` later.

Here we go:

```zig
pub fn Result(comptime R: type, comptime E: type) type {
    return union(enum) {
        ok: R,
        err: E,
    };
}

fn parseJsonUnion(alloc: std.mem.Allocator, json_src: []const u8) Result(JsonValue, Diagnostic) {
  //...
}

test "res valid" {
    const result = parseJsonUnion(std.testing.allocator, "[1, 2]");
    try std.testing.expect(result == .ok);
}

test "res invalid" {
    const result = parseJsonUnion(std.testing.allocator, "[invalid]");
    try std.testing.expect(result == .err);
    try std.testing.expectEqual(result.err.position, 1);
}
```

So, idiomatic `zig:LANG>try` and `zig:LANG>catch` become more cumbersome.

```zig
fn useParseJson(alloc: std.mem.Allocator, diagnostic: ?*Diagnostic) void {
  const json = try parseJson(alloc, "[]", diagnostic);
}

fn useParseJsonUnion(alloc: std.mem.Allocator) Result(void, Diagnostic) {
  // you can also use a switch for no extra variable but imo its ugly
  const result = parseJsonUnion(alloc, "invalid_json");
  const json = if (result == .ok) result.ok else return result;
  return Result(void, Diagnostic){.ok={}};
}
```

### `zig:LANG>errdefer`

`zig:LANG>errdefer` is worse, but might get better in the future.

Remember that `zig:LANG>errdefer` is important in cases such as when you
allocated something to return to the caller to own, but now they
receive only the error and you need to destroy your partial result
to not leak it.

```zig
fn errdeferParseJson(alloc: std.mem.Allocator, diagnostic: ?*Diagnostic) std.ArrayList([]const u8) {
  const result = std.ArrayList([]const u8).init(alloc);
  errdefer result.deinit();
  const json = try parseJson(alloc, "[]", diagnostic);
  // ...use json to build the result somehow
  return result;
}

fn errdeferParseJsonUnion(alloc: std.mem.Allocator) Result(std.ArrayList([]const u8), Diagnostic) {
  var ok = std.ArrayList([]const u8).init(alloc);
  var result = Result(std.ArrayList([]const u8), Diagnostic) = .{.err = .{}};
  defer if (result == .err) ok.deinit();

  const json = switch (parseJsonUnion(alloc, "[]")) {
    .ok => |o| o,
    .err => |e| {
      result = .{.err = e },
      return result;
    },
  };

  result = Result(std.ArrayList([]const u8), Diagnostic) = .{.ok = ok};
  return result;
}
```

*Everywhere* that you return an error, you must manually first set the
`zig:LANG>result` variable and then return it, to be sure that
our `zig:LANG>errdefer` replacement, (`zig:LANG>defer if (result == .err) ...`)
takes effect.

That's risky. As the code base changes, someone could totally forget that
unenforced contract and return an error directly, leaving `Result`
in an accidentally valid state.

Also that's a lot of boilerplate. Maybe the diagnostic pattern isn't so bad?

### The future for `zig:LANG>errdefer`'ing hand-rolled error unions

In the future, we may get a [compiler builtin to access the return value directly](https://github.com/ziglang/zig/issues/2765).
This may have the side-effect of allowing us to access our returned value during a `zig:LANG>defer` statement, eliminating the need to manually make sure we're always returning the correct variable.

We would end up with the much nicer:

```zig
fn errdeferFutureParseJsonUnion(alloc: std.mem.Allocator) Result(std.ArrayList([]const u8), Diagnostic) {
  var result = std.ArrayList([]const u8).init(alloc);
  defer if (@return() == .err) result.deinit();

  const json = switch (parseJsonUnion(alloc, "[]")) {
    .ok => |o| o,
    .err => |e| return .{.err = e },
  };

  return Result(std.ArrayList([]const u8, Diagnostic){.ok = result};
}
```

I would say that's pretty reasonable all of a sudden.

### Which is better?

Well, now that we've thoroughly compared the code for both options, which wins?

It looks like the diagnostic pattern is surprisingly simple,
low on boilerplate, and integrates well with the language today.
But the `zig:LANG>Result` type always requires full initialization in the
error case which makes it less prone to forgetting to set the error.
Assuming you use the result correctly for the defer case at all...

One hidden bonus is that the diagnostic pattern
fits well with exported functions. `zig:LANG>extern` unions can't be trivially
tagged so returning them in a C API takes some effort.
But just slap an `zig:LANG>extern` on the Diagnostic struct and you
can pretty straight-forwardly export any functions we wrote already using the
diagnostic pattern.

I felt this recently when I moved [a project](/FIXME) I'm working on from
my hand-rolled results to the diagnostic pattern, and the C API got much simpler.

The result pattern could fit well if the language underwent some changes but
I don't see it as worth the complexity after staring at it for a bit.

### Benchmark?

So this isn't as interesting as I would have hoped.

I created a [micro benchmark](https://github.com/MichaelBelousov/MichaelBelousov.github.io/tree/master/src/src/blog/zig_error_payloads) with [zbench](https://github.com/hendriknielaender/zBench)
and ran it on a few devices I have access to, although only the ARM hardware was non-virtual.

There was no reproducible difference in performance between the two cases.

I was hoping that the compiler would have a more difficult time optimizing the
diagnostic pattern, and I disabled inlining
the tested function boundary (which is not entirely accurate), but they really
had roughly the exact same performance. Feel free to run the benchmark yourself
and point me in the right direction.

But, I don't think it's worth expending any more effort for myself.
I am very happy with the Diagnostic pattern now.

