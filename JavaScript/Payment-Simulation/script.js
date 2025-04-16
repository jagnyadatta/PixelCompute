const submitBtn = document.getElementById("payment-button");


const processPayment = () =>{
    const inputAmount = document.getElementById("amount");
    const statusMsg = document.getElementById("status-message");
    const completionMsg = document.getElementById("completion-message");
    const amount = parseInt(inputAmount.value);
    
    statusMsg.textContent = "Processing payment";
    statusMsg.style.color = "blue";
    inputAmount.textContent = '';
    
    new Promise((resolve, reject)=>{
        if(amount > 0){
            resolve(`Payment of ₹${amount} processed successfully!`)
        }else{
            reject(`Payment failed! Invalid amount.`);
        }
    })
    .then((message)=>{
        statusMsg.textContent = message;
        statusMsg.style.color = "green";
    })
    .catch((error)=>{
        statusMsg.textContent = error;
        statusMsg.style.color = "red";
    })
    .finally(()=>{
        completionMsg.textContent = "Payment process completed.";
        setTimeout(() => {
            completionMsg.textContent = "";
        }, 3000);
    })
}


submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    processPayment();
});