const inputAngles = document.querySelectorAll(".input-angles");
const btnSubmit = document.querySelector("#btn-submit");
var outputelement = document.querySelector("#output");


function sum_Of_angles(x,y,z){
    var sum = x+y+z
    return sum;
}


function isTriangle(){

    var sumOfangles = sum_Of_angles(Number(inputAngles[0].value) ,Number(inputAngles[1].value) ,Number(inputAngles[2].value ));

    if(sumOfangles===180){
        
        outputelement.innerText = "Yep!! It's a Triangle";
    }
    else{
        outputelement.innerText = "Sorry!! It's not a Triangle";
    }
}

btnSubmit.addEventListener("click",isTriangle);

