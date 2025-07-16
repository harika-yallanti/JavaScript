let a=5;
let b=2;
// if and else //
if(a>b){
    console.log("true");
}
else{
    console.log("false");
}
// simple if //
if(a==b){
    console.log("both are equal");
}
// else if //
if(a>b){
    console.log("a");
}
else if(a==b){
    console.log("a&b");
}
else{
    console.log("b");
}
// nested if //
if(b>a){
    console.log("b>a");

  if(b==a){
    console.log(b>=a);
  }
  else(a>b)
  {
    console.log("a>b");
  }
}
else(a==b)
{

    console.log("a>=b");
 }
 // default 0,empty string,null,Nan are false//
 if(!0){
    console.log("true");
 }
 else{
    console.log("false");
 }
 //example-2//
 if(!NaN){
    console.log("true");
 }
 else{
    console.log("false");
 }
 
