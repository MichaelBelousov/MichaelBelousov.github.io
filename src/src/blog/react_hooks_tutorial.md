---
path: "/blog/react-hooks-tutorial"
title: "React and its hooks without Create React App"
date: "2020-05-06"
---

So you want to join the [React](https://reactjs.org) world, but when you look online,
you either see some buzz about hooks, or a bunch of tutorials using React with big
classes and method overrides. Most of all you probably see something that isn't technically
real Javascript, JSX.

There's an open secret about modern web development. It's complicated. Really complicated.
A-transpiles-to-B-transpiles-to-C-transpiles-to-Javascript complicated. Maybe this isn't that
secret, but lots of web developers either ignore it or pretend it's easy after learning
50 distinct technologies to make their website. This article will try to take the magic out,
and demonstrate that at the end of the tunnel there is a light.

JSX is a very small one of those many technologies, a syntax extension for JavaScript that allows you to declare
HTML\* constructs in code instead of manually manufacturing them. Even more specifically, JSX
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

## modules

We will make our React and ReactDOM libraries globals variables in the browser by linking them in the HTML. We will use the
[UMD](https://github.com/umdjs/umd) packaged version of React, hosted by
some friendly denizens of the internet [jsdelivr](https://www.jsdelivr.com/) which are a Content Delivery Network or CDN, so they host common
files like packaged React builds for us. There are a lot of module formats for JS, but UMD uses a global variable in the browser which makes it
the easiest for us to use consume without a bundler like webpack to process it for us.
You can use jsdelivr's search bar to find React, but here's [a link](https://www.jsdelivr.com/package/npm/react?path=umd)
directly to their page on provided UMD packages of React. Go ahead and hit the copy clipboard icon and copy the HTML vesion and load
that script in out HTML.  It will already be set to the latest stable version which should be fine.

```html
<!DOCTYPE html>
<!-- index.html -->
<html>
  <head>
  </head>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.development.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.development.js"></script>
  <script src="/index.js"></script>
</html>

```

TypeScript is only designed to really work with packages, so it won't understand yet that we're
expecting React to already exist in global scope. This makes sense, since TypeScript wants to know
the type of everything that is being used, including imported functions. Normally, we'd install the React
package and import it in typescript as such:

```tsx
import React from "react";
import ReactDOM from "react-dom";
```

Instead, we will simply tell typescript using the *declare* keyword, that something exists that it can't tell
by itself. We won't go any further into typescript, this will shut up the compiler.

```
declare var React: any;
declare var ReactDOM: any;
```

This tells typescript that it should expect the names React and ReactDOM were declared using the "var"
keyword somewhere before the code the compiler is processing, and it tells the compiler to not care about their
type by giving them the type, `any`. We lose valuable typechecking, but you it makes things less complicated to start,
we'll still get valuable type checking for our own stuff, but not when we use the React and ReactDOM names.

Let's get our new `index.tsx` file off the ground:

```tsx
declare var React: any;
declare var ReactDOM: any;

class AttributeCounter extends React.Component {
  constructor() {
    this.state = { value: 10 };
  }
  render() {
    return (
      <span>
        {this.props.name}: {this.state.value}
        <button>+</button>
        <button>-</button> 
      </span>
    );
  }
}

function PointBuy(props) {
  return (
    <AttributeCounter name={"Strength"} />
    <AttributeCounter name={"Charisma"} />
    <AttributeCounter name={"Wisdom"} />
  );
}

ReactDOM.render(
  <PointBuy/>,
  document.getElementById('root')
);
```

Now run `tsc` with the `--jsx` setting set to "react" (it can also not transpile it or target react for iOS). Run it:

```bash
tsc --jsx react index.tsx
```

Typescript will create the index.js file for you or yell at you if you made a mistake. You can open it and see some neat tricks, including the converted JSX, 
as well as transpilation of other not-well supported javascript features like the class is compiled to a function with a "prototype" property attached to it.
You can read up on prototype based inheritance and JavaScript's object/class model elsewhere, since that's not in scope here. Either way, you should now
be able to run a server, like the Python simple http server mentioned earlier, open index.html and see React render out 3 values and 3 "+" buttons, and 3 "-" buttons.
With React working, we can talk about state, and what that "useState" function does, and how we're going to use state differently in that class component.

## hooks, class components, and modules

React 16.8 introduced the concept of "hooks". React already had what they call "functional components", which is where a function takes an object of props as an argument,
and returns a JSX fragment. Hooks allow you to "hook" into React's render logic specific to the currently rendering component. This can be used to identify each component
in the rendered component tree, which means functional components which normally only have access to props can now store their own state in a way unique to the component.
With that, you can ditch the use of classes entirely, but we'll come back to this after we learn how to use state the old way in React anyway.

You'll notice we used a class in our `index.tsx` already. This is the old way of creating stateful components that can rerender themselves. You simply inherit (extend)
the official React.Component class, and override its lifecycle methods, in this case just render. In these objects, state is a singular property of a component instance,
but you can't set it the same way as you normally do in JavaScript. To set state, you need to do it in a way that React knows, so you use the inherited function, `setState`,
which takes an object containing all of the changes state values. Let's make that "+" button increment the `value` property of the state.

```tsx
class AttributeCounter extends React.Component {
  constructor() {
    this.state = { value: 10 };
  }
  render() {
    return (
      <span>
        {this.props.name}: {this.state.value}
        <button onClick={() => {
          this.setState({value: this.state.value+1});
        }}>+</button>
        <button>-</button> 
      </span>
    );
  }
}
```

To do so, we use React's built-in support for setting a listener similiarly to how we would on the DOM, but directly on the component and taking an actual function reference.
On the DOM you'd have to pass a name to a function in scope to the "onclick" attribute, or manually find the element, probably by setting some id attribute, and use the DOM
element API to attach and possibly remove the listener. But here we can just use an arrow function inline to run our component instance's `setState` method to increment the value.
Next we decrement for the "-" button:

```tsx
class AttributeCounter extends React.Component {
  constructor() {
    this.state = { value: 10 };
  }
  render() {
    return (
      <span>
        {this.props.name}: {this.state.value}
        <button onClick={() => this.setState({value: this.state.value+1})}>+</button>
        <button onClick={() => this.setState({value: this.state.value-1})}>-</button>
      </span>
    );
  }
}
```

In original React, this was the only way to use state in a way that would cause components to rerender. It's not bad, but it's
a lot of boiler plate, and we aren't using any of the life cycle methods at all yet. This works because our component class gives us
a new instance of the component each time React needs one, and we store the state on that component until the component is unmounted by
React and its instance and state variables can be garbage collected.
When we call `ReactDOM.render`, we give it our React element to render, created by the implicit React.createElement which we're using JSX
to hide. When the react element to be rendered is a class, an instance is initialized, rendered, and mounted
(React jargon for its resulting render HTML is added to the DOM and React keeping track of it).

If you pass a function to `React.createElement`, React can't create an instance, so it just runs the function with the props object as an argument
from the parent. A functional component used like `<MyFunction a={5} b={"hello"} c />` would be interpreted by React as `MyFunction({a: 5, b:"hello", c: true})'`. Then
whatever JSX-fragment/React-element that functional component returns is rendered with its components in turn, or raw HTML elements which can be known in JSX
as "intrinsic elements". The point is, there is no state this way, just the props passed by the parent.

But we can have state in functional components, when React pays attention to the render order in the tree. Before we start using state in
our functional component using hooks, lets look at where that state is stored, so we can better understand some of the restrictions hooks will
impose.

Suppose we have the following React app:

```jsx

function C() { return "hello"; }

function B(props) {
  return (
    <div> <C/> {props.b && <C/>} </div>
  );
}

class A() {
  constructor() {
    this.state = { a: true };
    setTimeout(() => this.setState({a: false}), 5000); // in 5 seconds make false
  }
  render() {
    return <B b={this.state.a}/>;
  }
}

ReactDOM.render(<A/>, root);
```

So the App is an `A` component, when A is rendered, it tells React to render one child `B` with a prop of `b` as `true` which is
derived from its state of `a`. `B` renders two `C` components, because its `b` component as passed to it was true, and the `&&` expression evaluated
via short-circuiting to a `B` element`.


