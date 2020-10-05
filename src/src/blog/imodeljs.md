---
title: "iModel.js Articles"
date: "2020-10-04"
---

I wrote a couple of articles for
[Bentley's iModel.js community blog](https://medium.com/imodeljs/community/home).
A disclaimer, I work for Bentley, but I found a very convenient
JavaScript pattern while using our vanilla Javascript APIs in React;
it inspired me to write about it for internal and external usage, and
that turned into two articles.

The pattern is called the `Provider-Local Class` pattern, I named it
myself but hopefully the idea is clear. It seriously helped
me simplify a lot of my code so go check it out for some
advanced React discussion, and maybe it'll improve your integration
of APIs in your React application somewhere.

The first article, [Writing a Primitive Tool](https://medium.com/imodeljs/writing-a-primitivetool-a044647f7f66),
serves as an application context for using the pattern, I've
included a gif of the final application just to pique the interest.

![gif of the app made in the article](https://miro.medium.com/max/700/1*fYaZC7eQrVdlFrQ-DMbhsA.gif)

Article two, [The Provider-Local Class Pattern](https://medium.com/imodeljs/provider-local-class-pattern-dc44bab33144), takes the example application
that was built, and simplifies usage of API subclasses with the pattern.
It also discusses the code-scalability that the pattern provides and
compares that with trying to do the same thing via [Redux](https://redux.js.org/).

If you think there are better alternatives (I think this is the most
idiomatic way to do it in React), please feel free to write a blog post
on why and send me a link.
