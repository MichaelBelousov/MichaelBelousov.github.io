const std = @import("std");
const zbench = @import("zbench");

fn benchmarkDiagnosticPattern(allocator: std.mem.Allocator) void {
    _ = allocator;
}

fn benchmarkErrorUnionPayload(allocator: std.mem.Allocator) void {
    _ = allocator;
}

test "bench test" {
    std.debug.print("1\n", .{});
    var bench = zbench.Benchmark.init(std.testing.allocator, .{});
    defer bench.deinit();
    try bench.add("Error union payload", benchmarkErrorUnionPayload, .{});
    try bench.add("Diagnostic pattern", benchmarkDiagnosticPattern, .{});
    std.debug.print("2\n", .{});
    try bench.run(std.io.getStdOut().writer());
    std.debug.print("3\n", .{});
}

pub fn main() !void {}
