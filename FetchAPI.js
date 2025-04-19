//FetchAPI
//Fetch Api returns promise
//here fetch method is used for fetching a resourse
const url="https://jsonplaceholder.typicode.com/todos/1";

const getFact=async()=>{
    console.log("waiting for data");
    let response=await fetch(url);
    console.log(response);

}

const getFacts=async()=>{
    console.log("getting data");
   let response=await fetch(url);
   console.log(response);
   let data=await response.json();//parsing data
   console.log(data);
   
};
getFact();
getFacts();


//post request
//it helps in submitting data
async function getdata(){
 let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
let data = await x.json() 
return data
}
let promise1=getdata();
console.log(promise1);
