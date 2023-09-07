function resetGame() {
    activePlayer = 0;
    currentround = 0;
    gameIsOver = false
    console.log(gameOver.firstElementChild)
    gameOver.firstElementChild.innerHTML = `
     You won,<span id="winner">Player Name</span>!
    `
    gameOver.style.display = 'none'
    let gameIndex = 0
    for(let i=0;i<=2;i++) {
        for(let j=0;j<=2;j++) {
            gameData[i][j] = 0
            const gameBoardItem = gameBoarddol.children[gameIndex]
            gameBoardItem.textContent = ''
            gameIndex++
        }
    }
}

function startGame() {
    if (playerData[0].name === '' || playerData[1].name === '') {
        alert('Please set a custom name to start')
        return
    }
    resetGame()
    actvePlayerName.textContent = playerData[activePlayer].name
    activeGame.style.display = 'block'
}

function swithPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0
    }
    actvePlayerName.textContent = playerData[activePlayer].name
}

function selectGameField(event) {
    if(gameIsOver) {
        return
    }
    const selectedColumn = event.target.dataset.col - 1;
    const selectedRow = event.target.dataset.row - 1;
    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('Please Select an Empty Field')
        return
    }

    console.log(gameData)

    event.target.textContent = playerData[activePlayer].symbol
    gameData[selectedRow][selectedColumn] = activePlayer + 1
    currentround++
    const winnerId = checkForGameOver()
    if(winnerId != 0) {
        endGame(winnerId)
    }
    swithPlayer()
}

function checkForGameOver() {
    //check for row equality
    for (let i = 0; i <= 2; i++) {
        if (gameData[i][0] > 0 &&
            gameData[i][0] == gameData[i][2] &&
            gameData[i][0] == gameData[i][1]
        ) {
            return gameData[i][0]
        }
    }
    //check for column equality
    for (let i = 0; i <= 2; i++) {
        if (gameData[0][i] > 0 &&
            gameData[0][i] == gameData[2][i] &&
            gameData[0][i] == gameData[1][i]
        ) {
            return gameData[0][i]
        }
    }

    //check for left top to right bottom
    if (gameData[0][0] > 0 && gameData[0][0] == gameData[1][1] && gameData[0][0] === gameData[2][2]) {
        return gameData[0][0]
    }

    //check for bottom left to top right
    if (gameData[2][0] > 0 && gameData[2][0] == gameData[1][1] && gameData[2][0] == gameData[0][2]) {
        return gameData[2][0]
    }

    if(currentround == 9) {
        return -1
    }

    return 0
}

function endGame(winner) {
    gameIsOver = true
    gameOver.style.display = 'block'
    if(winner > 0) {
       gameOver.firstElementChild.firstElementChild.textContent = playerData[activePlayer].name
    } else {
        gameOver.firstElementChild.textContent = "It's a Draw"
    }
}