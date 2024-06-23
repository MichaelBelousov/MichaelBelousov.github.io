const std = @import("std");
const zbench = @import("zbench");

const Diagnostic = struct {
    position: usize = 1000, // contrived, use usize max
};

const JsonValue = struct {
    type_: u32 = 0,
};

fn parseJson(alloc: std.mem.Allocator, json_src: []const u8, diagnostic: ?*Diagnostic) !JsonValue {
    _ = alloc;
    if (json_src[0] == '[') return JsonValue{};
    if (diagnostic) |d| d.* = .{
        .position = 0,
    };
    return error.InvalidToken;
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

pub fn Result(comptime R: type, comptime E: type) type {
    return union(enum) {
        ok: R,
        err: E,
    };
}

fn parseJsonRes(alloc: std.mem.Allocator, json_src: []const u8) Result(JsonValue, Diagnostic) {
    _ = alloc;
    if (json_src[0] == '[') return .{ .ok = JsonValue{} };
    return .{ .err = Diagnostic{ .position = 0 } };
}

test "res valid" {
    const result = parseJsonRes(std.testing.allocator, "[1, 2]");
    try std.testing.expect(result == .ok);
}

test "res invalid" {
    const result = parseJsonRes(std.testing.allocator, "invalid");
    try std.testing.expect(result == .err);
    try std.testing.expectEqual(result.err.position, 0);
}

// diagnostic parameter must be propagated up the call chain
fn useParseJson(alloc: std.mem.Allocator, diagnostic: ?*Diagnostic) void {
    const json = try parseJson(alloc, "[]", diagnostic);
    _ = json;
}

fn useParseJsonRes(alloc: std.mem.Allocator) ?Diagnostic {
    // you can also use a switch for no intermediate variable but it gets ugly
    const result = parseJsonRes(alloc, "invalid");
    const json = if (result == .ok) result.ok else return result.err;
    _ = json;
    return null;
}

var input: []const u8 = "";

noinline fn errdeferParseJson(alloc: std.mem.Allocator, diagnostic: ?*Diagnostic) !u32 {
    const result = 1;

    const json = try parseJson(alloc, input, diagnostic);
    _ = json;

    return result;
}

noinline fn errdeferParseJsonRes(alloc: std.mem.Allocator) Result(u32, Diagnostic) {
    var result: Result(u32, Diagnostic) = .{ .ok = 0 };
    //defer if (result == .err) ok.deinit();

    const json = switch (parseJsonRes(alloc, input)) {
        .ok => |o| o,
        .err => |e| {
            result = .{ .err = e };
            return result;
        },
    };

    _ = json;

    return result;
}

noinline fn benchmarkDiagnosticPattern(allocator: std.mem.Allocator) void {
    var diagnostic = Diagnostic{};
    _ = errdeferParseJson(allocator, &diagnostic) catch return;
}

noinline fn benchmarkErrorUnionPayload(allocator: std.mem.Allocator) void {
    _ = errdeferParseJsonRes(allocator);
}

fn benchmarkImpl(alloc: std.mem.Allocator) !void {
    // FIXME: probably not a good allocator for benchmark? (but should be ignored)
    var bench = zbench.Benchmark.init(alloc, .{
        .time_budget_ns = 1e9,
    });
    defer bench.deinit();
    try bench.add("Error union payload", benchmarkErrorUnionPayload, .{});
    try bench.add("Diagnostic pattern", benchmarkDiagnosticPattern, .{});
    try bench.run(std.io.getStdOut().writer());
}

test "bench test" {
    try benchmarkImpl(std.testing.allocator);
}

pub fn main() !void {
    input = std.posix.getenv("TEST_INPUT") orelse @panic("set TEST_INPUT in env");

    // apparently zbench uses a lot of memory?
    // var buffer: [8192]u8 = undefined;
    // var fba = std.heap.FixedBufferAllocator.init(&buffer);
    // const alloc = fba.allocator();

    var arena = std.heap.ArenaAllocator.init(std.heap.page_allocator);
    defer arena.deinit();
    const alloc = arena.allocator();

    try benchmarkImpl(alloc);
}
