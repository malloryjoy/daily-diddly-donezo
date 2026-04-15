// Given an array of integers, return a new array using the following rules:

// Sort the integers in ascending order
// Then swap all values whose index is a multiple of 3 with the value before it.


function sortAndSwap(arr) {
    const sorted = [...arr].sort((a, b) => a - b); //creates variable that sorts the array in numerical order 
    for (let i = 3; i < sorted.length; i += 3) {  //for loop applied to each item in the array, setting i as 3 to start, to loop through the length of the sorted array, going up by 3 
      [sorted[i], sorted[i - 1]] = [sorted[i - 1], sorted[i]]; //reorders array items divisible by 3 to be flipped with the array item after to be the item before it 
    }
    console.log(sorted) // logs to confirm correct answer 
    return sorted // returns correct answer 
  }

sortAndSwap([3, 1, 2, 4, 6, 5]) //should return [1, 2, 4, 3, 5, 6].
sortAndSwap([9, 7, 5, 3, 1, 2, 4, 6, 8]) //should return [1, 2, 4, 3, 5, 7, 6, 8, 9].
sortAndSwap([1, 2, 3, 4, 5, 6, 7, 8, 9]) //should return [1, 2, 4, 3, 5, 7, 6, 8, 9].
sortAndSwap([12, 5, 8, 1, 3, 10, 2, 7, 6, 4, 9, 11]) //should return [1, 2, 4, 3, 5, 7, 6, 8, 10, 9, 11, 12].
sortAndSwap([100, -50, 0, 75, -25, 50, -75, 25]) //should return [-75, -50, 0, -25, 25, 75, 50, 100].
sortAndSwap([5, 9, 13, 77, 88, 313, -10, -65, 0, 8, 99, 101, -4, 2]) //should return [-65, -10, 0, -4, 2, 8, 5, 9, 77, 13, 88, 101, 99, 313].