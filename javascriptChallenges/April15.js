// Given an array of integers, return a new array using the following rules:

// Sort the integers in ascending order
// Then swap all values whose index is a multiple of 3 with the value before it.


function sortAndSwap(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    for (let i = 3; i < sorted.length; i += 3) {
      [sorted[i], sorted[i - 1]] = [sorted[i - 1], sorted[i]];
    }
    console.log(sorted)
    return sorted
  }