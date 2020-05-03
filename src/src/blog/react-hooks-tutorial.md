---
path: "/blog/react-hooks-tutorial"
title: "Bill Wurtz"
date: "2020-05-06"
---

# React with Hooks and without create-react-ap

So you want to join the [React](https://reactjs.org) world, but when you look online,
you either see some buzz about hooks, or a bunch of tutorials using React with big
classes and method overrides. Most of all you probably see something that isn't technically
real Javascript, JSX.

There's an open secret about modern web development. It's complicated. Really complicated.
A-transpiles-to-B-transpiles-to-C-transpiles-to-Javascript complicated. Maybe this isn't that
secret, but lots of web developers either ignore it or pretend it's easy after learning
50 distinct technologies to make their website.

JSX is a very small one of those, a syntax extension for JavaScript that allows you to declare
HTML^\* constructs in code instead of manually manufacturing them. Even more specifically, JSX
is only really syntactic sugar used by the react ecosystem for constructing "components", a
parametric chunk of HTML.

Take for instance the following vanilla JavaScript script running in a simple webpage.
If you want to test it, you can run `python3 -m http.server` in a folder
containing the two files, then you can see it at localhost:8000 in the browser.

```js
// index.js
var people = [{name: 'John', age: 25}, {name: 'Mike', age: 22}];
var root = document.getElementById('root');
var ul = document.createElement('ul');
root.appendChild(ul);

for (var i = 0; i < people.length; i++) {
  var li = document.createElement('li');
  li.innerHTML = people[i].name + " is " + people[i].age + " years old";
  ul.appendChild(li);
}

// If you've seen modern JavaScript, you'll notice there are
// some no-nos aboce, there are better ways to do things now
```

```html
<!DOCTYPE html>
<!-- index.html -->
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="/index.js"></script>
</html>
```

JSX gives us a much more declarative way to do this:

```jsx
var people = [{name: 'John', age: 25}, {name: 'Mike', age: 22}];
ReactDOM.render(
  <ul>
    {people.map(person => <li> {person.name} is {person.age} years old </li>)}
  </ul>,
  document.getElementById('root')
);
```

But there is one significant difference, JSX is only used in the react ecosystem,
where DOM elements aren't actually used directly. That's why we need to tell React to run its own
render method given the JSX expression. JSX isn't equivalent to calling the DOM's element construction
API/functions, even though someone could write a JSX transpiler that did that, it's never seen wide usage.
The output of the above JSX produces the following:

```js
React.createElement('ui', null, 
  // the ... "spread" syntax used allows us to generate an arbitrary list of arguments
  // arguments 3 and beyond to the "React.createElement" call are the react children, which
  // can be strings to be an html text node
  ...people.map(p => React.createElement('li',  null, 
    `${p.name} is ${p.age} years old`
  ))
);
```

React choosing to not use real elements allows it to have a light-weight representation of the DOM (this technique is called
using a *virtual DOM* or *VDOM*) that it can later efficiently update the real DOM to match. If you want
to experiment with more JSX to regular JavaScript conversions, [Babel](https://babeljs.io), the world's de facto JavaScript
transpiler has a [playground for JSX compilation](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.9.6&externalPlugins=).

The other main thing React allows, with JSX making it syntactically convenient, is user-defined "components", they look like normal
HTML elements being used in JSX, but they have custom logic in what attributes (*props* in React parlance) you can pass them, what
HTML they generate with those attributes, and they can have their own internal state. For example:

```jsx
function MyComponent(props) {
  return props.person.age % 2 == 0 ? (
    <li> {props.person.name}'s age is divisible by <strong>2</strong>! </li>
  ) : (
    <li> {props.person.name} is {props.person.age} years old </li>
  );
}

ReactDOM.render(
  <MyComponent person={{name: 'Mike', age: 30}} />,
  document.getElementById('root')
);
```

That example doesn't actually have state, just to note, but it does generate different
HTML depending on what is passed to it.

## Setting up JSX transpilation without magic

To *transpile* is like to compile, but instead of transforming a higher level source language into a lower level language,
it is more indicative of transforming into a similar language. JSX to Javascript, is often called transpilation, probably
because it's done often by Babel which is usually used for real transpilation of converting some JavaScript code into other
JavaScript code using more well-supported features that most browsers will have implemented. As mentioned before, Babel
is the world's most popular JavaScript transpiler. The most popular way to use react is with a tool called [create-react-app](https://github.com/facebook/create-react-app).

But CRA installs about 1500 packages as of today, and uses a *bundler*, webpack, that manages a transpiler toolchain and hides
the nitty-gritty real stuff from you. You should work without webpack at least once, but I do recommend using webpack for heavy
and production products, where you can get optimization and hot-reloading during development.

Another tool that is thankfully less magical and we will make use of here, is TypeScript. We won't focus on TypeScript itself, but it will
let us look at the nitty gritty while still developing React comfortably. If you haven't already, now is the time to install Node.js,
I recommending using a Node installation management program like [nvm](https://github.com/nvm-sh/nvm), or if you're on windows,
[nvm-windows](https://github.com/coreybutler/nvm-windows), to install it. Use it to install a capable version of Node like the following:

```bash
nvm install 12.16.3
nvm use 12.16.3
```

With node installed, comes its package manager, `npm`. We could already install `create-react-app` here, but we're just going to 
only install typescript, which will give us the typescript compiler program, `tsc`. Install it globally (as opposed to the current
directory/project) using `npm`.

```bash
npm install --global typescript
```

Now you should be able to run `tsc -h`, to see some of the options. TypeScript's job for us is not just to compile TypeScript to JavaScript, but more importantly to
transpile our JSX to React, since it supports JSX in `.tsx` files. For this article, our goal will be to create a point-buy system
for an RPG character. We'll use React with and without hooks, see the difference, and emply some basic css to make it stylish.

## hooks, class components, and modules

We will make our React and ReactDOM libraries globals variables in the browser by linking them in the HTML. We will use the
[UMD](https://github.com/umdjs/umd) packaged version of React, hosted by
some friendly denizens of the internet [jsdelivr](https://www.jsdelivr.com/) which are a Content Delivery Network or CDN, so they host common
files like React for us. There are a lot of module formats for JS, but UMD uses a global variable in the browser which makes it the easiest for us
to use without a bundler like webpack to process it for us.
You can use jsdelivr's search bar to find React, but here's [a link](https://www.jsdelivr.com/package/npm/react?path=umd)
directly to their page on provided UMD packages of React. Go ahead and hit the copy clipboard icon and copy the HTML `<script>` tag and put it
our HTML, it will already be set to the latest stable version which should be fine.

```html

```tsx
// import React from "react";
declare const React: any;
// import ReactDOM from "react-dom";
declare const ReactDOM: any;

function AttributeCounter(props) {
  const [value, setValue] = React.useState(10);

  return (
    <span>
      {props.name}: {value}
      <button onClick={}>+</button>
      <button onClick={}>-</button> 
    </span>
  );
}

class PointBuy {
  render() {
    return (
      <AttributeCounter name={"Strength"} />
      <AttributeCounter name={"Charisma"} />
      <AttributeCounter name={"Wisdom"} />
    );
  }
}

ReactDOM.render(
  <PointBuy/>,
  document.getElementById('root')
);
```

Let's start with our new `index.tsx` file which will compile to the actual `index.js` file. 

<!--https://www.jsdelivr.com/package/npm/react-->

## The component tree

## React Vocabulary

## Know when to memoize

## An example of old React

