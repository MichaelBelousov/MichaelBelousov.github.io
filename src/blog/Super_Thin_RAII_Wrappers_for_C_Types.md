# Super Thin RAII Wrappers for C Types

### June 17, 2018

Let's partake in some template indulgence. Suppose we have some C language
library that we're linking to our amazing C++ project, but it leaves us with
a few sad C "constructors" and "deleters" surrounding a struct, like any
non-object-oriented language. Suppose we have a struct: `struct MyCType`,  
a "constructor" for it: `MyCtype* Create_MyCType()` and a "deleter"
for it too: `Free_MyCType(MyCType*)`.


If you don't know what 
[Resource Acquisition is Initialization](https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization)
is, you should check it out, it's a useful programming idiom, often associated with C++,
that you probably already use somewhere.
So the question is, how can we get ourselves some nice RAII, scope-based destruction 
for this type with minimal boiler plate? 


Our goal is that we can transform this code:

```cpp
void myFunc()
{
  CType* ctype = initialize_CType();
  //do something with c type
  destroy_CType(ctype);
}
```

Into this code:

```cpp
void myFunc()
{
    WrappedCType type;
    //do something with it
}
```


Isn't that much cleaner? 
I'll look into using the STL for a great, simple solution, and then a custom
wrapper emphasizing performance.


Indeed, it turns out we can actually do what we want there
*very* easily, having decent knowledge of the STL, the natural solution to the
problems that most over-zealous c++ programmers have.
Let's give this an STL solution before we look into a custom one and later we'll
see what kind of performance gains we can find and if it's worth it.
But first, let's define some contrived "C code", structs and functions that we 
will attempt to wrap. We'll assume it's partitioned into headers and implementation
source as the files in our working directory of "ctype.h" and "ctype.c".


```cpp
// === ctype.h =============

typedef struct {
  int s;
  unsigned long long t;
} ExampleSubType;

typedef struct {
  int a;
  float b;
  ExampleSubType* sub;
} ExampleCType;

// === ctype.c ============

ExampleCType* Create_ExampleCType(int i, float f)
{
  //pardon any mistakes, in my tests I used C++ allocation
  //i.e. new ExampleCType{i,f, new ExampleSubType{5, ...}};
  ExampleCType* result = malloc(sizeof(ExampleCType));
  result->a = i;
  result->b = f;
  result->sub = malloc(sizeof(ExampleSubType));
  result->sub->s = 5;
  result->sub->t = 334323464592ULL;
  return result;
}

void Free_ExampleCType(ExampleCType* in)
{
  free(in->sub);
  free(in);
}
```


So, how can we elegantly use the STL To initialize with our Create function,
and destroy with our Delete function? The real hint should be our intended scope
based destruction. We can provide a smart pointer with a custom deleter, which
happens to match our intended signature. If it didn't, we could still probably use
a fitting lambda expression to map it to the required deleter signature. Let's do it
as follows:


```cpp
#include <ctype.h>
#include <type_traits>
#include <memory>
#include <iostream>
using namespace std;  //for brevity and tersity

template<auto Create, auto Delete, typename... CreateArgTypes>
shared_ptr<
typename remove_pointer<
decltype(Create(declval<CreateArgTypes>()...))>::type>
makeCTypeWrapper(CreateArgTypes&&... args)
{
  using CTypePtr = decltype(Create(declval<CreateArgTypes>()...));
  using CType = typename remove_pointer<CTypePtr>::type;
  return shared_ptr<CType>(Create(args...), Delete);
}

int main()
{
  //Example example_inst{1, 0.5f};
  auto example_inst = makeCTypeWrapper<
  Create_ExampleCType,
    Free_ExampleCType>
  (-5, 0.5f);
  cout << "peek at the instance's 'a' member" << endl;
  cout << example_inst->a << endl;
  cout << "peek at the instance's 'sub' member's 't' member" << endl;
  cout << example_inst->sub->t << endl;
}
```


This has some awesome advantages. Copy prevention (if you use unique_ptr), 
reference counting, all the things that come with smart pointers. The one
issue is, what if the library you're using already does reference counting?
What if this is just too much overhead for what you're doing? Exploring a
more raw wrapper is the next step, but before that, I'll first show what would
make a lovely addition to the above code... if C++ allowed deduced arguments for
templated aliases. Using a function pointer variable type alias, we can craft
a single, make_Example() function with no template parameters. Unfortunately, without
deduction, you would have to explicitly list the argument types which is ugly
and worst of all redundant. Either way, it might look something like this:


```cpp
template<typename... ArgTypes>
shared_ptr<ExampleCType>(*make_Example(ArgTypes...) = 
    &makeCTypeWrapper<Create_ExampleCtype, Free_ExmapleCType, ArgTypes...>;
```


So then, we're on to a raw wrapper. How thin can we make it?
Can we make the wrapping inlined by the compiler entirely? I will explore the latter
question and discuss it in another article. For now we'll just bring the wrapper into
existence. That question is what I'd like to use to determine if the 
smart_pointer solution is worth it in performance-critical contexts.



