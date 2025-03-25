function myFun(){
    console.log("Hello Priya");

}

myFun();

function message(msg){
    console.log(msg);
}
message("This is Haripriya");

//sum of 2 nums
function sum(a,b){
    // console.log(a+b);
    c=a+b;
    return c;
}
sum(10,20);

//Arrow Fn's:Compact way of writing fns
const mul=(x,y)=> {
    console.log(x*y);
}
mul(2,6);

//forEach loop in Arrays
let arr1=[2,4,6,8];
arr1.forEach(function(element){
    console.log(element);
});

//forEach loop in Arrays using arrow Fn's
let arr=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val);


});

