function a(x,y)
{
    return x+y;
}
console.log(a(2));
// output: NaN because only one value is given i.e by default x value but y value is not given

function b(x,y=1)
{
    return x+y;
}
console.log(b(2)); 
// output: 3 as the default value of x is 2 and the y value is given so the output is the addition of 2 and 1

function c(x=1,y)
{
    return x+y;
}
console.log(c(2));
//output: NaN as by default the 2 is taken by x as the first value is of y is not given

function d(x,y)
{
    return x+y;
}
console.log(d(2,1));
//output: 3