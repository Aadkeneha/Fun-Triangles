const inputSides = document.querySelectorAll(".input-sides");
const btnSubmit = document.querySelector("#btn-submit");
var outputelement = document.querySelector("#output");


function prod_of_sides(x,y){
    var multi = x*y
    return multi;
}


function Area_of_Triangle(){

    var multi = prod_of_sides(Number(inputSides[0].value) ,Number(inputSides[1].value));

    var area = 0.5*multi;
    outputelement.innerText = "The Area of triangle is " + area + "cm";

}


btnSubmit.addEventListener("click",Area_of_Triangle);

