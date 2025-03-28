console.log("Hello");
window.console.log('hello');
//window.alert("Hii");
console.dir(window.document.body);
console.log(window.document);
console.dir(document.body.childNodes[1]);
document.body.style.background="green";
//DOM Manipulation
//Accessing Elements
//Using id:
let heading=document.getElementById("heading");
console.log(heading);

//Accessing with class
let para= document.getElementsByClassName("mycls");//ret html collection
console.log(para);
console.dir(para);
//Accessing by tag
let parahs=document.getElementsByTagName("p");
console.log(parahs);
//QuerySelector
//based on tag
let firstElement=document.querySelector("p");//Returns first element
// console.dir(FirstElement);
//let allEl=document.querySelectorAll("p");//all elements
//console.dir(allEl);//returns node list
//based on class
// let allEl=document.querySelectorAll(".mycls");
// console.dir(allEl);
//based on id
// let allEl=document.querySelectorAll("#heading");
// console.dir(allEl);

//Properties
//tagName-ret tags for element nodes.
// console.dir(firstElement);
// console.log(firstElement.tagName);
//innertext:
let div=document.querySelector("div");
console.log(div);
// console.log(div.innerText);

// console.dir(div.innerHTML);
// console.log(div.innerText="abcd");
// div.innerHTML="<div>inner div</div>";
// console.log(div.innerHTML);

let heading1=document.querySelectorAll("h1");
heading1.innerText="new heading";
console.log(heading1);
heading1.innerHtml="<i>new heading</i>"
console.log(heading1);
console.log(heading1.innerText);
console.log(heading1.textContent);












