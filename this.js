/*
const student={
    name:"bob",
    age:18,
    math:89,
    eng:88,
    sci:90,
    getavg()
    {
        let avg=(this.math+this.eng+this.sci)/3;
        console.log(avg);
       // console.log(student.getavg());
    }
}
console.log(student.getavg());
*/

//arrow function
const student1={
    name:"bob",
    age:18,
    physics:89,
    chemistry:88,
    hindi:90,
    get()
    {
        console.log(this);  //student1.get(); o/p:{name: 'bob', age: 18, physics: 89, chemistry: 88, hindi: 90, …}
        //console.log(student1.get());
    },
     getavg:()=>
    {
        
        console.log(this); //student1.getavg(); o/p:Window {window: Window, self: Window, document: document, name: '', location: Location, …}
       // console.log(student1.getavg());
    }
        
} 