const inputAngles = document.querySelectorAll(".input-angles");
const btnSubmit = document.querySelector("#btn-submit");
var outputelement = document.querySelector("#output");


function sum_Of_angles(x,y,z){
    var sum = x+y+z
    return sum;
}


function isTriangle(){

    const x = Number(inputAngles[0].value);
    const y = Number(inputAngles[1].value);
    const z = Number(inputAngles[2].value );

    if (x === 0 || y === 0 || z === 0) {

        if(inputAngles[0].value==="" || inputAngles[1].value===""||inputAngles[2].value===""){
            outputelement.innerText = "Please provide input to all fields";
        }
        else{

            outputelement.innerText = "Please enter valid input greater than 0.";

        } 
        

    } else {

    var sumOfangles = sum_Of_angles( x,y ,z);

    if(sumOfangles===180){
        
        outputelement.innerText = "Yep!! It's a Triangle";
    }
    else{
        outputelement.innerText = "Sorry!! It's not a Triangle";
    }

}
}

btnSubmit.addEventListener("click",isTriangle);

