//var is a name given to a memory location.These are like containers that stores data.

age=22;
console.log(age);
fullName="Priya";
console.log(fullName);
price=99.99
console.log(price);
p=undefined;
console.log(p);
a=null;
console.log(null);
isFollow=true;
console.log(isFollow);

//Diff ways to declare a Variable
fullName="Priya";
_fullName="Priya";
$fullName="Priya";
console.log(_fullName);
console.log($fullName);

//Keywords to use before a variable while creating it
//var:can be redeclared and updated 
var age=22;
var age=23;
var age=30;
console.log(age);
var fullName="priya";
fullName="Haripriya";
console.log(fullName);

//let:can't be recdeclared, but can be updated.
let Price=99;
console.log(Price);
//let price=88; error:price has already been declared.
Price=78;
console.log(Price);
let b;
console.log(b);

//const:can't be redeclared or updated.
const marks=82;
console.log(marks);
//const marks=65; error:marks has already been declared.
//marks=55; error:Assignment to constant variable.

//Data Types ->Primitive
//Number:
let Age=22;
console.log(typeof Age);
let Marks=88.5;
console.log(typeof Marks);

//String:
let FullName="priya";
console.log(FullName);

//Boolean
let isfollow=true;
console.log( typeof isfollow);

//undefined
let z;
console.log(typeof z);

//null:
let H= null;
console.log(typeof H);

//BigInt:
let c=BigInt('123');
console.log(typeof c);
 
//Symbol
let d=Symbol("Hello");
console.log(typeof d);

//Non-Primitives
//objects:
const Student={
    fName:"Haripriya",
    cgpa:8.1,
    isPass:true,
};
console.log(Student);

//accessing Obj:
console.log(Student["cgpa"]);
console.log(Student.cgpa);

//assigning new val inside an Obj
Student["fName"]="Priya";
console.log(Student.fName);






















