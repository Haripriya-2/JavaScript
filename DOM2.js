// let div=document.querySelector("div");
// console.log(div);

//  let id=div.getAttribute("id");
//  console.log(id);


// let name=div.getAttribute("name");
//  console.log(name);

// let para=document.querySelector("p");
// console.log(para);

// let Class=para.setAttribute("class","newClass");
// console.log(Class);

// let div=document.querySelector("div");
// console.log(div.style);
// div.style.backgroundColor="green";
// div.style.visibility="hidden";
// div.style.fontSize="40px";
// div.innerText="Hello";

// let el=document.createElement("button");
// el.innerText="click me";
// console.log(el);

//add element

let newHeading =document.createElement("h1");
newHeading.innerHTML="<i>Hi,I am new Hreading </i>";

document.querySelector("body").prepend(newHeading);
// let div=document.querySelector("div");
// div.append(el);
// div.prepend(el);
// div.before(el);
// div.after(el);

//Delete element
let para=document.querySelector("p");
para.remove();

newHeading.remove();







