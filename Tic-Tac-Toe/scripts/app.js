let editedPlayer;
let activePlayer = 0;
let currentround = 0
let gameIsOver = false;
let gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let playerData = [
    {
        name:'',
        symbol:'X'
    },
    {
        name:'',
        symbol:'O'
    }
]



const editPlayerOneBtn = document.getElementById('edit-player-1-btn');
const editPlayerTwoBtn = document.getElementById('edit-player-2-btn');
const configOverlay = document.getElementById('config-overlay');
const backDrop = document.getElementById('backdrop');
const configForm = document.querySelector('#config-overlay form')
const cancelBtnConfigForm = document.getElementById('cancel-config-button')
const startGameBtn = document.getElementById('start-game-btn')
const activeGame = document.getElementById('active-game')
const actvePlayerName = document.getElementById('active-player-name')
const gameBoardList = document.querySelectorAll('#game-board li')
const gameBoarddol = document.getElementById('game-board')
const gameOver = document.getElementById('game-over')
const winnerName = document.getElementById('winner')

editPlayerOneBtn.addEventListener('click',openConfigOverlay)
editPlayerTwoBtn.addEventListener('click',openConfigOverlay)
backDrop.addEventListener('click',cancelConfigOverlay)
configForm.addEventListener('submit',savePlayerConfig)
cancelBtnConfigForm.addEventListener('click',cancelConfigOverlay)
startGameBtn.addEventListener('click',startGame);

for(const gameEle of gameBoardList) {
    gameEle.addEventListener('click',selectGameField)
}
