const container = document.querySelector('.container');
const dialogBox = document.querySelector('dialog');
const closeBtn = document.querySelector('.closeBtn');
const form = document.querySelector('form');
const eventCard = document.getElementById('event-card');

//checking either input field is empty or not.
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let emptyField = false;
    const allInputs = document.querySelectorAll('input, textarea');
    allInputs.forEach(input =>{
        if(input.value === ""){
            emptyField = true;
        }
    });
    if (emptyField) {
      dialogBox.show();
    } else {
        eventCard.style.display = "block";
        container.style.display = "none";
        //form data
        const eventName = form.querySelector('#event-name').value;
        const eventDate = form.querySelector('#event-date').value;
        const eventStart = form.querySelector('#event-startTime').value;
        const eventEnd = form.querySelector('#event-endTime').value;
        const eventDesc = form.querySelector('#event-Desc').value;
        const eventLocation = form.querySelector('#event-location').value;
        //to put section data
        const eventNameField = document.querySelector('.event-nameField');
        const eventDateField = document.querySelector('.event-dateField');
        const eventTimeField = document.querySelector('.event-timeField');
        const eventLocationField = document.querySelector('.event-locationField');
        const eventDescField = document.querySelector('.event-descField');

        //filling field 
        eventNameField.innerText = eventName;
        eventDateField.innerText = eventDate;
        eventTimeField.innerText = `${eventStart} AM - ${eventEnd} PM`;
        eventDescField.innerText = eventDesc;
        eventLocationField.innerText = eventLocation;
    }
});

//DialogBox close button
closeBtn.addEventListener("click",()=>{
    dialogBox.close();
});
