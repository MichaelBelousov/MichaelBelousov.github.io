---
path: "/blog/funding-open-source-with-profiling"
title: "A better way to fund your Open Source dependencies - profiling"
date: "2024-12-07"
---


## Funding open source is unfair

<!-- TODO: check linux foundation Census 3 for some quotes -->

These days almost all software projects have some sort of open source dependency.
If not explicitly, congrats, but perhaps you've written it in a programming language that is open source?

It often comes up that we don't pay these people anything. You've probably seen the essential XKCD post:

<div style="text-align:center">
  <img style="width:50%" alt="XKCD comic 2347, the whole world depends on some package thanklessly maintained by some random guy in Nebraska for years" src="https://www.explainxkcd.com/wiki/images/d/d7/dependency.png" />
</div>

And part of the reason is it's hard to do it fairly. Do you audit which dependencies
your dependencies use (transitive dependencies)?

There are a lot of criteria for what makes these dependencies valuable:

- Does your application heavily rely on these dependencies?
- How much do they use those dependencies?
- Why did you choose those dependencies over alternatives?
- Why didn't you write your own solution for the problem the dependency solves?
- Could you write that dependency yourself if you had to?

I recently read someone [donating to open source projects](https://kvinogradov.com/algo-sponsors/)
algorithmically by project popularity statistics. That's quite charitable, however,
I think all but the largest companies could be reluctant to apply this as they probably do not _use_
the vast majority of code selected by that criteria.

Thinking about this, I have come up with an alternative that I think might be
a better way forward for some people that want to give back to those they have
stood upon the shoulders of.

## (Performance) profiling your open source usage

So here is my proposal.

Profile your code! You should do it anyway... but this time break out some tools and process the callstacks
your profiler captured and see how much time your project spends in those dependencies instead of in code you wrote.

I wanted to try it quickly, and even found that there's a perf script to dump the contents of a perf.data profile
into a sqlite database, but it's broken on machine, so I'm tabling it for right now to prioritize other things.
I will come back to this article and make it more exciting with some real profiling later.

## Is profiling fair?

I think performance profiling has some useful characteristics which make it better than
alternatives for determining how much you owe to a given dependency.
Particularly, the incentives, as far as I can tell, are well oriented, and lead to imo better
tradeoffs.

Tradeoffs like:

- "this dependency is clearly valuable and above my bandwidth to maintain _or_ this dependency is tiny and I can vendor it (if license permits) and maintain it myself"
- "this dependency is weirdly slow, maybe we should contribute some performance improvements so that we owe it less?"
- "this dependency is weirdly slow, let's find a lightweight alternative that doesn't have all these extra features we don't need"
- "we barely use this dependency, I don't think enough to prioritize it over other dependencies of ours"
- "let's hire a maintainer of this dependency so it doesn't count towards our open source usage"

You might already think though that there are some issues with this idea, in fact I can list a lot:

- Isn't I/O and peripheral access slow? What about network requests? Might code in that area be unfairly overemphasized?
- Isn't AI inference slow?
- Some code is ran way more often than others... e.g. rendering code?
- What about slow hardware?
- What about optimizations? Why would a more optimized library earn more than a less optimized library?
- What about which language you're using? If your code is written in Python, should it really donate more to open source
  than using a dependency written in C++
- What about your language's runtime? How do you measure how much you owe to the Python foundation for maintaining
  Python itself that you wrote in your language?
- What about compilers? If they run longer but optimize your dependencies to run faster, how does that affect cost?

So I'm not saying it's perfect, it's impractical (possibly even non-performant 😅) to profile all your
deployed code to every client anyway.

But a general profiling session of several of your core projects is probably a good start, and should give you some
insight into whose shoulders you might have not realized you've been standing on this whole time.
