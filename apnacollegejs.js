// exercise 1 code with harry

// console.log("Hii,How are you?");
// const pie=3.14;
// let b=1;
// let c="adi";
// console.log(b+c);
// console.log(typeof(b+c));
// // pie=3;
// console.log(pie);


    // let age=prompt("enter the age")
    // age=Number.parseInt(age);
    // if(age>=10 && age<=20){
    //     console.log("valid age ");
    // }
    // else{
    //     console.log("invalid age")
    // }

// let a=prompt("nfjs");
// a=Number.parseInt(a);
// switch(a){
//     case 0:
//         console.log("0");
//         break;
//     case 1: 
//     console.log("hgfds1");
//     break;
// }


// console.log("press 1 for snake \npress 2 for water\npress 3 for gun  ")
// let win=0;
// let lose=0;
// let draw=0;
// for(let i=0;i<10;i++){
// let a=prompt("enter a number between 1 to 3 ")
// a=Number.parseInt(a)
// const r=Math.floor((Math.random())*3+1);
// console.log("computer number: "+r)
//   if(r==1)
//   {
//     if(a==3)
//     {
//       console.log("you won")
//       win=win+1;
//     }
//     else if(a==2)
//     {
//        console.log("you losse")
//       lose=lose+1;
//     }
//     else{
//       console.log("draw ")
//      draw =draw+1;
//     }
//   }
//   if(r==3)
//   {
//     if(a==2)
//     {
//       console.log("you won")
//       win=win+1;
//     }
//     else if(a==1)
//     {
//        console.log("you losse")
//       lose=lose+1;
//     }
//     else{
//       console.log("draw ")
//      draw =draw+1;
//     }
//   }
//   if(r==2)
//   {
//     if(a==1)
//     {
//       console.log("you won")
//       win=win+1;
//     }
//     else if(a==3)
//     {
//        console.log("you losse")
//       lose=lose+1;
//     }
//     else{
//       console.log("draw ")
//      draw =draw+1;
//     }
//   }
// }
// console.log("total you won : "+win)
// console.log("total you draw : "+draw)
// console.log("total you lose : "+lose)

// let a=prompt("enter the number");
// a=Number.parseInt(a);
// if(a%2==0 && a%3==0){
//     console.log(" yes divisible by 2 and 3");
// }
// else{
//     console.log("not divisible by 2 and 3");
// }

// let a=prompt("enter the number");
// a=Number.parseInt(a);
// if(a%2==0 || a%3==0){
//     console.log(" yes divisible by 2 or 3");
// }
// else{
//     console.log("not divisible by 2 or 3");
// }


// let age=prompt("enter the age");
// age=Number.parseInt(age);
// if(age>=18){
//     console.log(" yes you can drive");
// }
// else{
//     console.log("no you cant drive");
// }


//for in loop
// for(let a in marks){
//     //for any key 
//     console.log(a);
//     //for value 
//     console.log(marks[a]);
// }


// let c="fhajk";
// for(let a of c){
//     console.log(a);
// }

// if(a==1){
//     console.log("sdgyh");

// }
// else{
//     console.log("try again");
    
// }




// do{
//     a=prompt("bidfjk");
//     a=Number.parseInt(a);
//     if(a!=1){
//         console.log("try again");

//     }
//     else{
//         console.log("right");
//         break;
//     }
    
// }
// while(a!=1);


// console.log("Function Problem");
// function meanc(a,b,c,d,e){
//     let l=(a+b+c+d+e)/5;
//     console.log("Mean of the number is : "+l);
// }
// meanc(95,98,97,96,94);

// console.log("Function Arrow Problem");
// const mean=(a,b,c,d,e)=>{
//     let l=(a+b+c+d+e)/5;
//     console.log("Mean of the number is : "+l);
// }
// mean(95,98,97,96,94);


//for each loop
// let arr=[1,2,3,4,5];
// arr.forEach(function printval(val){
//     console.log(val);
// }
// )


// let arr=[1,2,3,4,5];
// arr.forEach(function printSquare(val){
//         console.log(val*val);
//     }
// )


// let arr=[1,2,3,4,5];
// let a1=arr.map((v)=>{
//     return v+1;
// })
// console.log(a1);

// let btn=document.querySelector("button");
// let bg="light";
// btn.addEventListener("click",()=>{
// if(bg==="light"){
//     bg="dark";
//         document.body.style.backgroundColor="black";
//         document.body.style.color="white";
//     }
// else{
//     bg="light";
//     document.body.style.backgroundColor="white";
//     document.body.style.color="black";
//     }
//     console.log(bg);
// }
// )

let btn=document.querySelectorAll("button");
let display=document.querySelector(".display");
let p=""; 
let ac=["=","+","-","*","/"];

btn.forEach((button) => {
    button.addEventListener("click",(e)=>{
        p=p+e.target.value;
        console.log(p);
    }
    )
}
);
// console.log(p);
