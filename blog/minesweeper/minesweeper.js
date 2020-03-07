document.addEventListener('DOMContentLoaded', startGame)

var board = {
  
  cells: [
    {
      row: 0, 
      col: 0,
      isMarked: true,
      isMine: true,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 0, 
      col: 1,
      isMarked: true,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 0, 
      col: 2,
      isMarked: true,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 0, 
      col: 3,
      isMarked: true,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 1, 
      col: 0,
      isMarked: true,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 1, 
      col: 1,
      isMarked: true,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 1, 
      col: 2,
      isMarked: true,
      isMine: true,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 1, 
      col: 3,
      isMarked: true,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 2, 
      col: 0,
      isMarked: true,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 2, 
      col: 1,
      isMarked: true,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 2, 
      col: 2,
      isMarked: true,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 2, 
      col: 3,
      isMarked: true,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 3, 
      col: 0,
      isMarked: true,
      isMine: true,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 3, 
      col: 1,
      isMarked: true,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 3, 
      col: 2,
      isMarked: true,
      isMine: false,
      hidden: true,
      surroundingMines: 0
    }, 
    {
      row: 3, 
      col: 3,
      isMarked: true,
      isMine: true,
      hidden: true,
      surroundingMines: 0
    }
  ]
  
} 

function startGame () {

  for (var i = 0; i < board.cells.length; i++) {

    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
    
  }

  document.addEventListener("click", checkForWin)
  document.addEventListener("contextmenu", checkForWin)

  lib.initBoard()
}

function checkForWin () {

  for (var i = 0; i < board.cells.length; i++) {

      if (board.cells[i].isMine === false && board.cells[i].isMarked === true) {
        return
      }
      if (board.cells[i].isMine === true && board.cells[i].hidden === false) {
        return
      }
      
    }
  
  lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  
  var count = 0

  var surrounding = lib.getSurroundingCells(cell.row, cell.col);

  for (var i = 0; i < surrounding.length; i++) {

    if (surrounding[i].isMine === true) {
      count ++ 
    } 
  }

  return count

} 
