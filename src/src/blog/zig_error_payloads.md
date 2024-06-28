---
path: "/blog/zig-error-payloads"
title: "The diagnostic pattern vs. error payloads in Zig"
date: "2024-06-16"
---

I have a confession to make. I really like [zig](https://ziglang.com).
It has a lot of promise anyway.

But one thing can be a bit weird to some at first,
especially if you're used to returning monadic error types
(like Rust's `rust:LANG>Result`) for error handling.

The problem is zig already has the very similar [error unions](https://ziglang.org/documentation/master/#Error-Union-Type).
They just don't carry payloads, only an error code without context.

So I wanted to see what's possible in zig today for writing good error handling,
compare what exists, and how it feels and performs in the language.

### Errors require context

If you're using them to model parse errors (suppose you're writing a JSON parser),
then you probably want to provide some context with your error (e.g. at which position a comma token was missing).

The prevailing idiom today, the [*diagnostic pattern*](/FIXME), suggests
your error-returning function should take an additional parameter which is an
(often optional) pointer to a struct to fill with error context. It looks like this:

```zig
struct Diagnostic {
  position: usize = 0,
}

const std = @import("std").testing;

fn parseJson(alloc: std.mem.Allocator, json_src: []const u8, ?*Diagnostic) !JsonValue {
  //...
}

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

So can we get closer to e.g. Rust? Do we want to?
We could of course just use zig's language support for tagged unions to
make our own union with one (or more) error states, and return that,

But then you miss out on using zig's builtin `zig:LANG>try`,
`zig:LANG>catch`, and `zig:LANG>errdefer` to handle errors.

In practice I think lacking `zig:LANG>try`/`zig:LANG>catch` turns out to not be the worst. More on `zig:LANG>errdefer` later

```zig
pub fn Result(comptime R: type, comptime E: type) type {
    return union(enum) {
        ok: R,
        err: E,
    };
}

fn parseJsonRes(alloc: std.mem.Allocator, json_src: []const u8) Result(JsonValue, Diagnostic) {
  //...
}

test "res valid" {
    const result = parseJsonRes(std.testing.allocator, "[1, 2]");
    try std.testing.expect(result == .ok);
}

test "res invalid" {
    const result = parseJsonRes(std.testing.allocator, "[invalid]");
    try std.testing.expect(result == .err);
    try std.testing.expectEqual(result.err.position, 1);
}
```

Admittedly, idiomatic `zig:LANG>try` and `zig:LANG>catch` become slightly more cumbersome.

```zig
fn useParseJson(alloc: std.mem.Allocator, diagnostic: ?*Diagnostic) void {
  const json = try parseJson(alloc, "[]", diagnostic);
}

fn useParseJsonRes(alloc: std.mem.Allocator) ?Diagnostic {
  // you can also use a switch for no extra variable but imo its ugly
  const result = parseJsonRes(alloc, "[invalid]");
  const json = if (result == .ok) result.ok else return result.err;
  return null;
}
```

### `zig:LANG>errdefer`

`zig:LANG>errdefer` is worse, but there is hope.

Remember that `zig:LANG>errdefer` is important in cases such as when you
allocated to return to the caller to own, but now they
receive only the error and you need to destroy the incomplete object
to not leak it.

```zig
fn errdeferParseJson(alloc: std.mem.Allocator, diagnostic: ?*Diagnostic) std.ArrayList([]const u8) {
  const result = std.ArrayList([]const u8).init(alloc);
  errdefer result.deinit();

  const json = try parseJson(alloc, "[]", diagnostic);
  // use json to build the result
  //...

  return result;
}

fn errdeferParseJsonRes(alloc: std.mem.Allocator) Result(std.ArrayList([]const u8), Diagnostic) {
  var ok = std.ArrayList([]const u8).init(alloc);
  var result = Result(std.ArrayList([]const u8), Diagnostic) = .{.ok = ok};
  defer if (result == .err) ok.deinit();

  const json = switch (parseJsonRes(alloc, "[]")) {
    .ok => |o| o,
    .err => |e| {
      result = .{.err = e },
      return result;
    },
  };

  return result;
}
```

*Everywhere* that you return an error, you must manually first set the
`zig:LANG>result` variable and then return it, to be sure that
our `zig:LANG>errdefer` replacement, (`zig:LANG>defer if (result == .err) ...`)
takes effect.

That's risky. As the code base changes, someone could totally forget that
unenforced contract and return an error directly, leaving `Result`
in a valid state.

Also that's a lot of boilerplate. Maybe the diagnostic pattern isn't so bad?

### The future for `zig:LANG>errdefer`'ing hand-rolled error unions

In the future, we may get a [compiler builtin to access the return value directly](https://github.com/ziglang/zig/issues/2765).
This may have the side-effect of allowing us to access our returned value during a `zig:LANG>defer` statement, eliminating the need to manually make sure we're always returning the correct variable.

We would end up with the much nicer:

```zig
fn errdeferFutureParseJsonRes(alloc: std.mem.Allocator) Result(std.ArrayList([]const u8), Diagnostic) {
  var result = std.ArrayList([]const u8).init(alloc);
  defer if (@return() == .err) result.deinit();

  const json = switch (parseJsonRes(alloc, "[]")) {
    .ok => |o| o,
    .err => |e| return .{.err = e },
  };

  return result;
}
```

I would say that's pretty reasonable.

### Why error payloads?

Well, now that we've thoroughly compared the code for both options, which wins?
It looks like the diagnostic pattern is surprisingly simple,
low on boilerplate, and integrates well with the language today.

The result pattern could fit well if the language underwent some changes but
I don't see it as worth the complexity after chasing it for a bit.
...

### Bonus: benchmark

So this isn't as interesting as I would have hoped.

I created a [micro benchmark](https://github.com/MichaelBelousov/MichaelBelousov.github.io/tree/master/src/src/blog/zig_error_payloads) with [zbench](https://github.com/hendriknielaender/zBench) and ran it on:

- my OnePlus 9 Pro with 4 1.8GHz Arm Cortex-A55 cores and 4 2.4GHz Arm Cortex-A78 cores, using termux. I assume it used the performance cores but did not really check, and couldn't activate the phone's "high-performance gaming mode" in termux.
- my Digital Ocean droplet with 1 virtual CPU using ubuntu 22.04.04 ... I don't trust this one either.
- my wife's 16 inch 2021 Apple Macbook Pro with an Apple Silicon M1 Max chip. This is more like it.

But on all tested machines, there was basically no statisically significant difference between the two patterns.

I was hoping that the compiler would have a more difficult time optimizing the
diagnostic pattern which requires mutating memory via a pointer parameter,
as opposed to just returning more data. But in my benchmark, I see no evidence of that.

It is a microbenchmark after all, but let's see if we can figure out why.

### Cache behavior

Here is a cachegrind run on the diagnostic pattern case

```cachegrind
==5734== I   refs:      487,311,629                                            [3/269]
==5734== I1  misses:            337
==5734== LLi misses:            337
==5734== I1  miss rate:        0.00%
==5734== LLi miss rate:        0.00%
==5734==
==5734== D   refs:      227,403,102  (150,872,723 rd   + 76,530,379 wr)
==5734== D1  misses:        300,352  (    283,874 rd   +     16,478 wr)
==5734== LLd misses:         16,505  (         80 rd   +     16,425 wr)
==5734== D1  miss rate:         0.1% (        0.2%     +        0.0%  )
==5734== LLd miss rate:         0.0% (        0.0%     +        0.0%  )
==5734==
==5734== LL refs:           300,689  (    284,211 rd   +     16,478 wr)
==5734== LL misses:          16,842  (        417 rd   +     16,425 wr)
==5734== LL miss rate:          0.0% (        0.0%     +        0.0%  )
```

Here is cachegrind on the error union payload case

```cachegrind
==5754== I   refs:      473,999,217                                            [2/299]
==5754== I1  misses:            338
==5754== LLi misses:            338
==5754== I1  miss rate:        0.00%
==5754== LLi miss rate:        0.00%
==5754==
==5754== D   refs:      224,948,590  (147,385,221 rd   + 77,563,369 wr)
==5754== D1  misses:        281,152  (    264,674 rd   +     16,478 wr)
==5754== LLd misses:         16,505  (         80 rd   +     16,425 wr)
==5754== D1  miss rate:         0.1% (        0.2%     +        0.0%  )
==5754== LLd miss rate:         0.0% (        0.0%     +        0.0%  )
==5754==
==5754== LL refs:           281,490  (    265,012 rd   +     16,478 wr)
==5754== LL misses:          16,843  (        418 rd   +     16,425 wr)
==5754== LL miss rate:          0.0% (        0.0%     +        0.0%  )
```

Now these are both _disturbingly_ similar. Let's take a closer look.

And here is the assembly:
