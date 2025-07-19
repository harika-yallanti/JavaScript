function myfun(a,b)
{
    return a+b;
}
console.log(myfun(2,4))

//
let arr=['hello' , 'every' , 'one']
let result=" "
function arrayfun(arr){
    for(let i=0;i<arr.length;i++){
        result+= arr[i]+" ";
    }
    return result;
    }

console.log(arrayfun(arr));

//global scope
let x=222;
function myfunc(){
    console.log(x);
}
console.log(x);

//global and local scope
/*let p=1;//global scope
function myfile()
{
    let q=10;//local scope
    console.log(q);
    console.log(p);
}
myfile();
console.log(q);
console.log(p);
*/
//
let x1=4;//global scope
function myfun1(){
    let y1=90;//function or local scope
    console.log(x1);
    console.log(y1);
    function out()
    {
        let z1=99;
        console.log(z1);
        console.log(x1);
        console.log(y1);
    }
    out();
}
console.log(x1);
myfun1()

//withount giving the function name but giving the function to be performed as function name like sum
const sum=function(a,b){
    return a+b;
}
console.log(sum(5,6));

//higher order function
function m(func,count)
{
    for(let i=1;i<=count;i++)
    {
        func();
    }
}
let greet=function()
{
    console.log("thank you");
}
m(greet,100);
m(function()
{
    console.log("welcome!")
},1000);

//object using functions
const cal={
    add:function(a,b) //cal.add  o/p:ƒ (a,b){return a+b;}
                      //cal.add(3,4);  o/p:7
    {
        return a+b;
    },
    sub:function(a,b)
    {
        return a-b;
    },
    mul:function(a,b)
    {
        return a*b;
    }
}
console.log(cal.add(3,4));

//set time out: wait for some specified time and then print the output
function myfun() {
    console.log("hi");
}
setTimeout(myfun, 2000); // 500000 ms = 8 minutes and 20 seconds


//set interval

let id1=setInterval(()=>
{
    console.log("hello everyone")
},3000)
let id2=setInterval(()=>
{
  console.log("hello");
},4000)
clearInterval(id1);//used to block the set interval
