---
title: "Lazy Javascript Iterables via Generators"
date: "2020-10-06"
---

A while back, I was concerned about the wastefulness of JavaScript's
[`js:LANG>Array.prototype.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
and [`js:LANG>Array.prototype.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
functions, really all of JavaScript's canonical functional sequence programming builtins.
If you're unaware, these methods always allocate an entire new array. While this is fine in some cases, it enables several
dumb performance pitfalls, and doesn't allow you to use these functions in performance-sensitive hotpaths of your application.
Not to mention that these methods only exist on JavaScript's `js:LANG>Array` type, so you need to convert all iterators (e.g. `js:LANG>Map`, `js:LANG>Set`)
into an array with `js:LANG>Array.from`, wasting more allocations. Here we'll build an efficient, elegant alternative using lazy evaluated generators,
and at the end I provide a TypeScript implementation with heaps of fancy functional list operations, all efficient as heck.

Returning to the horror of JavaScript's original design, take for instance the following example:

```js
([1,2,3]
	.map(x => x*3)
	.filter(x => x%2 == 0)
	.map(x => `${x}`)
	.concat([10, 11])
)
```

Simple enough, right? The result is `js:LANG>['6', 10, 11]`. But in fact this code will allocate 4 distinct intermediate arrays, and in the worst case
all of them will be the same size as the source array (if say, the filter didn't filter anything).
If we were performing this on an array of 10 million records, we'd suddenly have to
allocate 40 million records, 30 million of which we discard immediately. Perhaps an advanced optimizing JavaScript runtime, like Chromium/V8's
TurboFan, will JIT-out the problem, but the standard library design is just poor in my opinion. There are lots of cases where your
code will not have been churned through some optimizer and this bloat isn't hard to design out of the equation in the first place.
Instead, let's implement our own similar functional list processing API with better performance thanks to lazy evaluation, and we'll do
so with modern JavaScript generators.

A generator is a functional coroutine, effectively a function that can _yield_ its ownership over the program execution flow, and
confusingly also _yield_ individual elements as its iterated over as an iterable. To make one in JavaScript, you use a function statement/expression with
the `js:LANG>*` marker.

```js
function* myGenerator() {
    yield 5
    yield 2
}
```

When `js:LANG>myGenerator` is called, it returns an iterator which on its next method, runs the underlying coroutine until it yields, which would be
at the `js:LANG>yield` keyword. This way, callers can run their own code in between yielded elements, and even stop asking for more elements.
With the `js:LANG>Array.prototype.map` function design, you need to allocate the entire array before you can iterate through it. This ability
to not iterate until we need to, and even stop iteration is the concept of lazy evaluation that will free us from unnecessary allocations.

Let's combine our fancy generator with JavaScript's iterator interface to get an iterable literal:

```js
my_iter = {
    *[Symbol.iterator]() {
        yield 1
        yield* [2,3]
    }
}
```

So we're declaring an object with the hidden `js:LANG>Symbol.iterator` property to show how to get an iterator of the object, and using the
object generator property shorthand syntax to make it a generator. For completeness I also added an example of the `js:LANG>yield*` syntax which
lets our generator yield from other iteratables. Now we can do something interesting with our generators.

```js
function* map(iterable, mapFunction) {
    for (const item of iterable) yield mapFunction(item)
}
```

And that's basically it to `js:LANG>map`. We'll make the API more elegant later. We can now do the following:

```js
[...map(map([1,2,3], x => x*3), x => `js:LANG>${x}`)]
```

You may be missing the trailing function syntax which is the main advantage to having `js:LANG>map` be a method of `js:LANG>Array`s, but as I said we'll be
making it elegant later. If you run this code in your local JavaScript runtime, be it browser or local, 
(I actually originally was inspired to write this code while using [quickjs](https://bellard.org/quickjs/) which doesn't optimize this stuff afaik)
you'll notice that the spread syntax forces the iteration of the lazy iterable into an array, for us to view. When this code is running the spread syntax
calls next on the outer map iterable. To get the first element, it calls next on the inner map. The inner map
runs the loop, sets `js:LANG>item` to `js:LANG>1`, then runs `js:LANG>x => x*3` over it, yielding `js:LANG>3`. The outer map sets its `js:LANG>item` to `js:LANG>3` after receiving it as the first element
from inner map it is wrapping, and runs `js:LANG>`x => `js:LANG>${x}` `js:LANG>` yielding `js:LANG>'3'`. This repeats for all elements until the Array has pushed all 3 elements and is now
`['3', '6', '9']`js:LANG>. The point is, the instructions for the `map`js:LANG> calls are glued together when implemented via coroutine, as if you wrote only one `map` call
practically. Now let's make `js:LANG>filter`.

```js
function* filter(iterable, predicate) {
    for (const item of iterable)
        if (predicate(item))
            yield item
}
```

Again, easy. Now let's try to make these two functions as elegant as `js:LANG>[1,2,3].map(x => x*4).filter(x => x < 10)`.
The best way to do this, is be as close to the original API as possible. Let's take advantage of `js:LANG>Array.from`, and make our own
`Lazy.from`js:LANG> method for all our lazy-evaluation needs. This way, we can have `Lazy.prototype.map`js:LANG> and `Lazy.prototype.filter`, and
most code will just be a `js:LANG>Lazy.from(...)` away from making no copies.

```js
class Lazy {
    constructor(iterable) {
		this.iterable = iterable
	}
    static from(iterable) {
        return new Lazy(iterable)
    }
    [Symbol.iterator]() {
        return this.iterable[Symbol.iterator]()
    }
}
```

Alright, so we can wrap iterables, but how can we map over them? We'll bring back our anonymous iterable to do so:

```js
class Lazy {
	//...
    map(mapFunc) {
        const _this = this
        return Lazy.from({
            *[Symbol.iterator]() {
                for (const t of _this)
                    yield mapFunc(t)
            }
        })
    }
}
```

I like to let the code speak for itself normally but this can be a bit to parse. We return a new `js:LANG>Lazy` object,
wrapping a new anonymous iterable mapping over this iterable. Since our `js:LANG>Lazy` object is an iterable (it implements `js:LANG>Symbol.iterator`)
we just need to iterate over it. Unfortunately, in the anonymous object's method `js:LANG>this` would refer to the new anonymous object,
not the original `js:LANG>Lazy` instance, so we create an alias to that `js:LANG>this` reference, `js:LANG>_this`, and reference it from our closure.
This pattern is incredibly powerful, and we'll do filter pretty much the exact same way.

```js
class Lazy {
	//...
    filter(predicate) {
        const _this = this
        return Lazy.from({
            *[Symbol.iterator]() {
                for (const t of _this)
					if(predicate(t))
						yield t
            }
        })
    }
}
```

Now we can expand our horizons and implement other array methods like `js:LANG>concat`, and `js:LANG>forEach`.

```js
const isIterable = arg => typeof arg === "object" && Symbol.iterator in arg

class Lazy {
    concat(...args) {
        const _this = this
        return Lazy.from({
            *[Symbol.iterator]() {
                yield* _this
                for (const arg of args)
                    if (isIterable(arg)) yield* arg
                    else yield arg
            }
        })
    }
    forEach(func) {
		for (const t of this) func(t)
    }
}
```

And to get crazy, we can do some recursion with this technique and implement `js:LANG>Array.prototype.flat`

```js
flat(depth=1) {
	const _this = this
	if (depth <= 0) return this
	else return Lazy.from({
		*[Symbol.iterator]() {
			for (const item of _this) {
				if (isIterable(item))
					yield* Lazy.from(item).flat(depth - 1)
				else yield item
			}
		}
	})
}
```

The morale of the story is once you get oriented, generators can make
efficient, readable and effortlessly composable code, effectively reducing the
sins of JavaScript. I think the 'anonymous iterable'
idiom is a real gem in TypeScript, with generators also shining. Hopefully you decide
to use something like this over lowering yourself to mutable `js:LANG>Array.prototype.push`
in your performance-sensitive hotspots. Although I'm yet to [micro]benchmark the two.

As promised, below is a decently extensive `js:LANG>Lazy` implementation in TypeScript.  
Eventually if I find a good untaken name, stop being lazy (trivial pun intended),
and write more tests (I have a few), I'll publish this to [npm](https://www.npmjs.com/)
for quick usage in your projects.
If you'd like to do it yourself for some reason, please
[involve me](mailto:mikemikeb@protonmail.com), I'd love to share the ownership.
Please use anyway you'd like, within reason.

```ts
// Typescript@4.0 probably simplifies or allows better alternative typings for
// some of these

/** return whether arg is T or an iterable of T */
function isIterable<T>(arg: T | Iterable<T>): arg is Iterable<T> {
    return typeof arg === "object" && Symbol.iterator in arg
}

/** iterable wrapper for functional programming with lazy composition */
export default class Lazy<T> implements Iterable<T> {
    static from<T>(iterable: Iterable<T>) {
        return new Lazy<T>(iterable)
    }

    public constructor(protected iterable: Iterable<T>) {}

    [Symbol.iterator](): Iterator<T> {
        return this.iterable[Symbol.iterator]()
    }

    public filter(predicate: (t: T) => boolean) {
        const _this = this
        return Lazy.from({
            *[Symbol.iterator]() {
                for (const t of _this)
                    if (predicate(t))
                        yield t
            }
        })
    }

    public map<U>(transform: (t: T) => U) {
        const _this = this
        return Lazy.from<U>({
            *[Symbol.iterator]() {
                for (const t of _this)
                    yield transform(t)
            }
        })
    }

    public flat(depth=1) {
        const _this = this
        if (depth <= 0) return this
        else return Lazy.from({
            *[Symbol.iterator]() {
                for (const item of _this) {
                    if (isIterable(item))
                        yield* Lazy.from(item).flat(depth - 1)
                    else yield item
                }
            }
        })
    }

    public concat(...args: (Iterable<T> | T)[] ): Lazy<T> {
        const _this = this
        return Lazy.from({
            *[Symbol.iterator]() {
                yield* _this
                for (const arg of args)
                    if (isIterable(arg)) yield* arg
                    else yield arg
            }
        })
    }

    public forEach(doSomething: (t: T) => void) {
        for (const item of this)
            doSomething(item)
    }

    public take(n: number): Lazy<T> {
        const _this = this
        return Lazy.from({
            *[Symbol.iterator]() {
                let i = 0
                for (const item of _this) {
                    if (!(i < n)) break
                    yield item
                    i++
                }
            }
        })
    }

    public reduce<Result>(callback: (prev: Result, curr: T, index: number) => Result, initial?: Result): Result {
        let result = initial
        let i = 0
        for (const curr of this) {
            result = callback(result, curr, i)
            i++
        }
        return result
    }

    public toSet(): Set<T> {
        const result = new Set<T>()
        for (const item of this) 
            result.add(item)
        return result
    }

    public some(predicate: (t: T) => boolean): boolean {
        for (const item of this)
            if (predicate(item)) return true
        return false
    }

    public every(predicate: (t: T) => boolean): boolean {
        return !this.some(t => !predicate(t))
    }
    
    public empty(): boolean {
        const item = this[Symbol.iterator]().next()
        return item.done
    }

    public sort(...[sortFunc]: Parameters<Array<T>["sort"]>) {
        return Lazy.from([...this].sort(sortFunc))
    }

    public get length() {
        let i = 0
        for (const item of this) i++
        return i
    }

    public includes(t: T) {
        for (const item of this) if (item === t) return true
        return false
    }

    public find(predicate: (t: T) => boolean) {
        for (const item of this) if (predicate(item)) return item
        return false
    }
}
```

PS: I hate highlight.js's TypeScript support. I should probably throw a PR at them because it's
constantly broken. Or I'll try Prism which might have static styling support that I could
take advantage of (via a Gatsby plugin; I use Gatsby to generate my site).

