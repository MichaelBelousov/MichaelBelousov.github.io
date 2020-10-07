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
A-transpiles-to-B-transpiles-to-C-transpiles-to-Javascript complicated (more on the word
*transpile* later. Maybe this isn't that
secret, but lots of web developers either ignore it or pretend it's easy after learning
50 distinct technologies to make their website. This article will try to take the magic out,
and hopefully show that there is a light at the  end of the tunnel.

JSX is a very small one of those many technologies, a syntax extension for JavaScript that allows
you to declare HTML element trees in code instead of manually manufacturing them. Even
more specifically, JSX
is really syntactic sugar used by the react ecosystem for constructing "components", a
reusable chunk of HTML.
Take for instance the following vanilla JavaScript script running in a simple webpage.
If you want to test it, you can run `sh:LANG>python3 -m http.server` in a folder
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
// some no-nos above, there are better ways to do things now
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
// once you know react, you'll know there's something else you need when generating
// a dynamic list of children...
ReactDOM.render(
  <ul>
    {people.map(person => <li> {person.name} is {person.age} years old </li>)}
  </ul>,
  document.getElementById('root')
);
```

But there is one significant difference, JSX is only used in the react ecosystem,
where DOM elements aren't actually built directly by consumers. That's why we need to tell React to run its own
render method given the JSX expression. JSX isn't equivalent to calling the DOM's element construction
API/functions. Even though someone could write a JSX transpiler that did that, it's never seen
wide adoption, probably due to the prevalence of React (You should probably look into
[Svelte](https://svelte.dev/) if you're interested in something like that).
If we take what had above and see what the JSX transpiles to, we get the following:

```js
React.createElement('ui', null, 
  // the ... "spread" syntax used allows us to generate an arbitrary list of arguments.
  // parameter #3 and beyond to the "React.createElement" function are the children of the element,
  // and can be strings to be an html text node, or another complex element
  ...people.map(p => React.createElement('li',  null, 
    `${p.name} is ${p.age} years old`
  ))
);
```

React choosing to not use real elements allows it to have a light-weight representation of the DOM (this technique is called
using a *virtual DOM* or *VDOM*) that it can later efficiently update the real DOM to match. If you want
to experiment with more JSX to regular JavaScript conversions, [Babel](https://babeljs.io), the world's de facto JavaScript
transpiler has a [playground for JSX compilation](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.9.6&externalPlugins=).

For your reference, I'll leave here a terse demonstration of all JSX features and differences from HTML.

```jsx
//// dynamic children
const selfClosingTag = <div />; // all tags can be self closing
const dynamicContent = <span> {[selfClosingTag, selfClosingTag]} </span>; 
const lists = <span> {[selfClosingTag, selfClosingTag]} </span>; 
const emptyContent = <span> {} </span>; 
const objects = <span> {"string object"} {5} </span>; 
// this will throw an error, plain objects are not valid react elements
//const emptyContent = <span> {{}} {new Date()} </span>; 
const emptyContent = <span> {[<a href="/link"/>, 5, "hello!"]} </span>; 

const optionalContent = <span> {isLoading && <Loader/>} </span>;  // clever short-circuiting hacks
// this will throw an error, lower case components CANNOT be user-defined, they're "intrinsic components", defined by HTML
//const loader = <myloader />; // won't compile!
const stringProp = <MyLoader myCustomStringProp="string" />; // prop is to attribute as component is to element in React
// any object can be passed as a prop by using {} delimiters instead of quotes
const booleanProp = <MyLoader myCustomStringProp />; //this is sugar for myCustomStringProp={true}
const numberProp = <MyLoader myProp={5} />;
const anyObjectProp = <MyLoader myProp={{an: "object"}} />; // prop is to attribute as component is to element in React
// you can spread props
const examplePropObj = {prop1: "value", prop2: 3};
const spreadProps = <MyLoader {...examplePropObj} {...{hello: "world"}} />; // just like spreading objects


//// html differences
// use "className" instead of "class"
<MyComponent className="my-css-class" />
// listeners on intrinsic elements take real callbacks and are camel-cased
<MyComponent onMouseEnter={mouseevent => console.log(mouseevent.target)} />
// inline styles are camel-cased and objects instead of inline css
<MyComponent style={{
  marginBottom: "56px",
  marginTop: 0,
}} />
// A react "fragment" generates HTML without needing a parent tag, effectively
// injecting the HTML chunk into the parent element, good for wrapping multiple conditional children
<div> {test && <>{"hello!"} {5}</>} </div> // if test is true, yields <div>hello! 5</div>
// You cannot use XML/HTML comments
//<> <!-- not valid jsx --> </>
// and you can't always use JS comments which sucks...
// <div>
//   // this isn't valid JSX either
// </div>
// usually you can use this if you need a comment:
<div> {/* my valid comment */} </div>
```

The other main thing React allows, with JSX making it syntactically convenient, is user-defined
"components", they look like normal HTML elements being used in JSX, but they have custom
logic in what attributes (*props* in React parlance) you can pass them, what
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
is the world's most popular JavaScript transpiler. The most popular way to use React is with a tool called [create-react-app](https://github.com/facebook/create-react-app).

But CRA installs about 1500 packages as of today, and uses a *bundler*, webpack, that manages a transpiler toolchain and hides
the nitty-gritty real stuff from you. You should work without webpack at least once, but I do recommend using webpack for heavy
products and definitely anything in production, so you can get optimization and hot-reloading during development.

Another tool that is thankfully less magical and we will make use of here, is TypeScript. We won't focus on TypeScript much itself, but it will
let us look at the nitty gritty while still developing React comfortably. If you haven't already, now is the time to install [Node.js](https://nodejs.org),
I recommending using a Node installation management program like [nvm](https://github.com/nvm-sh/nvm), or if you're on windows,
[nvm-windows](https://github.com/coreybutler/nvm-windows), to install it. Use it to install a capable version of Node like the following:

```bash
nvm install 12.16.3
nvm use 12.16.3
```

With node installed, comes its package manager, `sh:LANG>npm`. We could already install `sh:LANG>create-react-app` here, but we're just going to 
only install typescript, which will give us the typescript compiler program, `sh:LANG>tsc`. Install it globally (as opposed to the current
directory/project) using `sh:LANG>npm`.

```bash
npm install --global typescript
```

Now you should be able to run `sh:LANG>tsc -h`, to see some of the options. TypeScript's job for us is not just to compile typescript to JavaScript, but more importantly to
transpile our JSX to React, since it supports JSX in `sh:LANG>*.tsx` files. For this article, our goal will be to create a point-buy system
for an RPG character UI. We'll use React with and without hooks, see the difference, and employ some basic css to make it stylish.

## modules

We will make our React and ReactDOM libraries globals variables in the browser by linking them in the HTML. We will use the
[UMD](https://github.com/umdjs/umd) packaged version of React, hosted by
some friendly denizens of the internet [jsdelivr](https://www.jsdelivr.com/) which are a Content Delivery Network or CDN, so they host common
files like packaged React builds for us. There are a lot of module formats for JS, but UMD uses a global variable in the browser which makes it
the easiest for us to consume without a bundler like webpack to process it for us.
You can use jsdelivr's search bar to find React, but here's [a link](https://www.jsdelivr.com/package/npm/react?path=umd)
directly to their page on provided UMD packages of React. Go ahead and hit the copy clipboard icon and
copy the HTML vesion and load that script in out HTML. It will already be set to the latest stable
version which should be fine. You also need the latest version of `sh:LANG>react-dom` which you can find
using the jsDelivr search bar or [here](https://www.jsdelivr.com/package/npm/react-dom?path=umd).
Your script should look like this, note that both react dependencies are loaded before our site's
own script.

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

Instead, we will simply tell typescript using the *declare* keyword, that something exists that
it can't tell by itself. We won't go any further into typescript, this will shut up the compiler.

```tsx
declare var React: any;
declare var ReactDOM: any;
```

This tells typescript that it should expect the names React and ReactDOM were declared using the "var"
keyword somewhere before the code the compiler is processing, and it tells the compiler to not care
about their type by giving them the type, `tsx:LANG>any`. We lose valuable typechecking, but it makes
things less complicated to start; we'll still get valuable type checking for our own stuff, but
not when we use the React and ReactDOM names.

Let's get our new `sh:LANG>index.tsx` file off the ground:

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

Now run `sh:LANG>tsc` with the `sh:LANG>--jsx` setting set to "react" (it can also not transpile it or target react for iOS). Run it:

```bash
tsc --jsx react  index.tsx
```

Typescript will create the index.js file for you or yell at you if you made a mistake. You can open it and see some neat tricks, including the converted JSX, 
as well as transpilation of other not-well supported javascript features like the class is compiled to a function with a "prototype" property attached to it.
You can read up on prototype based inheritance and JavaScript's object/class model
[elsewhere](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain),
since that's not in scope here. Either way, you should now
be able to run a server, like the Python simple http server mentioned earlier, navigate to `sh:LANG>index.html` and see React render out 3 values and 3 "+" buttons, and 3 "-" buttons.
With React working, we can talk about state, and what that "useState" function does, and how we're going to use state differently in that class component.

## hooks, class components, and state

React 16.8 introduced the concept of *hooks*. React already had what they call *functional components*, which is where a function takes an object of props as an argument,
and returns a JSX fragment. Hooks allow you to "hook" into React's render logic specific to the currently rendering component. This can be used to identify each component
in the rendered component tree, which means functional components which normally only have access to props can now store their own state in a way unique to the component instance.
With that, you can ditch the use of classes entirely, but we'll come back to this after we learn how to use state the old way in React anyway.

You'll notice we used a class in our `sh:LANG>index.tsx` already. This is the old way of creating stateful components that can rerender themselves. You simply inherit (extend)
the official React.Component class, and override its lifecycle methods, in this case just the "render" method. In these objects, state is an object property of a component instance,
but you can't set it the same way as you normally do in JavaScript. To set state, you need to do it in a way that React knows, so you use the inherited method, `tsx:LANG>setState`,
which takes an object containing all of the changed state values. Let's make that "+" button increment the `tsx:LANG>value` property of the state.

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
element API to attach and possibly remove the listener. But here we can just use an arrow function inline to run our component instance's `tsx:LANG>setState` method to increment the value.
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

In original React, this was the only way to use state in a way that would cause components to rerender.
The point of React, is that components only rerender when their state changes. This old way isn't bad,
but it's
a lot of boiler plate, and we aren't using any of the life cycle methods at all yet. This works because our component class gives us
a new instance of the component each time React needs one, and we store the state on that component until the component is unmounted by
React and its instance and state variables can be garbage collected.
When we call `tsx:LANG>ReactDOM.render`, we give it our React element to render, created by the implicit React.createElement which we're using JSX
to hide. When the react element to be rendered is a class, an instance is initialized, rendered,
and mounted (*mounted* is React jargon for its resulting render HTML is added to the DOM and
React is keeping track of it).

If you pass a function to `tsx:LANG>React.createElement`, React can't create an instance, so it just runs the function with the props object as an argument
from the parent. So two different instances of a functional component use the same function, and have
no state. A functional component used like `tsx:LANG><MyFunction a={5} b={"hello"} c />` would be interpreted by React as `tsx:LANG>MyFunction({a: 5, b:"hello", c: true})'`. Then
whatever JSX-fragment/React-element that functional component returns is rendered with its components in turn, and any intrinsic elements or strings marked as literal return.
The point is, there is no state this way, just the props passed by the parent.

But we can have state in functional components, when React pays attention to the render order in the tree. Before we start using state in
our functional component using hooks, lets look at where that state is stored, so we can better understand some of the restrictions hooks will
impose.

Suppose we have the following React app:

```jsx
import React from "react";
import ReactDOM from "react-dom";

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

So the App is an `tsx:LANG>A` component, when A is rendered, it tells React to render one child `tsx:LANG>B` with a prop of `tsx:LANG>b` as `tsx:LANG>true` which is
derived from its state of `tsx:LANG>a`. `tsx:LANG>B` renders two `tsx:LANG>C` components, because its `tsx:LANG>b` component as passed to it was true, and the `tsx:LANG>&&` expression evaluated
via short-circuiting to a `tsx:LANG>B` element.

<div style="text-align:center">
  <img style="width:600px" alt="YOU CAN'T SEE THIS IMAGE" src="/images/component-tree.svg" />
</div>

You can see that the `tsx:LANG>C` function component was called twice, each time for a unique child of `tsx:LANG>B`.
When React traverse the render tree, after the state update, and sees that the second `tsx:LANG>C` is gone, it
will unmount it, which means React no longer listens for updates to that component's props or state.
Now let's create the same thing using hooks for state.

```jsx
import React from "react";
import ReactDOM from "react-dom";

const C = () => <>"hello"</>;

const B = props => <div> <C/> {props.b && <C/> </div>;

const A = () => {
  const [a, setA] = React.useState(true);
  useEffect(() => {
    setTimeout(() => setA(false), 5000);
  }, []);
  return <B b={a} />;
};

ReactDOM.render(<A/>, root);
```

In this iteration I opted to switch to using arrow functions which are often much nicer (once
you're used to them), and have other benefits compared to old-school function literals. Regardless,
you can see a lot of new stuff going on already to do the same thing. Since function components
are always the render function, there is no "constructor" or other life cycle method which we
can use to set our timeout in. Instead, we have to learn about the concept of *effects*.

An effect, is a function that React will run after each render, possibly with a list of
*dependencies*, states that if changed trigger the effect. Probably my favorite thing about
hooks, is how they can truly turn components into finite state machines with effects.
You have multiple state properties, and multiple effects that run at each state change, and can
listen to only when a particular state changes.

In `tsx:LANG>A` above, our effect says "after each render, if any of the states in this list, `tsx:LANG>[]`, changed,
set a timeout that sets the state `tsx:LANG>a` to `tsx:LANG>false` in 5000 milliseconds". When you consider that
`[]` has no states in it and realize it will never change and therefore only happens after the first
render, you have one of the first React hooks idioms, which I'll call `tsx:LANG>useDoAfterMount`. Together, it's,
"after mount, set a timeout to change the state of `tsx:LANG>a` to `tsx:LANG>false` in 5000 milliseconds".

As for the `tsx:LANG>useState` hook, it allows you to allocate one cell of state for the currently rendering
component in the component tree, with an initial value. This initial value is ignored in future renders.
We will return to that, but for now, suppose we added some hook state to our `tsx:LANG>C` components:

```jsx
import {useState} from "react";

const C = () => {
  const [count, setCount] = useState(5);
  useEffect(() => { setInterval(() => setCount(prev=>prev+1), 1000); }, []);
  return <>{count}</>;
};
```

This is a more advanced usage of a react state dispatcher (the `tsx:LANG>setCount` function returned by
`tsx:LANG>useState`). Instead of a new value, you can pass a function that gets the current value and
creates a new one from it, like how above we increment from the current value which I nickname
prev (since it's about to become the previous value). Because `tsx:LANG>setInterval` runs the function
every second, it will keep going up. If we didn't use a function for the dispatcher call, we
would do the following, which has a bug:

```jsx
const C = () => {
  const [count, setCount] = useState(5);
  useEffect(() => { setInterval(() => setCount(count+1), 1000); }, []);
  return <>{count}</>;
};
```

This is probably one of the hardest challenges of starting hooks. What's wrong with this code?
The issue is, when the first render is ran, and the useEffect's function is parsed, the value of
count is `tsx:LANG>5`. Since the dependencies never change (the dependency list is empty still), the hook
isn't re ran. That same function of `tsx:LANG>setCount(5+1)` is ran every second, effectively not changing
anything. Alright then, how about then we use that fancy dependency list then?

```jsx
const C = () => {
  const [count, setCount] = useState(5);
  useEffect(() => { setInterval(() => setCount(count+1), 1000); }, [count]);
  return <>{count}</>;
};
```

Alright, so now this... probably won't work. Think about it. On the first render, the function is called,
and the effect is ran, adding code of `tsx:LANG>setCount(5+1)` to be called every second. One second passed, the
state changes (`tsx:LANG>count` is now 6), and react rerenders, rerunning the function but this time useState
returns 6 instead of the initial state which it ignores, 5. `tsx:LANG>count` has now changed, so the effect runs
again, adding *another* code body to set state this time to `tsx:LANG>setCount(6+1)` every second. One more
second passes, and now *both* functions execute in an unpredictable order. Which will occur first and
which last? Will your the state of `tsx:LANG>count` be `tsx:LANG>7` or `tsx:LANG>6`? It gets worse, because this balloons up and
a minute later you now have 60 functions running per second, all setting the state to different things.
Avoiding dependencies on state when you can just transform the current state in the dispatcher's
argument is key to avoiding asynchronous programming headaches, so use it whenever possible.

With that out of the way, we can take the brief descriptions and formalize what the `tsx:LANG>useState` hook
does, and why React actually has something called the [rules of hooks](https://reactjs.org/docs/hooks-rules.html).
`tsx:LANG>useState` allocates a singular state reference for the currently rendering component when the
component is first rendered. On all renders, it then returns the current state. Notice, that the
`tsx:LANG>useState` parameters don't include any identifier for identifying which state you want, you don't
ask for `tsx:LANG>useState('count', 5)`. This is because React uses the ordered nature of javascript to
figure out which state you're asking for. Because of using this order, you *cannot use hooks in
conditional code*. You have to extract it from the conditional code, or strange thing could happen.

```jsx
const C = props => {
  const [a, setA] = useState(true);
  let b, setB, c, setC;
  if (props.blah) {
    [b, setB] = useState([]);
  } else if {
    [c, setC] = useState({});
  }
  return null; // same as empty jsx
};

const B = props => {
  return <> <C/> <C/> <>
};
```

When `tsx:LANG>C` renders, React allocates two state cells, but if `tsx:LANG>props.blah` flips its truth value,
then `tsx:LANG>b` and `tsx:LANG>c` will flip which state they get from React. For these reasons, people usually use
linters to detect and warn them about using hooks in ways that can cause this strange behavior.
For the same reasons, you cannot run hooks in loops or other dynamic ways, they need to be run
at function scope.

<!-- transition? -->
Now, let's have a final note on the alternative to class instances, and then we can really get to work.
When `tsx:LANG>B` renders, how does React know which `tsx:LANG>a`, `tsx:LANG>b`, and `tsx:LANG>c` state references to give to it?
Unlike the class components where React keeps and maintains an instance, React needs to think a bit
harder. React remembers the *path* it took to render this component. If we were to run
`tsx:LANG>ReactDOM.render(<B/>, root)`, React sees three component instances. It sees something like:

```
1: 
  path: /B
  renderer: B
2: 
  path: /B/C:1
  renderer: C

3: 
  path: /B/C:2
  renderer: C
```

But if you look at our first example of JSX, how can it tell where components are in the render
function if they are generated dynamically like so?

```jsx
var people = [{name: 'John', age: 25}, {name: 'Mike', age: 22}];
ReactDOM.render(
  <ul>
    {people.map(person => <li> {person.name} is {person.age} years old </li>)}
  </ul>,
  root
);
```

You could associate state by the order they come in, but react does one better and requires you to
pass a special key prop in all list-generated children to tell react which is which, allowing
your list to be in any order and change in any way. If a component shows up with a different key,
it will be newly mounted with fresh state, if a component's props change but it has the same key,
it is identified as the owner of that state and rerenders. It is important that your keys are
unique, or React will only render one of them.

```jsx
ReactDOM.render(
  <ul>
    {people.map(p => <li key={p.name}> {p.name} is {p.age} years old </li>)}
  </ul>,
  root
);
```

And with that in-depth explanation of most of reacts internals, we should be set to build our
RPG point buy system for real, let's return to our original concept with some tweaks:

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

Let's start by *lifting* the state out of the children into the parent, so that the parent
can impose concurrent constraints.

```tsx
declare var React: any;
declare var ReactDOM: any;
// extrace useState function from react
const { useState } = React;

class AttributeCounter extends React.Component {
  render() {
    return (
      <span>
        {this.props.name}: {this.props.value}
        <button onClick={this.props.onInc>+</button>
        <button onClick={this.props.onDec>-</button>
        <button>-</button> 
      </span>
    );
  }
}

function PointBuy(props) {
  const [str, setStr] = useState(10);
  const [cha, setCha] = useState(10);
  const [wis, setWis] = useState(10);
  return (
    <AttributeCounter name={"Strength"} value={str}
      onInc={()=>setStr(p=>p+1)} onDec={()=>setStr(p=>p-1)}
    />
    <AttributeCounter name={"Charisma"} value={cha}
      onInc={()=>setCha(p=>p+1)} onDec={()=>setCha(p=>p-1)}
    />
    <AttributeCounter name={"Wisdom"} value={wis}
      onInc={()=>setWis(p=>p+1)} onDec={()=>setWis(p=>p-1)}
    />
  );
}

ReactDOM.render(
  <PointBuy/>,
  document.getElementById('root')
);
```

And if you get this far... well you're going to have to do the rest now!
