//constructors in JS:
//A constructor is a special method inside a class that's automatically called 
// when a new object is created using the new keyword.
class ToyotoCar{
    //Default constructor
    constructor(){
        console.log("Creating new obj");
    }
    //constructor with single parameter
    constructor(brand){
        console.log("creating an obj");
        this.brand=brand;
    }
   //constructor with two parameters
    constructor(brand,milage){
        console.log("Creating an obj");
        this.brand=brand;
        this.milage=milage;
    }
}
let fortuner=new ToyotoCar();
let lexus=new ToyotoCar("lexus");
let fortuner=new ToyotoCar("fortuner",20);
console.log(fortuner);

fortuner.brand="fortuner2";
console.log(fortuner);

//constructor with default parameters
class Bike {
    constructor(brand = "Hero", speed = 100) {
      this.brand = brand;
      this.speed = speed;
    }
}
  
let bike1 = new Bike(); //Uses default values
let bike2 = new Bike("Yamaha", 150);
  
console.log(bike1); 
console.log(bike2); 
  



