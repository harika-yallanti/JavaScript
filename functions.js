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

let p=1;//global scope
function myfile()
{
    let q=10;//local scope
    console.log(q);
    console.log(p);
}
myfile();
console.log(q);
console.log(p);
