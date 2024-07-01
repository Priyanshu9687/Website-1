const X_CLASS = "x"
const CIRCLE_CLASS = "circle"
const winnigCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const board = document.querySelector('#board')
const cellElements = document.querySelectorAll('[data-cell]')
const winningMessageText = document.querySelector('[data-winning-message-text]')
const winningMessage = document.querySelector('.winning-message')
const restartButton = document.querySelector('#restartButton')
const x_score_count = document.querySelector('#x_score_count')
const circle_score_count = document.querySelector('#circle_score_count')
const resetCount = document.querySelector('#resetCount')
let circleTurn;
let X_score = 0;
let circle_score = 0;

startGame()


function startGame() {
    circleTurn=false
    cellElements.forEach(cell=>{
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click',handleClick)
        cell.addEventListener('click',handleClick,{once:true})
    })
    setBoardHoverClass()
    winningMessage.classList.remove('show')
}
function handleClick(e) {
    const cell  = e.target
    const currentClass = circleTurn?CIRCLE_CLASS:X_CLASS
    placeMark(cell,currentClass)
    if (checkWin(currentClass)) {
        endGame(false)
    }
    else if (isDraw()) {
        endGame(true)
    }
    else{
        switchTurns()
        setBoardHoverClass()
    }

    //check for win

    //check for draw

}

function isDraw() {
    return [...cellElements].every(cell=>{
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS) 
    })
}
function endGame(draw) {
    if (draw) {
        winningMessageText.innerText = "Draw!";
    }
    else{
        if (circleTurn) {
            winningMessageText.innerText = "O Is The Winner";
            circle_score++;
            circle_score_count.innerText = circle_score
        }
        else{
            winningMessageText.innerText = "X Is The Winner";
            X_score++;
            x_score_count.innerText = X_score
        }
    }
    winningMessage.classList.add('show')
}

function placeMark(cell,currentClass) {
    cell.classList.add(currentClass)
}

function switchTurns(){
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    }
    else{
        board.classList.add(X_CLASS)
    }
}
function checkWin(currentClass) {
    return winnigCombination.some(combination =>{
        return combination.every(index=>{
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

restartButton.addEventListener('click',startGame)
resetCount.addEventListener('click',()=>{
    X_score = 0;
    circle_score = 0;
    x_score_count.innerText = X_score
    circle_score_count.innerText = circle_score
})