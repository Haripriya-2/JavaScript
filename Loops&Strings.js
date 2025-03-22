//Loops:Loops are used to execute a piece of code again and again.
//It avoids repetition in the code

//For Loop
for (let i=1; i<=5;i++){
    console.log("Priya");
}

//While Loop:
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

//do-while loop:
let j=20;
do{
    console.log("Priya");
    j++;
}while(j<=10);

//for-of loop:
let str="priya";
for(let val of str){
    console.log(val);

}

//for-in loop:
let Student={
    fullName:"Haripriya",
    age:22,
    cgpa:8.0,
    isPass:true

};
for (let h in Student){
    console.log(h);
    console.log(Student[h]);

}

