---
path: "/blog/zig-error-payloads"
title: "Error payloads in zig today"
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

So idiomatic try becomes the slightly more cumbersome

```zig
// diagnostic parameter must be propagated up the call chain
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

`zig:LANG>errdefer` is worse, but there is hope.
Remember that errdefer is important because when returning an error,
you may have allocated something for the caller to free, but now they
receive only an error and can't free it.
`zig:LANG>errdefer` is necessary in that case to prevent leaking such resources
when returning an error.

```zig
fn errdeferParseJson(alloc: std.mem.Allocator, diagnostic: ?*Diagnostic) std.ArrayList([]const u8) {
  const result = std.ArrayList([]const u8).init(alloc);
  errdefer result.deinit();

  const json = try parseJson(alloc, "[]", diagnostic);

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

Sounds risky. As the code base changes, someone could totally forget that
unenforced requirement and return an error directly, leaving `Result`
in a valid state.

Perhaps the boilerplate for avoiding the error diagnostic pattern is starting to ad up?

