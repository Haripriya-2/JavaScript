//Inheritance
//Inheritance is passing down properties and methods of parent cls 
//to its child class.
class Parent{
    hello(){
        console.log("Hello");
    }
}
class Child extends Parent{
    
}
let obj=new Child();
obj.hello();//Inherited from parent
//obj.abc();//error

class Person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }

}
class Engineer extends Person{
    work(){
        console.log("Solving prblms");
    }
}
let aobj=new Engineer();
aobj.eat();//Inherited from Person
aobj.sleep();//Inherited from Person

//let aobj2=new Person();
//aobj2.work(); error cz we cant acccess child methods from parent cls

//Method overriding
class Parent1 {
    greet() {
      console.log("Hii from Parent");
    }
  }
  
  class Child1 extends Parent {
    greet() {
      console.log("Hii from Child");
    }
  }
  
  const child1 = new Child1();
  child1.greet(); //here method from child cls overrides parent cls method

  //super() k.w
  class Person2{
    constructor(species){
        console.log("parent constructor");
        this.species="species";
    }
    drinkWater(){
        console.log("drinks water");

    }
  }
  class Doctor extends Person2{
    constructor(branch){
        console.log("enter child constructor")
        super("Homosapiens");
        this.branch=branch;
        console.log("exit child constructor");
    }
  }
  let docobj=new Doctor("Dermatology");
  console.log(docobj.species);
  console.log(docobj.branch);
  docobj.drinkWater();


