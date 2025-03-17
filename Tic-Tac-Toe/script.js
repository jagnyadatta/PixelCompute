const board = ["","","","","","","","",""];
let currPlayer = "X";
let gameStatus = true;
const allCells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const reset = document.getElementById('reset');

allCells.forEach(cell =>{
    cell.addEventListener('click',(event)=>{
        const index = event.target.dataset.index;
        if(board[index] === "" && gameStatus){
            board[index] = currPlayer;
            event.target.textContent = currPlayer;
            //check winnig
            if(checkWinner()){
                message.textContent = `${currPlayer} Wins!`;
                gameStatus = false;
                return;
            }
            //if no one wins
            if(board.every(cell=>cell !== "")){
                message.textContent = "It's a draw!";
                gameStatus = false;
                return;
            }
            //changing player
            currPlayer = currPlayer === "X" ? "O" : "X";
        }
    });
});

reset.addEventListener("click",()=>{
    board.fill("");
    gameStatus=true;
    currPlayer = "X";
    message.textContent = '';
    allCells.forEach(cell => cell.textContent = "");
})

const checkWinner =()=>{
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  
        [0, 4, 8], [2, 4, 6]              
    ];
    return winConditions.some(condition => {
        const [a, b, c] = condition;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}