const std = @import("std");
const zbench = @import("zbench");

fn benchmarkDiagnosticPattern(allocator: std.mem.Allocator) void {
    return 1 + 10;
}

fn benchmarkErrorUnionPayload(allocator: std.mem.Allocator) void {
    return 1 * 10;
}

test "bench test" {
    var bench = zbench.Benchmark.init(std.testing.allocator, .{});
    defer bench.deinit();
    try bench.add("Error union payload", benchmarkErrorUnionPayload, .{});
    try bench.add("Diagnostic pattern", benchmarkDiagnosticPattern, .{});
    try bench.run(std.io.getStdOut().writer());
}

pub fn main() !void {
    // Prints to stderr (it's a shortcut based on `std.io.getStdErr()`)
    std.debug.print("All your {s} are belong to us.\n", .{"codebase"});

    // stdout is for the actual output of your application, for example if you
    // are implementing gzip, then only the compressed bytes should be sent to
    // stdout, not any debugging messages.
    const stdout_file = std.io.getStdOut().writer();
    var bw = std.io.bufferedWriter(stdout_file);
    const stdout = bw.writer();

    try stdout.print("Run `zig build test` to run the tests.\n", .{});

    try bw.flush(); // don't forget to flush!
}
