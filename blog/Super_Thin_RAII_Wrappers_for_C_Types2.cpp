
typedef struct {
    int s;
    unsigned long long t;
} ExampleSubType;

typedef struct {
    int a;
    float b;
    ExampleSubType* sub;
} ExampleCType;

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

/*
template<typename... ArgTypes>
shared_ptr<ExampleCType>(*make_Example)(ArgTypes...) = 
    &makeCTypeWrapper<Create_ExampleCType, Free_ExampleCType, ArgTypes...>;
*/

int main()
{
    //auto example_inst = make_Example<int, float>(-5, 0.5f);
    auto example_inst = makeCTypeWrapper<
            Create_ExampleCType,
            Free_ExampleCType>
                (-5, 0.5f);
    cout << "peek at the instance's 'a' member" << endl;
    cout << example_inst->a << endl;
    cout << "peek at the instance's 'sub' member's 't' member" << endl;
    cout << example_inst->sub->t << endl;
}
