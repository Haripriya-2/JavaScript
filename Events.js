let btn1=document.querySelector("#btn1");
// btn1.onclick=(e)=>{
//     //Event obj
//     console.log(e);//prints event obj details
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);

//     // console.log("btn1 was clicked");
//     // let a=25;
//     // a++;
//     // console.log(a);//a
// };
// let div=document.querySelector("div");
// div.onmouseover=(e)=>{
//     console.log("ur inside div");
//     console.log(e);//prints event obj details
//     console.log(e.type);
//      console.log(e.target);
//      console.log(e.clientX,e.clientY);   
// };

//Event listener

//adding Event listener
btn1.addEventListener("click",(e)=>{
    console.log(e);
    console.log("btn 1 was clicked-handler1");
});


btn1.addEventListener("click",()=>{
    console.log("btn 1 was clicked-handler2");
});

btn1.addEventListener("click",()=>{
    console.log("btn 1 was clicked-handler4");
});
const handler3=()=>{
    console.log("btn 1 was clicked-handler3");
};

btn1.addEventListener("click",handler3);

//removing event listener
btn1.removeEventListener("click",handler3);






