---
path: "/blog/zig-error-payloads"
title: "Error payloads in zig today"
date: "2024-06-16"
---

I have a confession to make. I really like [zig](https://ziglang.com).
It has a lot of promise anyway. 

But one thing that can be a bit weird at first,
especially if you're used to Rust's `rust:LANG>Result` type for error unions

The problem is zig already has [error unions](/FIXME) FIXME. They just don't have payloads.
They only contain an error code. If you're using them to model (e.g. JSON)
parse errors that may require some context (e.g. at which position an expected token was missing), then you need something else to present that.

The prevailing idiom today, the [*diagnostic pattern*](/FIXME), suggests
your error-returning function should take an optional parameter which is an (often optional) pointer to a struct to fill with the additional context. It looks like this.

```zig
// define like

struct Diagnostic {
  position: usize = 0,
}

fn parseJson(alloc: std.mem.Allocator, json_src: []const u8, ?*Diagnostic) !JsonValue {
  //...
}

const t = @import("std").testing;

test "valid" {
  var diagnostic: Diagnostic = .{};
  var result = parseJson(t.allocator, "[1, 2]", &diagnostic);
  try std.testing.expect(result);
}

test "invalid" {
  var diagnostic: Diagnostic = .{};
  var result = parseJson(t.allocator, "[1, 2, invalid]", &diagnostic);
  // we must check there was an error before we can use the diagnostic
  try std.testing.expectEqual(result, error.InvalidToken);
  try std.testing.expectEqual(diagnostic.position, 7);
}
```

You can also of course just use zig's standard tagged union support to
make your own union with an error state, and return that,
but then you miss out on using zig's builtin `zig:LANG>try`,
`zig:LANG>catch`, and `zig:LANG>errdefer` to handle errors.

Lacking try/catch turns out to not be so bad though. More on `zig:LANG>errdefer` later

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
  var result = parseJsonRes(t.allocator, "[1, 2]");
  try std.testing.expectEqual(result, .ok);
}

test "invalid" {
  var diagnostic: Diagnostic = .{};
  var result = parseJsonRes(t.allocator, "[1, 2, invalid]");
  try std.testing.expectEqual(result, .err);
  try std.testing.expectEqual(diagnostic.err.position, 7);
}
```

So idiomatic try becomes the slightly more cumbersome

```zig
// diagnostic parameter must be propagated up the call chain
fn useParseJson(alloc: std.mem.Allocator, diagnostic: ?*Diagnostic) void {
  const json = try parseJson(alloc, "[]", diagnostic);
}

fn useParseJsonRes(alloc: std.mem.Allocator) ?Diagnostic {
  // you can also use a switch for no intermediate variable but it gets ugly
  const result = parseJsonRes(alloc, "[invalid]");
  const json = if (result == .ok) result.ok else return result.err;
  return null;
}
```

`zig:LANG>errdefer` is worse, but there is hope.
Remember that errdefer is important because when returning an error,
you may have allocated something for the caller to free, but now they
receive only an error and can't free it.
`zig:LANG>errdefer` is very useful in that case to prevent leaking those after returning
an error.

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

Also you have probably griped by now, that is a lot of work to get around
what is a lot less boilerplate in the error diagnostic pattern, which is mostly
because try/catch are tied to the payload-less error union feature of zig.

---

Also, to extract the code this blog post, do:

TEST ME

```bash
curl -fsSL https://mikemikeb.com/blog/zig_error_payloads.md | grep -Pzo '(?s)(?<=```)zig.*?(?=```)' > /tmp/blog_code.zig
```
