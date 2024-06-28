---
path: "/blog/zig-error-payloads"
title: "The diagnostic pattern vs. error payloads in Zig"
date: "2024-06-16"
---

I have a confession to make. I really like [zig](https://ziglang.com).
It has a lot of promise anyway. 

But one thing that can be a bit weird at first,
especially if you're coming from other languages with error monads, like Rust,
is that zig's [error unions](/FIXME) can't carry any context "payload" when they are in the error state.

They only contain an error code. If you're using them to model (e.g. JSON)
parse errors that may require some context (e.g. at which position an expected token was missing), then you need something else to present that.

You can read the (long) discussion about maybe changing the status quo in this still-open [feature request thread](https://github.com/ziglang/zig/issues/2647).

### The *diagnostic pattern*

The prevailing idiom today, the [*diagnostic pattern*](https://github.com/ziglang/zig/issues/2647#issuecomment-589829306), suggests
your error-returning function should take an "out" parameter which is a (maybe optional) pointer
to a caller-allocated context type which will be filled with the additional context if an error occurred. It looks like this.

```zig
struct Diagnostic {
  position: usize = 0,
}

fn parseJson(alloc: std.mem.Allocator, json_src: []const u8, ?*Diagnostic) !JsonValue {
  //...
}

const std = @import("std");

test "valid" {
  var diagnostic: Diagnostic = .{};
  var result = parseJson(std.testing.allocator, "[1, 2]", &diagnostic);
  try std.testing.expect(result);
}

test "invalid" {
  var diagnostic: Diagnostic = .{};
  var result = parseJson(std.testing.allocator, "[1, 2, invalid]", &diagnostic);
  // we must check there was an error before we can use the diagnostic
  try std.testing.expectEqual(result, error.InvalidToken);
  try std.testing.expectEqual(diagnostic.position, 7);
}
```

### Hand-rolled Result generics

Today, you can also just use zig's standard tagged union support to
make your own union with one or more error states, and return that.
But then you lose zig's builtin `zig:LANG>try`,
`zig:LANG>catch`, and `zig:LANG>errdefer` to handle errors.

Not having try/catch turns out to be somewhat manageable though.
More on `zig:LANG>errdefer` later

Let's try to copy Rust's generic `Result` type for errors.

```zig
pub fn Result(comptime R: type, comptime E: type) type {
  return union (enum) {
    ok: R,
    err: E,
  };
}

fn parseJsonRes(alloc: std.mem.Allocator, json_src: []const u8) Result(JsonValue, Diagnostic) {
  //...
}

test "valid" {
  var result = parseJsonRes(std.testing.allocator, "[1, 2]");
  try std.testing.expectEqual(result, .ok);
}

test "invalid" {
  var diagnostic: Diagnostic = .{};
  var result = parseJsonRes(std.testing.allocator, "[1, 2, invalid]");
  try std.testing.expectEqual(result, .err);
  try std.testing.expectEqual(diagnostic.err.position, 7);
}
```

Admittedly, idiomatic `zig:LANG>try` and `zig:LANG>catch` become slightly more cumbersome.

```zig
// diagnostic parameter must be propagated up the call chain
fn useParseJson(alloc: std.mem.Allocator, diagnostic: ?*Diagnostic) void {
  const json = try parseJson(alloc, "[]", diagnostic);
}

fn useParseJsonRes(alloc: std.mem.Allocator) ?Diagnostic {
  // you can also use a switch for no intermediate variable but imo its ugly
  const result = parseJsonRes(alloc, "[invalid]");
  const json = if (result == .ok) result.ok else return result.err;
  return null;
}
```

### `zig:LANG>errdefer` 

`zig:LANG>errdefer` is worse, but there is hope.
Remember that `zig:LANG>errdefer` is important in cases such as when you
allocated something for the caller to own, but now they
receive only the error and you need to destroy the incomplete object
instead of leak it.

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
...

### Bonus: benchmark

