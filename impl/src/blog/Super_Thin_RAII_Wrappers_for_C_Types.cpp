
typedef struct {
    int s;
    unsigned long long t;
} ExampleSubType;

typedef struct {
    int a;
    float b;
    ExampleSubType* sub;
} ExampleCType;

/*
ExampleCType* Create_ExampleCType()
{
    auto result = new ExampleCType{7, 1.04, nullptr};
    result->sub = new ExampleSubType{10, 334323464592ULL};
    return result;
}
*/

ExampleCType* Create_ExampleCType(int i, float f)
{
    auto result = new ExampleCType{i, f, nullptr};
    result->sub = new ExampleSubType{5, 334323464592ULL};
    return result;
}

void Free_ExampleCType(ExampleCType* in)
{
    delete in->sub;
    delete in;
}


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
