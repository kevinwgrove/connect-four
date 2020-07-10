let boardModel = [
    [ null, null, null, null, null, null, null ], // [0]
    [ null, null, null, null, null, null, null ], // [1]
    [ null, null, null, null, null, null, null ], // [2]
    [ null, null, null, null, null, null, null ], // [3]
    [ null, null, null, null, null, null, null ], // [4]
    [ null, null, null, null, null, null, null ]  // [5]
];

let newMessage = document.querySelector('#message')
let currentPlayer = 'red'
let numberOfDiscs = 0
let gameOver = false


const colSelector = document.querySelector('#column')

const addDisc = function (evt) {
    let rowNum = 6
    let getID = evt.target.id.slice(-1)
    let selectedDisc = document.getElementById(rowNum + "-" + getID)  

    while(rowNum>0){
        if(selectedDisc.className === "disc red" || selectedDisc.className==="disc black"){
            rowNum -= 1
            selectedDisc = document.getElementById(rowNum + "-" + getID)
        } else if (selectedDisc.className === "disc") {
            selectedDisc = document.getElementById(rowNum + "-" + getID)
            selectedDisc.classList.add(currentPlayer)
            numberOfDiscs++
            boardModel[rowNum - 1][getID - 1] = currentPlayer
            break;
        }
    }    
}

function columnIsFull(evt) {
    let getID = evt.target.id.slice(-1)
    let topDisc = document.getElementById("1-" + getID)
    if (topDisc.classList[1] === 'black' || topDisc.classList[1] === 'red'){
        return true
    }
}

