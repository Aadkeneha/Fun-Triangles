const inputSides = document.querySelectorAll(".input-sides");
const btnSubmit = document.querySelector("#btn-submit");
var outputelement = document.querySelector("#output");


function sum_Of_sqsides(x,y){
    var sum = x*x+y*y
    return sum;
}


function Hypotenuse(){

    const x = Number(inputSides[0].value);
    const y = Number(inputSides[1].value);

    if (x === 0 || y === 0) {

        if(inputSides[0].value==="" || inputSides[1].value===""){
            outputelement.innerText = "Please provide input to all fields";
        }
        else{

            outputelement.innerText = "Please enter valid input greater than 0.";

        } 
        

    } else {

    var sumOfsqsides = sum_Of_sqsides(Number(inputSides[0].value) ,Number(inputSides[1].value));

    var hypo = Math.sqrt(sumOfsqsides);
    outputelement.innerText = "The Hypotenuse side is " + hypo + "cm";

    }

}


btnSubmit.addEventListener("click",Hypotenuse);

