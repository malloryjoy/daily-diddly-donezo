/*Given the position of one of your pawns on a chessboard, return an array of all the valid squares it can move to in 
ascending order.

A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 
(bottom to top). 
For this challenge:

You are the player on the bottom of the board.
Pawns can only move one square "up".
Unless the pawn is in the starting row (row 2), then it can move one or two squares up.
For example, given "D4", return ["D5"], the only square your pawn can move to. Given "B2", return ["B3", "B4"], 
because it's on the starting row and needs to be in ascending order.

*/

function findPawnMoves(position) { //takes original position as a parameter 
    let chessSpot = position.split("") //splits position into an array
    console.log(chessSpot) //checks that chessSpot has split the pawn position correctly
    let pawnMove = parseInt(chessSpot[1]); //establishes pawnMove as the original position/number as an integer
    console.log(pawnMove);
    let myPosition = []; //checks that chessSpot has the correct value
    if (pawnMove == 2){ //if then statement for confirming chessSpot will return two  values if the pawn is in the second row
      myPosition = [chessSpot[0]+3, chessSpot[0]+4]
    } else{ //confirms that chessSpot will confirm just the first spot plus 1 
      myPosition = [chessSpot[0] + (pawnMove+1)]
    }
    console.log(myPosition); //confirms that the answer is correct
    return myPosition; //returns correct answer 
  }
  
  findPawnMoves("D4"); //should return ["D5"]
  findPawnMoves("B2"); //should return ["B3", "B4"]
  findPawnMoves("A7") //should return ["A8"].
  findPawnMoves("G2") //should return ["G3", "G4"].
  findPawnMoves("E3") //should return ["E4"].