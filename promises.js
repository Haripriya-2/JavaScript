//Promises in js
//A Promise is an object that represents the eventual completion of an asynchronous operation.

let promise=new Promise((resolve,reject)=>{
    console.log("Im a promise");
    resolve("success");
});

let promise2=new Promise((resolve,reject)=>{
    console.log("Im a promise");
    reject("Error");
});

function getData(dataId,getNextdata){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        console.log("data",dataId);
        if (getNextdata){
            getNextdata();
        }
     },2000);
    });
}

let value=getData(123);
console.log(value);

//.then() and .catch() in promises
const getpromise=()=>{
  return new Promise((resolve,reject)=>{
    console.log("Im a promise");
    resolve(123);
  });

};

let promise5=getpromise();
promise5.then((res)=>{
    console.log("promise fulfilled with "+res);
});

let promise=getpromise();
promise6.catch((err)=>{
    console.log("error occoured");
});

//chaining in Promises
function asyncFunc(){
    return new Promise((resolve,reject)=>{
        console.log("data1");
        resolve("success");
    },20000);
}

console.log("fetching data1");
let p1 = asyncFunc();

p1.then((res1) => {
  console.log(res1);
  console.log("fetching data2");
  return asyncFunc();
})
.then((res) => {
  console.log(res);
  console.log("fetching data3");

  return asyncFunc();
})
.then((res) => {
  console.log(res);
});

function getData(dataId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("data", dataId);
        resolve("result for data");
      }, 2000);
    });
}
  
getData(1).then((res) => {
    console.log("data1");
    console.log(res);
  
    getData(2).then((res2) => {
      console.log("data2");
      console.log(res2);
    });
});
  