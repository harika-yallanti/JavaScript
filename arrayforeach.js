//arrayforeach
let array=[2,3,5,7,6];
array.forEach(function(el)
{
    console.log(el);
});
//divide the array elements divide by 2
let m=array.map(function(el)
{
   return(el/2);
   
})
console.log(m);
console.log(array);

//filter:it will filter the elements based on the condition
let even=array.filter(function(el)
{
    return(el%2==0);
})
console.log(even);

//every:it will return boolean value based on the condition
let c=array.every(function(el)
{
    return(el%2==0);
})
console.log(c);

//some:it will return boolean value i.e some values
let s=array.some(function(el)
{
    return(el%2==0);
})
console.log(s);

//reduce:it will have accumulator and function based on the condition it gives result
let res=array.reduce(function(res,el)
{
    return (res+el);
})
console.log(res);