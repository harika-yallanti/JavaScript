//for loop
for(let i=1;i<=10;i++){
    console.log(i);
}

//while loop
let i=1;
while(i<11){
    console.log(i);
    i++;
}
//print odd no.s from 1 to 50
for(let i=1;i<=50;i+=2){  // or or(let i=1;i<=20;i++){ if(i%2!==0); console.log(i); }
    console.log(i);
}

//print even no.s from 1 to 20
for(let i=1;i<=20;i++){ // or for(let i=2;i<=20;i+=2){ console.log(i);}
    if(i%2==0){
        console.log(i);
    }
}

//gameforloop
let f="salaar";
let guess=prompt("guess the movie name");
while(guess!=f){
    if(guess=="cancel")
        break;
    guess=prompt("wrong answer enter again");
}
if(guess==f){
    console.log("congrats");
}
else{
    console.log("better luck next time");
}

//for of loop(elements) or for loop in array
let arr=[1,2,4,5,8,9];
for(number of arr){
    console.log
    (number);
}
//for of loop(word) or for in loop
for(char of "coding"){
    console.log(char);
}
//nested for loop
arr1=[[1,2,3],[4,5,6],[7,8,9]]
for(rows of arr1){
    for(cols of rows){
        console.log(cols);
    }
}

 //object literals
const person={
    name:"Harika",
    age:20,
    qualification:"Btech"
};
console.log(person["age"]);// or person.age
console.log(person["name"]);// or person.name
console.log(person.qualification);//we can also write as
let q="qualification";
console.log(person[q]);

const obj={ //all these are considered as string
    null:0,
    undefined:1,
    g:3,
    let:12
};
console.log(obj);
obj["null"]=24;//used to change the value
console.log(obj["null"])
obj.department="cse";//adding a new key value pair
console.log(obj);
delete obj.null;//delete key value pair
console.log(obj);

//object inside object
const students={
    student1:{
        //properties
        name:"ram",
        age:30
    },
    student2:{
        name:"sita",
        age:20
    }
};
console.log(students);
console.log(students.student1.name);//accesing method
console.log(students.student2.age);

const students1=[
        //properties
        {name:"ram", age:35},
        {name:"kanna", age:30},
        {name:"shilpa", age:19}
]
console.log(students1[1].age);

//methods of math
console.log(Math.PI);//pi value
console.log(Math.abs(6-9));//subtraction without negative values
console.log(Math.pow(5,2));//power
console.log(Math.floor(-5.66))//least value
console.log(Math.ceil(5.111));//the highest value
console.log(Math.random());//random value ranges from 0 to 1
Math.random()*10//5.457571108365556
Math.random()*10//3.808561165332651
Math.random()*10//7.382985762235592
// Math.floor(Math.random()*10)......Math.floor(Math.random()*10)//o/p: 7 8 4 .... 0

//by using ceil we get greatest no. i.e 10

//when the range is till 6
Math.floor(Math.random()*6)// o/p:4 3 0 ...





