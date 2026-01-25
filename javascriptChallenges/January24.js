/*Given a number, return the bingo letter associated with it (capitalized). Bingo numbers are grouped as follows:

Letter	Number Range
"B"	1-15
"I"	16-30
"N"	31-45
"G"	46-60
"O"	61-75 */


function getBingoLetter(n) {
    let ntoL="";
    if (n >= 1  && n <= 15){
      ntoL = "B";
    } else if (n >= 16 && n <= 30){
      ntoL = "I";
    } else if (n >= 31 && n <= 45){
      ntoL = "N";
    } else if (n >= 46 && n <= 60){
      ntoL = "G";
    } else if (n >= 61 && n <= 75){
      ntoL = "O";
    } else {
      ntoL = "Error";
    }
    console.log(n + ":" + ntoL);
    return ntoL;
  }
  
  getBingoLetter(75) //should return "O".
  getBingoLetter(54) //should return "G"
  getBingoLetter(25) //should return "I"
  getBingoLetter(38) //should return "N"
  getBingoLetter(11) //should return "B"