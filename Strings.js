let str="Priya";
console.log(str.length);
console.log(str[0]);
console.log(str[4]);

//Template Literals:
let a=10;
let b=20;
console.log(`The sum of a and b is ${a=b}`);



//Escape characters
console.log("Hari\npriya");//to print in new line
console.log("Hari\tpriya");//to give tab space

//String Methods

//str.toUpperCase
let strupper=str.toUpperCase();
console.log(strupper);

//str.toLowerCase
let strlower=str.toLowerCase();
console.log(strlower);
console.log(str);

//str.trim
let str2="  Hari priya  ";
console.log(str2.trim());

//str.slice(start,end)
let str3="01234567";
console.log(str3.slice(1,7));
console.log(str3.slice(3));
console.log(str3.slice());

//str.concat(str2)
let str4="Hari";
let str5="priya";
console.log(str4.concat(str5));
console.log(str4+str5);

//str.replace(search val,new val)
let str6="Hello";
console.log(str6.replace("o","p"));
console.log(str6.replace("lo","p"));
console.log(str6.replaceAll("lo","p"));

//str.charAt(idx)
let str7="IloveJS";
console.log(str7.charAt(4));


