---
path: "/blog/funding-open-source-with-profiling"
title: "Donating to open source"
date: "2025-01-25"
---

## Funding open source is unfair

<!-- TODO: check linux foundation Census 3 for some quotes -->

I need to say right out of the gate, I have done only minimal donating to Open Source projects.
I have eyes on some projects, and if I owned a business I definitely would, but I hope to
be in a position to do more of it soon.

These days almost all software projects have some sort of Open Source dependency.
In fact I saw a lot of people [complaining](https://lucumr.pocoo.org/2025/1/24/build-it-yourself/)
[about](https://notes.eatonphil.com/2025-01-25-an-explosion-of-transitive-dependencies.html) dependencies recently.
Even if you somehow avoid dependencies, you're probably using a compiler or build system that is itself open source.

It often comes up that very few people pay these people anything. You've probably seen the essential XKCD post:

<div style="text-align:center">
  <img style="width:50%"
    alt="XKCD comic 2347, the whole world depends on some package thanklessly maintained by some random guy in Nebraska for years"
    src="https://www.explainxkcd.com/wiki/images/d/d7/dependency.png"
  />
</div>

And I think part of the reason is it's hard to do it fairly.
Which dependencies could you not live without? What about _transitive_ dependencies that they rely on heavily,
and you don't even know?

There are a lot of criteria for why you may have chosen to use a dependency:

- Is your application functionality built upon these dependencies?
- There are alternatives but you chose a particular one, maybe it's more faster or more popular.
- You didn't want to write and maintain that code yourself
- You probably couldn't write that code yourself if you tried

A while ago, I read someone [donating to open source projects](https://kvinogradov.com/algo-sponsors/)
algorithmically by project popularity statistics. That's quite charitable, but,
I think all but the largest companies might be reluctant to apply this as they probably do not _use_
the vast majority of code selected by that criteria.

But it made me think of an alternative that could help you analyze a
fairer way for some people that want to give back to those they have
stood upon the shoulders of.

## (Performance) profiling your open source usage

So here is my proposal.

Profile your code! I hope you do it anyway... but this time break out some tools and process the callstacks
your profiler captured and see how much time your project spends in those dependencies instead of in code you wrote.

I wanted to try it quickly a month ago, and even found that there's a [perf script](/FIXME) to dump the contents of a
perf.data profile into a sqlite database, but it required the Qt sqlite connector for some reason and
it was not trivial to install on my Manjaro machine, so I gave up for a bit then.
But I came back recently, rewrote it to use the [`sqlite3`](https://docs.python.org/3/library/sqlite3.html) standard python module, and then realized it was easy enough to write
my own Python perf script instead of SQL queries, so we're going to do that!

## How is profiling fair?

I think performance profiling has some useful characteristics which make it better than
alternatives for determining how much you owe to a given dependency.
Particularly, the incentives, as far as I can tell, are well oriented, and lead to imo better
tradeoffs.

Tradeoffs like:

- "this dependency is clearly valuable and above my bandwidth to maintain" _or_ "this dependency is tiny and I can write my own and maintain it myself"
- "this dependency is weirdly slow, maybe we should contribute some performance improvements so that we owe them less?"
- "this dependency is weirdly slow, let's find a lightweight alternative that doesn't have all these extra features we don't need"
- "we barely use this dependency, so I feel comfortable giving it less than to other dependencies"
- "let's hire a maintainer of this dependency so it doesn't count towards our open source usage"

You might already thought of multiple issues with the whole concept, and I do too, in fact I can list a lot:

- Isn't I/O and peripheral access slow? What about network requests? Might code in that area be unfairly overemphasized?
- It's hard to make one profile "cover" all the branches that might occur in your deployments
- Isn't AI inference slow?
- Some code is ran way more often than others... e.g. rendering code?
- What about slow hardware?
- What about which language you're using? If your code is written in Python,
  should it really donate more to open source
  than using a dependency written in C++
- What about packages that are slower on different runtimes?
- What about your language's runtime? How do you measure how much you owe to the Python foundation for maintaining
  Python itself that you wrote in your language?
- What about compilers? If they run longer but optimize your dependencies to run faster, how does that affect cost?
- Can you make your own code slower to deflate the "value" of your dependencies?

So I'm not saying it's perfect, and taken to the _n_<sup>th</sup> degree, you would have to profile *all*<sup><a href="#footnote-1">1</a></sup>
your deployed code, which is far from practical.

Still, I think the incentives are mostly right. If AI is slow and expensive, maybe you should be disincentivized to use it?
Same with unoptimized libraries. You can also be incentivized to go in and optimize them yourself!
I think a general profiling session of several of your core projects will probably give you some
insight into whose shoulders you might have not realized you've been standing on this whole time.

## Profiling dependencies with Linux's `perf`

Let's start a script. To use `perf`'s script generator, you need some data to know which events were tracked.
Record whatever you want, I'll record `ls` for simplicity.

```sh
perf record -g ls
perf script -g python
# man perf-script-python # make sure to check out the manpage
```

I only care about profile stacks, so I only added `-g` and no perf events.
You will be given `trace_begin` and `trace_end` functions, but we also need to add a `process_event`
function since we didn't record any specific event types, so the script generator decided not to add
stub methods, stack probing is not considered by default.

We'll immediately use the base `perf_script_context` with `perf_sample_srcline`
to grab each probe's bottom frame's source location and start counting how often we're
in a source directory, we'll improve that in a second

```python
import perf_trace_context as perf

dirs = {}

def process_event(event):
    file, _line = perf.perf_sample_srcline(perf.perf_script_context)
    if file is not None:
        key = os.path.dirname(file)
        dirs[key] = dirs.get(key, 0) + 1
```

Now let's group every dependency by finding its "root", where it has a README or src or include dir at the top:

```python
def process_event(event):
    file, _line = perf.perf_sample_srcline(perf.perf_script_context)
    if file is not None:
        # TODO: this could be more efficient via prefix searches
        key = os.path.dirname(file)
        for prefix, target in remaps.items():
            if file.startswith(prefix):
                key = target
                break
        dirs[key] = dirs.get(key, 0) + 1
```

processing zig dependencies

```python

remaps = { '/usr/lib/zig/std': 'zig-std' }

def populateRemapsFromZigPkgCache():
    import re
    zon_name_pat = re.compile(r'\.name\s*=\s*"(?P<name>[^"]*)"', flags=re.M)
    zon_vers_pat = re.compile(r'\.version\s*=\s*"(?P<ver>[^"]*)"', flags=re.M)
    zig_pkgs_root = os.path.join(os.environ['HOME'] + '/.cache/zig/p')
    for pkg_hash in os.listdir(zig_pkgs_root):
        pkg_path = os.path.join(zig_pkgs_root, pkg_hash)
        name = None
        zon_path = os.path.join(pkg_path, 'build.zig.zon')
        try:
            with open(zon_path, 'r') as zon:
                content = zon.read()
                name = zon_name_pat.search(content)['name']
                version = zon_vers_pat.search(content)['ver'] + f'+{pkg_hash[:16]}'
        except Exception as e:
            sys.stderr.write(f'Error reading zon "{zon_path}": {e}\n')
        if name is not None:
            remaps[pkg_path] = f"{name}@{version}"

def trace_end():
    print(f"Summary:")
    total = sum(dirs.values())
    for dir, count in sorted(dirs.items(), key=lambda t: -t[1]):
        print("{}: {:.2f}%".format(dir, 100 * count/total))

```

-----------------------

1. <div id="footnote-1"></div> I can't help but say that _probably_ this is related to a concept that I'm not very familiar with, gas in web3 stuff.
  I could totally be wrong and I'm not checking, but my understanding was the language runtime records how much computation
  is spent in different places and treats it as a resource. I'm sure other runtimes have done this for non-web3 reasons too.

  So if you really want a non estimate of how much money you owe your dependencies, you can do that, I guess.

