const formQuiz = document.querySelector(".form-quiz");
const btnSubmit = document.querySelector("#btn-submit");
const outputelement = document.querySelector("#output");

const ans = ["90","right"];


function checkans(){

    let score = 0
    let x = 0

    const formvalue = new FormData(formQuiz);

    for(let i of formvalue.values()){
        
        if(i===ans[x]){
            score = score + 1;
        }
        x=x+1;
    }

    outputelement.innerText="You have answered "+score + " correct answers.";
    
}

btnSubmit.addEventListener("click",checkans);