#include <iostream>
using namespace std;

extern "C"
{
    int math(int a, int b)
    {
        cout << 22;
        return a + b;
    }
}