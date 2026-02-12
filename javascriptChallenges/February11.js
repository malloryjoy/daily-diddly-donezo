// Given an array of judge scores and optional penalties, calculate the final score for a figure skating routine.

// The first argument is an array of 10 judge scores, each a number from 0 to 10. Remove the highest and lowest judge 
// scores and sum the remaining 8 scores to get the base score.

// Any additional arguments passed to the function are penalties. Subtract all penalties from the base score to get the 
// final score.




function computeScore(judgeScores, ...penalties) {
    let sortScores = judgeScores.sort((a, b) => b - a); //sorts scores from highest to lowest
    //console.log(sortScores), to check the scores are in the right place
    let newScores = sortScores.slice(1); //Creates an array that removes the first value in the array
    //console.log(newScores), to check the right array values populate
    let realNewScores = newScores.slice(0,-1) //creates new array that removes the lowest score 
    //console.log(realNewScores), checks the new array has the right values 
    const sum = realNewScores.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0) //value of all the array values added together 
    //console.log(sum), confirms the right sum value
    const penaltyTotal = penalties.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //creates variable that sums up all penalty values 
    let finalScores = sum - penaltyTotal; //creates value of sum of scores minus the penalty total
    console.log(finalScores) //checks the right answer was generated
    return finalScores; //returns the correct aswer
  }
  
  computeScore([10, 8, 9, 6, 9, 8, 8, 9, 7, 7], 1) //should return 64
  
  computeScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) //should return 80.
  computeScore([10, 8, 9, 10, 9, 8, 8, 9, 10, 7], 1, 2, 1) //should return 67.
  computeScore([8.0, 8.5, 9.0, 8.5, 9.0, 8.0, 9.0, 8.5, 9.0, 8.5], 0.5, 1.0) //should return 67.5.
  computeScore([6.0, 8.5, 7.0, 9.0, 7.5, 8.0, 6.5, 9.5, 7.0, 8.0], 1.5, 0.5, 0.5) //should return 59.