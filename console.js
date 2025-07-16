console.error("this is my error"); //we have to check this in ouput webpage inspect then click on console//
console.warn("type your name"); 
let f=prompt("enter your name");
let l=prompt("enter your last name");
console.log("welcome",f,l,"!");
// confirm
let c=confirm("Are you sure!");
if(c==true){
    console.log("selected ok");
}
else{
    console.log("selected cancel");
}