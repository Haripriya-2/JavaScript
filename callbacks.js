function hello(){
    console.log("hello");
}
setTimeout(hello,2000);//prints hello after 2s.

setTimeout(()=>{
    console.log("hello");
},4000);

console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("Priya");//prints after 3 console stmnts.
},4000);//delay
console.log("three");

//callbacks:A callback is a fn passed as an argument to another fn.
function calculator(a, b, sumcallback) {
    sumcallback(a, b);
    console.log("Inside calculator:", a + b);
}

function sum(x, y) {
    console.log("Inside callback:", x + y);
}

calculator(1, 2, sum);

//callback Hell:Its a prblm that arises in callbacks.
//Ithappens when you have multiple nested callback functions,
// each one depending on the result of the previous one.


function getdata(dataId,getNextdata){
    setTimeout(()=>{
        console.log("data",dataId);
        if (getNextdata){
            getNextdata();
        }
    },2000);
}
getdata(1,()=>{
    console.log("getting data1");
    getdata(2,()=>{
        console.log("getting data3")
        getdata(3,()=>{
            console.log("getting data4");
             getdata(4);
        });
    });
});