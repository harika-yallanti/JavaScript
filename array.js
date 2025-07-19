let a=["apple","mango","muskmelon","watermelon"];
let b=["custedapple",1];
c=a.length;//to find the length of the array
console.log(c);
d=a[1][4]
console.log(d);
e=a[0]="pineapple"// the o/p: ["pineapple","mango","muskmelon","watermelon"]
console.log(a);
a[7]="orange";
console.log(a);// the new item is added at the index we have mentioned the space between them is empty(....)
console.log(a[8]);// u will get the o/p as undefined

//methods of array
b.push("grapes");//add the new item at last
console.log(b);
b.unshift("carrot")//add the new item at first
console.log(b);
b.pop(b);
console.log(b);//it removes the last item
b.shift(b);
console.log(b);//it removes the first item
f=b.indexOf("grapes");//to find the index of the grapes but grapes is not there in the array(-1)
console.log(f);
k=b.indexOf(1)//whenever the item is present then prints the index
console.log(k);
g=b.includes("grapes");
console.log(g);
h=a + b; //we will get all items in a and b but not in array formt
console.log(h);
i=b.concat(a);//we will get all elements in b and a in array format
console.log(i);
j=b.concat(b);//we will get the items in b double times
console.log(j);
b.reverse();// to reverse the order of items
console.log(b);
z=b.slice(-1);//to delete the item
console.log(z);
q=a.slice(4,8);//used to delete the empty spaces
console.log(q);


s=a.splice(1,0,"red","yellow","blue");
console.log(a);//we can add items within the index 1 and 0 means we are not deleting anything

//sorting
let r=[1,"a","d","g","k","b",8,"p"]
r.sort();
console.log(r);
let num6=[100,25,50,75,8]
console.log(num6);
let num7=num6//copying the array in another variable
console.log(num7);
num=num7==num6//true because all the elements in 6 are equal to elements in 7(NOTE:true only if the arrays are copied)
console.log(num);
num6[4]=80;
console.log(num6);
num8=[100,25,50,75,80];
console.log(num8);
numm=num6==num8;//false when the elements are still same  because the elements are not copied
console.log(numm);

//constant array
const arr=[12,56,2,5,79];//constant array is taken
console.log(arr);
a1=arr[2]=7;//changed an element using index
console.log(arr);//the array is changed with the updated value in the array

arr=[1,5,7]//error because we can change some elements in the array but we cannot change whole array
console.log(arr);

//multidimensional array
ar1=[[1,2,3],[4,5,6],[7,8,9]]
console.log(ar1);



