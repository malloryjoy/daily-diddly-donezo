/*2026 Winter Games Day 3: Biathlon
Given an array of integers, where each value represents the number of targets hit in a single round of a biathlon, return the total penalty distance the athlete must ski.

Each round consists of 5 targets.
Each missed target results in a 150 meter penalty loop. */

function calculatePenaltyDistance(rounds) {
    rounds.forEach(calcPen) 
    
    function calcPen(item, index, arr) {
      arr[index] = (5 - item) * 150 
      //console.log(arr[index])
      
    } 
    //console.log(rounds)
    const penalty = rounds.reduce((acc, curr) => acc + curr, 0);
  console.log(penalty);
  return penalty;
}



calculatePenaltyDistance([4, 4]) //should return 300.
calculatePenaltyDistance([5, 5]) //should return 0.
calculatePenaltyDistance([4, 5, 3, 5]) //should return 450.
calculatePenaltyDistance([5, 4, 5, 5]) //should return 150.
calculatePenaltyDistance([4, 3, 0, 3]) //should return 1500.