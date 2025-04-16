const submitbtn = document.getElementById("login-button");
const statusMsg = document.getElementById("status-message");
const completionMsg = document.getElementById("completion-message");



const authenticateUser = (username, password) => {
    new Promise((resolve, reject)=>{
        if(username === "admin" && password === "$to7Meer!2"){
            resolve("Welcome, Admin!");
        }else{
            reject("Authentication failed! Invalid credentials.");
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
        completionMsg.textContent = 'Authentication process completed.';
        setTimeout(() => {
            completionMsg.textContent = "";
        }, 3000);
    })
};

submitbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const userInput = document.getElementById("username");
    const passInput = document.getElementById("password");
    const userName = userInput.value;
    const passWord = passInput.value;
    statusMsg.textContent = "Authenticating";
    statusMsg.style.color = "blue";

    authenticateUser(userName, passWord);

    userInput.value = "";
    passInput.value = "";
});