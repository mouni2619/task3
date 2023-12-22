/*1)How to compare two JSON have the same properties without same order

obj1={name:"person",age:5}

obj2={age:5, name:"person"}*/

let obj1={name:"person",age:5}
let obj2={age:5, name:"person"}
if((obj1.name==obj2.name)&&(obj1.age==obj2.age)){
   console.log("true") 
}
else{
    console.log("false")
}