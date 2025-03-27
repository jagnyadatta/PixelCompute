const rangeInput = document.getElementById("range");
const rangeValue = document.querySelector(".rangeShow");
const numbersCheckbox = document.getElementById("numbers");
const lettersCheckbox = document.getElementById("letters");
const mixedCaseCheckbox = document.getElementById("mixedCase");
const punctuationCheckbox = document.getElementById("punctuation");
const passwordField = document.getElementById("showPass");
const copyPassButton = document.getElementById("copyPass");
const checkBoxMsg = document.querySelector(".checkBoxMsg");
const copiedMsg = document.querySelector(".copiedMsg");

rangeInput.addEventListener("input",()=>{
    rangeValue.innerText = rangeInput.value;
    generatePassword();
});

function generatePassword() {
    let length = parseInt(rangeInput.value);
    let numbers = "0123456789";
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let mixedCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let punctuation = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";
    let characters = "";
    let password = "";
    if (numbersCheckbox.checked) characters += numbers;
    if (lettersCheckbox.checked) characters += letters;
    if (mixedCaseCheckbox.checked) characters += mixedCase;
    if (punctuationCheckbox.checked) characters += punctuation;
    if (characters === "") {
        checkBoxMsg.style.display = "block";
        setTimeout(() => {
            checkBoxMsg.style.display = "none";
        }, 3000);
        passwordField.value = ""; 
        return;
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    passwordField.value = password;
}
copyPassButton.addEventListener("click", () => {
    if (passwordField.value !== "") {
        navigator.clipboard.writeText(passwordField.value)
            .then(() => {
                copiedMsg.style.display = "block";
                setTimeout(() => {
                    copiedMsg.style.display = "none";
                }, 3000);
            })
            .catch(err => console.error("Error copying password:", err));
    }
});

document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
    checkbox.addEventListener("change", generatePassword);
});

generatePassword();
