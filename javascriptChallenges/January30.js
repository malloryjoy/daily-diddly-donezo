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

function findPawnMoves(position) {
    let chessSpot = position.split("")
    //console.log(chessSpot)
    let pawnMove = parseInt(chessSpot[1]);
    //console.log(pawnMove);
    let myPosition = [];
    if (pawnMove == 2){
      myPosition = [chessSpot[0]+3, chessSpot[0]+4]
    } else{
      myPosition = [chessSpot[0] + (pawnMove+1)]
    }
    console.log(myPosition);
    return myPosition;
  }
  
  findPawnMoves("D4"); //should return ["D5"]
  findPawnMoves("B2"); //should return ["B3", "B4"]
  findPawnMoves("A7") //should return ["A8"].
  findPawnMoves("G2") //should return ["G3", "G4"].
  findPawnMoves("E3") //should return ["E4"].