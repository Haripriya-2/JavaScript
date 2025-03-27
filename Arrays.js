//Array:Collection of items in a linear way.
let heroes=["Ironman","Hulk","Superman","Thor"];
let marks=[22,38,67,90,59,97];
let info=["Priya",41,22.5];
console.log(marks);
console.log(marks.length);
//Array indices
console.log(marks[2]);
marks[3]=23;
console.log(marks);
console.log(heroes[0]);
console.log(heroes[2]);
//Looping inside Arrays
//for loop
for(let index=0;index<heroes.length;index++){
    console.log(heroes[index]);
}
//for of loop
for(let el of heroes){
    console.log(el);
}
//Array methods
let items=["Tomatoes","Potatoes","Carrots","Chillies","Apples"];
console.log(items);
//push()
items.push("Banana","Oranges");
console.log(items);
//pop()
del_items=items.pop();
console.log(del_items);
console.log(items.toString());
//concat()
let marvel=["thor","Spiderman"];
let dc=["Superman","Batman"];
let superheroes=marvel.concat(dc);
console.log(superheroes);
//unshift()
marvel.unshift("batman");
console.log(marvel);
//shift()
let val=marvel.shift();
console.log(val);
//slice()
console.log(marks.slice(2,3));
console.log(marks.slice(1, ));
//splice()
let arr=[2,4,5,6,8.9];
arr.splice(1,2,101,103);
console.log(arr);
//add element 
arr.splice(2,0,56);
console.log(arr);
//del element 
arr.splice(3,1);
console.log(arr);
//replace element
arr.splice(3,1,202);
console.log(arr);











