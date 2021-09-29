const inputSides = document.querySelectorAll(".input-sides");
const btnSubmit = document.querySelector("#btn-submit");
var outputelement = document.querySelector("#output");



function prod_of_sides(x, y) {
    var multi = x * y
    return multi;
}


function Area_of_Triangle() {

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

        var multi = prod_of_sides(x,y);

        var area = 0.5 * multi;
        outputelement.innerText = "The Area of triangle is " + area + "cm";
    }



}


btnSubmit.addEventListener("click", Area_of_Triangle);