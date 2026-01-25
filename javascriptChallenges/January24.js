/*Given a number, return the bingo letter associated with it (capitalized). Bingo numbers are grouped as follows:

Letter	Number Range
"B"	1-15
"I"	16-30
"N"	31-45
"G"	46-60
"O"	61-75 */


function getBingoLetter(n) { //declare function to solve problem 
    let ntoL=""; //declare value that will host answer 
    if (n >= 1  && n <= 15){ //if-else statement for each letter based on the number 
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
      ntoL = "Error"; //catches errors 
    }
    console.log(n + ":" + ntoL); //tests and confirms function works!
    return ntoL; //returns answer 
  }
  
  getBingoLetter(75) //should return "O".
  getBingoLetter(54) //should return "G"
  getBingoLetter(25) //should return "I"
  getBingoLetter(38) //should return "N"
  getBingoLetter(11) //should return "B"