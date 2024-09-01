let a=document.querySelector(".display");
let b=document.querySelectorAll("button");
const specialchar=["AC","%","*","+","-","/","=","^2","."];
let output="";
// console.log(a,b); 
function calculate(btnvalue){
    if(btnvalue === "=" && output!==""){
        output=eval(output.replace("%","/100"));
    }
    else if(btnvalue==="AC"){
        output="";
    }
    else if(btnvalue==="^2")
    {   
        output=output*output;
    }
    else{
        if(output === "" && specialchar.includes(btnvalue))return;
        output+=btnvalue;
    }
    a.value=output;
};  
b.forEach((button) => {
    button.addEventListener("click",(e)=>calculate(e.target.value));
});