function verticalWin(boardModel){
    for(let rowNum=0; rowNum<3; rowNum++){
        for(let colNum=0; colNum<boardModel[rowNum].length; colNum++){
            if(boardModel[rowNum][colNum] === boardModel[rowNum+1][colNum] && 
               boardModel[rowNum][colNum] === boardModel[rowNum+2][colNum] &&
               boardModel[rowNum][colNum] === boardModel[rowNum+3][colNum] &&
               boardModel[rowNum][colNum] !== null){
                document.getElementById((rowNum + 1) + '-' + (colNum +1)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                document.getElementById((rowNum + 2) + '-' + (colNum +1)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                document.getElementById((rowNum + 3) + '-' + (colNum +1)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                document.getElementById((rowNum + 4) + '-' + (colNum +1)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                   return true
               }
        }
    }
    return false
}

function horizontalWin(boardModel){
    for(let rowNum=0; rowNum<boardModel.length; rowNum++){
        for(let colNum = 0; colNum < 4; colNum++){
            if(boardModel[rowNum][colNum] === boardModel[rowNum][colNum+1] && 
               boardModel[rowNum][colNum] === boardModel[rowNum][colNum+2] &&
               boardModel[rowNum][colNum] === boardModel[rowNum][colNum+3] &&
               boardModel[rowNum][colNum] !== null){
                   console.log()
                   document.getElementById((rowNum + 1) + '-' + (colNum +1)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                   document.getElementById((rowNum + 1) + '-' + (colNum +2)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                   document.getElementById((rowNum + 1) + '-' + (colNum +3)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                   document.getElementById((rowNum + 1) + '-' + (colNum +4)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                   return true
               }
        }
    }
    return false
}

function diagonalUpWin (boardModel) {
    for(let rowNum=5; rowNum>2; rowNum--){
        for(let colNum=0; colNum<4; colNum++){
            if(boardModel[rowNum][colNum] === boardModel[rowNum-1][colNum+1] && 
               boardModel[rowNum][colNum] === boardModel[rowNum-2][colNum+2] &&
               boardModel[rowNum][colNum] === boardModel[rowNum-3][colNum+3] &&
               boardModel[rowNum][colNum] !== null){
                document.getElementById((rowNum + 1) + '-' + (colNum + 1)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                document.getElementById((rowNum) + '-' + (colNum +2)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                document.getElementById((rowNum - 1) + '-' + (colNum +3)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                document.getElementById((rowNum - 2) + '-' + (colNum +4)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                   console.log("diagonalUp win, " + currentPlayer)
                   return true
               }
        }
    }
    return false
}

function diagonalDownWin (boardModel) {
    for(let rowNum=0; rowNum<3; rowNum++){
        for(let colNum=0; colNum<4; colNum++){
            if(boardModel[rowNum][colNum] === boardModel[rowNum+1][colNum+1] && 
               boardModel[rowNum][colNum] === boardModel[rowNum+2][colNum+2] &&
               boardModel[rowNum][colNum] === boardModel[rowNum+3][colNum+3] &&
               boardModel[rowNum][colNum] !== null){
                document.getElementById((rowNum + 1) + '-' + (colNum + 1)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                document.getElementById((rowNum + 2) + '-' + (colNum +2)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                document.getElementById((rowNum + 3) + '-' + (colNum +3)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                document.getElementById((rowNum + 4) + '-' + (colNum +4)).style.boxShadow = 'inset 0 0 15px whitesmoke'
                   console.log("diagonalUp win, " + currentPlayer)
                   return true
               }
        }
    }
    return false
}

function checkWinningCondition (boardModel) {
    
    if (verticalWin(boardModel) === true) {
        gameOver = true
        return
    }

    if (horizontalWin(boardModel) === true) {
        gameOver = true
        return
    }

    if (diagonalUpWin(boardModel) === true) {
        gameOver = true
        return
    }

    if (diagonalDownWin(boardModel) === true) {
        gameOver = true
        return
    }

    
}

function restart(evt)
{
    console.log(evt.target)
    location.reload()
}

const colClickHandler = function (evt) {
    
    let selectorNodes = document.querySelectorAll('.selector.red-selector')
    
    if (columnIsFull(evt)){
        return
    }
    
    if (gameOver) {
        return
    }

    
    
    addDisc(evt)
    checkWinningCondition(boardModel)
    if (currentPlayer === "red") {
        if (gameOver) {
            newMessage.innerHTML = currentPlayer.toUpperCase() + ' WINS!!!'
            document.getElementById('message').style.color = 'red'
            // restart()
            return
        }
        currentPlayer = "black"
        newMessage.innerHTML = "Player 2's Turn"
        for (let count = 0; count < selectorNodes.length; count++) {
            selectorNodes[count].classList.replace('red-selector', 'black-selector')
        }
    } else {
        if (gameOver) {
            newMessage.innerHTML = currentPlayer.toUpperCase() + ' WINS!!!'
            // restart()
            return
        }
        currentPlayer = "red"
        newMessage.innerHTML = "Player 1's Turn"
        selectorNodes = document.querySelectorAll('.selector.black-selector')
        for (let count = 0; count < selectorNodes.length; count++) {
            selectorNodes[count].classList.replace('black-selector', 'red-selector')
        }
    }
    
    if (numberOfDiscs === 42) {
        gameOver = true
        newMessage.innerHTML = "THIS ROUND IS A TIE!"
        // console.log()
        for (let count = 0; count < 42; count++) {
            document.querySelectorAll('.disc')[count].style.boxShadow = 'inset 0 0 15px whitesmoke'
        }
        // restart()
        return
    }
}

const setUpEventListener = function () {
    document.querySelector('#selector1').addEventListener('click', colClickHandler) 
    document.querySelector('#selector2').addEventListener('click', colClickHandler)
    document.querySelector('#selector3').addEventListener('click', colClickHandler)
    document.querySelector('#selector4').addEventListener('click', colClickHandler)
    document.querySelector('#selector5').addEventListener('click', colClickHandler)
    document.querySelector('#selector6').addEventListener('click', colClickHandler)
    document.querySelector('#selector7').addEventListener('click', colClickHandler)
    document.querySelector('#reset-button').addEventListener('click', restart)
}

const initializeGame = function () {
    setUpEventListener()
}

initializeGame()

function testFourInARow () {
    let result = 
    console.assert(result === true, {
        "first column vertical win": 
    })

}