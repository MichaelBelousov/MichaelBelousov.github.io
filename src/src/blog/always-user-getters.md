---
path: "/blog/always-use-getters"
title: "Use Derived Getter Properties"
date: "2020-10-26"
---

I just started (finally) getting into [Rust](https://www.rust-lang.org) recently,
and I miss properties. They're included in C#, Python, and JavaScript, but Rust doesn't
have them. 

The gripe most developers have with properties is they are often used in two malevolent ways:
- boilerplate for accessing a regular public field
- side-effects on field access

Both are bad, but I don't think they should overshadow a need for properties. There
are plenty of abused language features out there, that doesn't necessarily mean
they don't have a purpose, no matter what tools are out there.

Properties offer a solution to interface designers for the problem of derived state.
Suppose we're building a contrived geometry engine, and we need to store line. Here:

```rust
struct Line {
  slope: f32
  y_intercept: f32
}
```

If you remember a bit of middle school math, you'll know that there are a few ways to
represent a line. For instance point-slope form, or point
