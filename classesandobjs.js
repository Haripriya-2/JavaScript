//obj's in JS
//Creating an obj
const Student={
    fullName:"Priya",
    marks:82,
    PrintMarks(){
        console.log("marks=",this.marks);

    },

};
console.log(Student.marks);
console.log(Student.PrintMarks());
//Prototype
//It is a specific property of js object.the prototype itself is a special type of obj that contains some methods and objs.
console.log(Student.toString());//getting this toString from prototype.
//Setting prototype
const employee={
    calcTax(){
        console.log("tax rate is 10%");   
    },
};
employee.calcTax();

const priya={
    salary:300000,
    calcTax(){
        console.log("tax rate is 20%");
    },
};
priya.__photo__=employee;//can use properties of employee in priya obj
priya.calcTax();//20%

//Classes in JS
//It is a pgm code template to create an obj
class ToyotoCar{
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");

    }
    setbrand(brand){
        this.brandName=brand;    

    }

}
//Cls obj
let fortuner=new ToyotoCar();
fortuner.start();
let lexus=new ToyotoCar();
lexus.stop();
console.log(fortuner.setbrand("fortuner"));
console.log(lexus.setbrand());










