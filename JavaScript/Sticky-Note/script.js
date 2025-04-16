const noteContainer = document.getElementById('note-container');
const addNote = document.getElementById('addNewNote');
const noteText = document.getElementById('textInput');

addNote.addEventListener("click",()=>{
    const div = document.createElement('div');
    div.classList.add('note');
    div.innerText = noteText.value;
    const button = document.createElement('button');
    button.classList.add('delete-btn');
    button.innerText = "X";
    div.appendChild(button);
    noteContainer.appendChild(div);

    button.addEventListener("click",()=>{
        div.remove();
    });
    noteText.value = "";
});