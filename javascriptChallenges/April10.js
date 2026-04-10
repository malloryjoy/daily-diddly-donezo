// Given two strings for the location of two rooks on a chess board, determine if they can attack each other.

// A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). Rooks can move as many squares as they want in a horizontal or vertical direction. So if they are on the same row or column, they can attack each other.

function rookAttack(rook1, rook2) {
    let rook1Array = rook1.split("") // Splits rook1 into an array by character
    let rook2Array = rook2.split("") // Splits rook1 into an array by character
    let isChess = true // creates default boolean value for determining if the rooks can attack
    //console.log(rook1Array), confirms array was created correctly
    //console.log(rook2Array), confirms array was created correctly
    if (rook1Array[0] == rook2Array[0] || rook1Array[1] == rook2Array[1]){ //if else statement comparing the first and second values in the respective arrays, if either one are similar, they can attack
      isChess = true;
    } else{
      isChess = false;
    }
    console.log(isChess) //logs to confirm the correct answer 
    return isChess // returns the correct answer 
  }


rookAttack("A1", "A8") //should return true.
rookAttack("B4", "F4") //should return true.
rookAttack("E3", "D4") //should return false.
rookAttack("H7", "F6") //should return false.