const formContainer = document.getElementById('upload-form');


const handleUpload = () =>{
    const fileName = document.getElementById("file-name").value;
    const checkValue = parseInt(document.getElementById("check-value").value);
    const statusMsg = document.getElementById("status-message");
    const completionMsg = document.getElementById("completion-message");

    //check validation
    const isValidFile = fileName.endsWith('.pdf') || fileName.endsWith('.doc');
    const isValidValue = checkValue % 7 === 0;

    statusMsg.textContent = "Uploading: 0%";
    statusMsg.style.color = "blue";
    completionMsg.textContent = "";

    let pogress = 0;
    let interval = setInterval(() => {
        pogress += 25;
        statusMsg.textContent = `Uploading: ${pogress}%`;
        if(pogress === 100) clearInterval(interval);
    }, 500); 
    
    new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(isValidFile && isValidValue){
                resolve("File uploaded successfully!");
            }else{
                reject("File upload failed! Invalid file or check value");
            }
        }, 2000);
    })
    .then(message=>{
        statusMsg.textContent = message;
        statusMsg.style.color = "green";
    })
    .catch(error=>{
        statusMsg.textContent = error;
        statusMsg.style.color = "red";
    })
    .finally(()=>{
        completionMsg.textContent = "File upload process completed.";
        completionMsg.style.color = "darkgray";

        setTimeout(() => {
            completionMsg.textContent = "";
        }, 3000);
    })
}

formContainer.addEventListener("submit",(event)=>{
    event.preventDefault();
    handleUpload();
});
