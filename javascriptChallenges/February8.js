/*2026 Winter Games Day 3: Biathlon
Given an array of integers, where each value represents the number of targets hit in a single round of a biathlon, return the total penalty distance the athlete must ski.

Each round consists of 5 targets.
Each missed target results in a 150 meter penalty loop. */

function calculatePenaltyDistance(rounds) { //Created function with rounds 
    rounds.forEach(calcPen) //establishes forEach loop for each item in rounds array in which the calcPen function is applied 
    
    function calcPen(item, index, arr) { //takes the integer, its place in the array, and the array 
      arr[index] = (5 - item) * 150  //applies the provided math: subtract the number of targets hit from 5, and multiply that number by 150 to establish the total penalty distance
      //console.log(arr[index]), to confirm right numbers are calculated 
      
    } 
    //console.log(rounds), to confirm rounds array shows the right values 
    const penalty = rounds.reduce((acc, curr) => acc + curr, 0); //creates final penalty value in which the values in the rounds array are added together 
  console.log(penalty); //confirms that the returned value is correct 
  return penalty; //returns correct value 
}



calculatePenaltyDistance([4, 4]) //should return 300.
calculatePenaltyDistance([5, 5]) //should return 0.
calculatePenaltyDistance([4, 5, 3, 5]) //should return 450.
calculatePenaltyDistance([5, 4, 5, 5]) //should return 150.
calculatePenaltyDistance([4, 3, 0, 3]) //should return 1500.