We'll start with the idea for our template that hopefully will inevitably do everything
we want.


```cpp
template<typename CType, CType*(Create*)(), void(Free*)(CType*)>
struct CTypeWrapper;
```


We've got function pointer type value arguments to our template already, and later
we'll add variadic arguments to match any signature for the Create function. This
could be used to match different overloads but unfortunately it seems difficult to 
infer the overload so we can't do much without boilerplate as far as my 
intelligence falls.
We can at least infer the wrapped type itself from the function pointer arguments.
For now let's put in a simple implementation and see how it compiles.



I ended up adding some additional templated aliases for the function pointer
types, which makes it much more comprehensible, but these will disappear in the
C++17 version.


```cpp
template<T>
using CreateFunc = T*(*)();

template<T>
using FreeFunc = void(*)(T*);

template<typename CType, 
  CreateFunc<CType< Create, 
  FreeFunc<CType< Free<
struct CTypeWrapper
{
  CType* wrapped;
  CTypeWrapper()
    : wrapped(Create())
  {}
  ~CTypeWrapper()
  {
    Free(wrapped);
  }
  //implicit conversion to wrapped type
  operator CType* ()
  {
    return wrapped;
  }
  CType* operator->()
  {
    return wrapped;
  }
};
```

<!--

I should probably say by now that there will be some elements of danger
to stuff I am discussing, but one of the cool things (I think) you can do
with this type is safely cast a reference of it to the underlying pointer.

-->


Now let's use our contrived C example and see what happens


```cpp
#include"ctype.h"
#include"CTypeWrapper.h"
#include <iostream>

using namespace std;  //for brevity and tersity
//our shiny type wrapper
using Example = CTypeWrapper<ExampleCType, 
      Create_ExampleCType, 
      Free_ExampleCType>;

int main()
{
  Example example_inst;
  cout << "peek at the instance's 'a' member" << endl;
  cout << example_inst->a << endl;
  cout << "peek at the instance's 'sub' member's 't' member" << endl;
  cout << example_inst->sub->t << endl;
}
```


Assuming "CTypeWrapper.h" contains our templates we've made, we should be good
to go. Our output is:


```
peek at the instance's 'a' member
100
peek at the instance's 'sub' member's 't' member
334323464592
```


So we've got implicit conversion to the underlying type, and an overrided 
`operator-> `to
provide access to the underlying type. This should feel a bit worrisome actually, 
because our type *should* feel like a value, not a pointer, but overriding the 
`.`  operator is out of the question for good reason and the 
`->` syntax reminds us that our type really just contains an underlying
pointer so in my opinion it's, *ok*, not great. Definitely sinful.



I tried with some difficulty to find out how one can template alias the type
to provide a variadic constructor, but unfortunately I don't believe it's possible
since the first two types cannot be deduced in a class construction context
and template aliases can't either (as far as I know up to c++17). The function 
deduction context appears to correctly deduce the types even with only the partial
explicit template parameters, but the class doesn't seem to be able to. I couldn't
figure out a deduction guideline for it either, but I will
look into the difference in deduction rules for classes and functions, and confirm
or fix my loss here.
This minimal and I think "acceptable" boilerplate is the
farthest I got for generic RAII wrappers of C-style types. If you're looking to C++-ify
your C-using code, try something like this, but clearly a heavy duty careful wrapper is 
the real solution to any sufficient project. There are a few more hacks for quick wrapping
of C types that I explored and may revisit later, but for now I'll leave the code where
I left off, with a tidy wrapper which unfortunately has some definition boilterplate.


```cpp
#include "ctype.h"
#include <type_traits>

template<
auto Create, 
     auto Free,
     typename... CreateArgTypes>
struct CTypeWrapper
{
  private:
    using CTypePtr = decltype(Create(std::declval<CreateArgTypes>()...));
  public:
    CTypePtr wrapped;
    CTypeWrapper(CreateArgTypes&&... args)
      : wrapped{Create(args...)}
    {}
    ~CTypeWrapper()
    {
      Free(wrapped);
    }
    operator CTypePtr ()
    {
      return wrapped;
    }
    CTypePtr operator->()
    {
      return wrapped;
    }
};

using Example = CTypeWrapper<
Create_ExampleCType, 
  Free_ExampleCType, 
  int, double>;

#include <iostream>
using namespace std;  //for brevity and tersity

int main()
{
  //Example example_inst{1, 0.5f};
  Example example_inst{-5, 0.5f};
  cout << "peek at the instance's 'a' member" << endl;
  cout << example_inst->a << endl;
  cout << "peek at the instance's 'sub' member's 't' member" << endl;
  cout << example_inst->sub->t << endl;
}
```


I'll add a follow up article eventually for analyzing some of the 
llvm-ir assembly instructions that the clang compiler can emit to get a good idea 
at the overhead the wrapper incurs and how to minimize it or potentially eradicate 
it with optimization
and inlining. If you find better ways, as I'm sure you will, please inform me!

