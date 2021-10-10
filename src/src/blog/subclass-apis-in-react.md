---
title: "The useClass hook and using class-based APIs in modern React"  
date: "2021-10-10"
---

Modern React has a problem, that functional components unfortunately, make it all too easy to rely on state
that gets thrown out the window between renders. That's why `js:LANG>useCallback` and `js:LANG>useEffect`, which take closures
that may accidentally reference old state in their bodies, can have weird bugs when dependencies aren't used correctly.

Take for example:

```jsx
function MyComponent() {
    const [state1, setState2] = useState(5)
    const [state2, setState2] = useState(5)
    useEffect(() => { console.log(state1 + state2) }, [state1]); // oops state2 is also a dependency
    return <button onClick={() => setState1(state1 + 1)}>press me</button>
}
```

Because no dependencies have been listed for React to check between renders, it will see that the effect does not need
to be updated, even though the value of `js:LANG>state` would have changed between renders when the button is clicked.
When altering existing code especially, you may accidentally add a new dependency without realizing and not add it to the list,
and thus, a bug is born.

This is really just a shortcoming of something that should be a language-level feature so that we wouldn't have to extract
such redundant data ourselves, but to continue using vanilla JavaScript safely, we lucikly have
[the rules of hooks and some eslint plugins](https://reactjs.org/docs/hooks-rules.html), which, when integrated properly
with your editor and CI/CD, provide near perfect support for inferred dependencies.

These dependencies are checked by React using *strict equality*, which in JavaScript pretty much means object identity.
To determine
whether your `js:LANG>useEffect`, `js:LANG>useMemo`, or `js:LANG>useCallback` should be thrown out and replaced with the new
closure, referencing up-to-date state, all objects in the dependency list are checked if they still `===` each other.
This works fine, petty performance concerns aside, until you want React to not throw away the old function, but instead keep
it *stable*.

Let's try the following:

```jsx
function MyComponent() {
    const [isHovered, setIsHovered] = useState(false);

    class MyClass {
        x = 5
        color() { return isHovered? "red" : "blue" }
    }
    
    const [myInst, setMyInst] = useState(new MyClass())

    return <div onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{height: "50px", width: "50px"}} />
}
```

What's wrong here? Suppose we are using a dependency, `js:LANG>"some-api"`, that manipulates subclasses from its own classes,
and we have to register them to use them (ignore whether that's a well-designed JavaScript library or not for now, these
kinds of packages do exist). Let's add an effect to register our class on component mount, and unregister it after:

```jsx
import { ApiClass, register, unregister } from "some-api";

function MyComponent() {
    //...
    class MyClass extends ApiClass {
        x = 5
        color() { return isHovered ? "red" : "blue" }
    }
    useEffect(() => {
        register(MyClass);
        return () => unregister(MyClass);
    }, [MyClass]);
    //...
}
```

Now, a *new* `js:LANG>MyClass` is created every render
because the class declaration is inside a function body, which means `js:LANG>MyClass` is always new so the effect is always
reran, not just on mount, and we call `js:LANG>register` and `js:LANG>unregister`
practically every render. Moreso, `js:LANG>myInst` is no longer of the same class after the first render,
so `js:LANG>myInst instanceof MyClass` will be false, and that might mess with `js:LANG>"some-api"`'s assumptions.

Worse still, the `js:LANG>MyClass.color` method has an out-of-date copy of `js:LANG>isHovered`. `js:LANG>myInst` uses the
definition as it saw it during the first render when it was constructed, and `js:LANG>isHovered` was immutably
set as `js:LANG>false`. To fix this in JavaScript, we need a stable, mutable object indirectly referencing `js:LANG>isHovered`.
In React we can get that using a `js:LANG>ref` like so:

```jsx
import { ApiClass, register, unregister } from "some-api";

function MyComponent() {
    //...
    const componentState = useRef({});
    componentState.current.isHovered = isHovered; // update the state to whatever the lastest is from React
    class MyClass extends ApiClass {
        x = 5
        color() { return componentState.isHovered ? "red" : "blue" }
    }
    //...
}
```

Now our class will always reference the up-to-date state through an indirect reference that is always up to date.
The final step is to make sure we have a stable reference to the class itself, which is done the same way we get
a stable state object for indirect access of the component state.

```jsx
import { ApiClass, register, unregister } from "some-api";

function MyComponent() {
    //...
    const MyClass = useRef(class MyClass extends ApiClass {
        x = 5
        color() { return componentState.isHovered ? "red" : "blue" }
    }).current;
    //...
}
```

`js:LANG>useRef`, will be a stable reference to its argument, and can only be mutated by setting its
`js:LANG>current` property, but we've made that impossible by keeping no reference to the ref object itself.
Now that we have it, we can generalize to create a `js:LANG>useClass` hook that does the work for us.

## [The `useClass` Hook](#the-useclass-hook)

Smaller than I thought it would be, really.

```tsx
function useClass<C, S extends {}>(makeClass: (s: S) => C, state: S) {
  const stateRef = useRef<S>({} as S).current;
  Object.assign(stateRef, state);
  return useRef(makeClass(stateRef)).current;
}
```

Let's use it:

```tsx
class Base {
  f() { return "x"; }
}

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  const Derived = useClass(
    (state) => class Derived extends Base {
                 f() { return `${super.f()}_${state.isHovered ? "y" : "n"}`; }
               },
    { isHovered }
  );

  const [myInst] = useState(new Derived());

  return (
    <div>
      <p onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
        {myInst.f()}
      </p>
    </div>
  );
}
```

And there we have classes as usable as possible directly in our functional components.
Probably not as performant as a module-scope class declaration unless our runtime is extremely clever,
but that's just the world we're living in. If you're heavily using an inheritance based library in your work,
maybe you'll enjoy this as much as I do.
