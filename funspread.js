let arr=[1,34,56,-9,-45,60,-99,34,56];
console.log(Math.min(arr)); //output:NaN
console.log(...arr); //output: 1 34 56 -9 -45 60 -99 34 56
console.log(Math.min(...arr)); //output: -99

/*

function arr1(...args)
{
    return args;
}
arr1(1,34,56,-9,-45,60,-99,34,56);
//output:(9) [1, 34, 56, -9, -45, 60, -99, 34, 56]

*/

console.log(..."harini");
//output: h a r i n i

ar=[1,2,3,4,5,6,7,8,9,0]
let ar1=[...ar]
console.log(ar1); //output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(ar1.push(45)); //output: 11 (the size of array)
console.log(ar); //output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(ar1); //output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 45]

let char=[..."harika"]
console.log(char); //output: ['h', 'a', 'r', 'i', 'k', 'a']

//here we are assiging array elements into another array.only elements will be passes not array
array=[0,9,8,7,6,5,4,3,2,1]
let array1=[...array]
console.log(array1); //output: [0, 9, 8, 7, 6, 5, 4, 3, 2, 1]
//combining two arrays
let array2=[...array,...array1]
console.log(array2); //output: [0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const obj={
    name:"rena",
    dept:'cse',
    age:'18'
}
copy={...obj}
console.log(copy); //output: {name: 'rena', dept: 'cse', age: '18'}
const obj2={...array}
console.log(obj2); //output: {0: 0, 1: 9, 2: 8, 3: 7, 4: 6, 5: 5, 6: 4, 7: 3, 8: 2, 9: 1}

/*
function myfun(){
    console.log(arguments)
}
myfun(1,3,5,7,9)
console.log()
*/

//rest
a=[1,2,3,4,9,8,7,6,5]
let [number1,number2]=a;
console.log(number2); // output:2
console.log(number1); // output:1
let[num1,num2,...num]=a;
console.log(num1); // output:1
console.log(num2); // output:2
console.log(num); // output: [3, 4, 9, 8, 7, 6, 5]

//distructor
const person={
    name:"rena",
    dept:'cse',
    age:'18',
    username:"rena05",
    password:123455
}
console.log(person); //output: {name: 'rena', dept: 'cse', age: '18', username: 'rena05', password: 123455}
let{username,password}=person
console.log(username); //output: rena05
console.log(password); //output: 123455
let {username:user, password:security}=person
console.log(user); //output: rena05
console.log(security); //output: 123455
console.log(person); //output: {name: 'rena', dept: 'cse', age: '18', username: 'rena05', password: 123455}



