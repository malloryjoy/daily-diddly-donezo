// Given a bingo number, return the next bingo number sequentially.

// A bingo number is a single letter followed by a number in its range according to this chart:

// Letter	Number Range
// "B"	1-15
// "I"	16-30
// "N"	31-45
// "G"	46-60
// "O"	61-75
// For example, given "B10", return "B11", the next bingo number. If given the last bingo number, return "B1".

function getNextBingoNumber(n) {

    let bingArray = n.split("")
    let bingValue = bingArray[1] + bingArray[2]
    //console.log(bingArray)
    //console.log(bingValue)
    let myNum = parseInt(bingValue) + 1
    //console.log(myNum)
    let nextLetter = bingArray[0] +myNum
    if (myNum > 1 && myNum <= 15){
      nextLetter = `B${myNum}`
    } else if (myNum >= 16 && myNum <=30){
      nextLetter = `I${myNum}`
    } else if (myNum >= 31 && myNum <=45){
      nextLetter = `N${myNum}`
    } else if (myNum >= 46 && myNum <= 60){
      nextLetter = `G${myNum}`
    } else if (myNum >= 61 && myNum <=75){
      nextLetter = `O${myNum}`
    } else if (myNum > 75){
      nextLetter = `B1`
    }
    
    
    console.log(nextLetter)
    return nextLetter;
  }
  
  
  getNextBingoNumber("B10") //should return "B11".
  getNextBingoNumber("N33") //should return "N34".
  getNextBingoNumber("I30") //should return "N31".
  getNextBingoNumber("G60") //should return "O61".
  getNextBingoNumber("O75") //should return "B1".