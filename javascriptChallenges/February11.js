// Given an array of judge scores and optional penalties, calculate the final score for a figure skating routine.

// The first argument is an array of 10 judge scores, each a number from 0 to 10. Remove the highest and lowest judge 
// scores and sum the remaining 8 scores to get the base score.

// Any additional arguments passed to the function are penalties. Subtract all penalties from the base score to get the 
// final score.




function computeScore(judgeScores, ...penalties) {
    let sortScores = judgeScores.sort((a, b) => b - a);
    //console.log(sortScores)
    //new array from sorting all the judgeScores, and then remove the first and the last one 
    let newScores = sortScores.slice(1);
    //console.log(newScores)
    let realNewScores = newScores.slice(0,-1)
    //console.log(realNewScores)
    const sum = realNewScores.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0)
    //console.log(sum)
    const penaltyTotal = penalties.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let finalScores = sum - penaltyTotal;
    console.log(finalScores)
    return finalScores;
  }
  
  computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1) //should return 64
  
  computeScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) //should return 80.
  computeScore([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1) //should return 67.
  computeScore([8.0, 8.5, 9.0, 8.5, 9.0, 8.0, 9.0, 8.5, 9.0, 8.5], 0.5, 1.0) //should return 67.5.
  computeScore([6.0, 8.5, 7.0, 9.0, 7.5, 8.0, 6.5, 9.5, 7.0, 8.0], 1.5, 0.5, 0.5) //should return 59.