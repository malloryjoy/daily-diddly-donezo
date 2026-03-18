// Given an array of strings representing chess pieces you still have on the board, calculate the value of the pieces your opponent has captured.

// In chess, you start with 16 pieces:

// Piece	Abbreviation	Quantity	Value
// Pawn	"P"	8	1
// Rook	"R"	2	5
// Knight	"N"	2	3
// Bishop	"B"	2	3
// Queen	"Q"	1	9
// King	"K"	1	0
// The given array will only contain the abbreviations above.
// Any of the 16 pieces not included in the given array have been captured.
// Return the total value of all captured pieces, unless...
// If the King has been captured, return "Checkmate".


function getCapturedValue(pieces) {
    let answer = "";
    if (!pieces.includes("K")){
      answer = "Checkmate"
    } else {
    pieces.forEach((item, index) => {
      if (item === "P") {
          pieces[index] = 1;
      } else if (item ==="R" ){
        pieces[index] = 5;
      } else if (item ==="N" || item ==="B"){
        pieces[index] = 3;
      } else if (item ==="Q"){
        pieces[index] = 9;
      } else if (item ==="K"){
        pieces[index] = 0;
      }
    })
    //console.log(pieces);
    const sum = pieces.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    //console.log(sum);
    answer = 39 - sum;
    }
    console.log(answer)
    return answer
  }
  
  
  getCapturedValue(["P", "P", "P", "P", "P", "P", "R", "R", "N", "B", "Q", "K"]) //should return 8.
  getCapturedValue(["P", "P", "P", "P", "P", "R", "B", "K"]) //should return 26.
  getCapturedValue(["K", "P", "P", "N", "P", "P", "R", "P", "B", "P", "N", "B"]) //should return 16.
  getCapturedValue(["P", "Q", "N", "P", "P", "B", "K", "P", "R", "R", "P", "P", "B", "P"]) //should return 4.
  getCapturedValue(["P", "K"]) //should return 38.
  getCapturedValue(["N", "P", "P", "B", "K", "P", "Q", "N", "P", "P", "R", "R", "P", "P", "P", "B"]) //should return 0.
  getCapturedValue(["N", "P", "P", "B", "P", "R", "Q", "P", "P", "P", "B"]) //should return "Checkmate".