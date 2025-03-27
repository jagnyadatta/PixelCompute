const resultBox = document.querySelector('.resultBox');
const buttons = document.querySelectorAll('button');

let currInput = "";
let operators = { "×": "*", "÷": "/", "Exp": "**" }; 

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        let value = button.innerText;
        if(value === "C"){
            resultBox.innerText = "0";
            currInput = "";
        }else if(value === "Del"){
            currInput = currInput.slice(0,-1);
            resultBox.innerText = currInput || "0";
        }else if(value === "="){
            try{
                resultBox.innerText = eval(currInput);
                currInput = resultBox.innerText;
            }catch(error){
                resultBox.innerText = "Error";
                currInput = "";
            }
        }else{
            currInput += operators[value] || value;
            resultBox.innerText = currInput;
        }
    })
})