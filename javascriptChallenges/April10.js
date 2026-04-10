// Given two strings for the location of two rooks on a chess board, determine if they can attack each other.

// A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). Rooks can move as many squares as they want in a horizontal or vertical direction. So if they are on the same row or column, they can attack each other.

function rookAttack(rook1, rook2) {
    let rook1Array = rook1.split("")
    let rook2Array = rook2.split("")
    let isChess = true
    //console.log(rook1Array)
    //console.log(rook2Array)
    if (rook1Array[0] == rook2Array[0] || rook1Array[1] == rook2Array[1]){
      isChess = true;
    } else{
      isChess = false;
    }
    console.log(isChess)
    return isChess
  }