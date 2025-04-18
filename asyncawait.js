//async and await
//async fn always returns a promise
//await is used inside an async function to 
// pause the code and wait for a Promise to resolve.
async function Hii() {
    return "Hii";
}
  
  Hii().then(msg => 
    console.log(msg)); // Hii

function api() {
    return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log("data");
            resolve(200);
          }, 2000); 
    });
}
async function getdata(){
    await api();
    const res= await api();
    console.log(res);
   
}
getdata();

function waitForPizza() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log("Pizza delivered");
        resolve("eat pizza");
      }, 3000); 
    });
}
  
  async function orderPizza() {
    console.log("Ordering pizza");
    await waitForPizza(); //waiting for pizza
    console.log("Eating pizza");
}
  
orderPizza();