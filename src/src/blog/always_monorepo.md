---
path: "/blog/always-monorepo"
title: "Always use a Monorepo"
date: "2020-02-15"
---

Always use a monorepo. Because otherwise the temptation to jam more stuff into one package is too strong.
Context switches are annoying, and that may prevent you from correctly crossing package lines when thinking
where to put your code. In my terrible opinion you can always extract the history out to
a separate repo later with [git filter-repo](https://github.com/newren/git-filter-repo).

Anyway, the *real* reason to use a monorepo is because in tooling environments like HTML5
JavaScript stacks (e.g. create-react-app),
(where monorepo jargon is especially popular) you can expose custom linter rule packages that
bend everyone to your all-knowing will!!!!!! In a work project recently, we had some Sass theming logic
that I deprecated in favor of a more direct, less complicated method for achieving the same thing.
We all wanted a better method and had been looking for a while.
Deprecating it was a great step, but in a large product code base, there's little value and
possible danger in taking a long time to rewrite all of the deprecated references.
The ideal approach is "progressive migration"&mdash;not wasting time converting everything
that works fine as is, but slowly converting anything that needs maintenance, implying a
sort of LRU chipping away at usage of the deprecated styling technique. Since we were already using
lint-staged+husky to force linting of vcs-staged files precommit, I just added the new
deprecation rule and set it to error, so
other developers could not change style files without first migrating the deprecated references.
It's a tad intense since it still
demands that you migrate any file you may make small changes to, but it ensures active files receive
the love of an easier theming logic so future maintenance is easier.

Without a very proper naming scheme, or private package registry like we have, project-scope
packages are a bit difficult to justify. But, if you're careful, there's a lot of value and change
you can bring about by reading your linters' APIs.

Without a monorepo setup, I'd have had to setup a separate repository and publishing pipeline. Not
a ton of work, but for a utility of exactly project-scope it belongs in your project's source
(vcs) context. I especially opted for this since stylelint only seems to support package-level
custom rules (afaik). I'm sure a module-level custom rule would have been nicer for something
project-only.

JS Monorepos can come with their own headaches, but the scalable reusability is essential.
