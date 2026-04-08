// Given an array of sequential integers, with multiples of 3 and 5 replaced, determine if it's a valid FizzBuzz sequence.

// In a valid FizzBuzz sequence:

// Multiples of 3 are replaced with "Fizz".
// Multiples of 5 are replaced with "Buzz".
// Multiples of both 3 and 5 are replaced with "FizzBuzz".
// All other numbers remain as integers.

function isFizzBuzz(arr) {


    
    let start = null;
  
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        start = arr[i] - i;
        break;
      }
    }
  

    if (start === null) {
      return false;
    }
  

    for (let i = 0; i < arr.length; i++) {
  
  
      let expectedNumber = start + i;
      let expectedValue;
  

      if (expectedNumber % 15 === 0) {
        expectedValue = "FizzBuzz";
      } else if (expectedNumber % 3 === 0) {
        expectedValue = "Fizz";
      } else if (expectedNumber % 5 === 0) {
        expectedValue = "Buzz";
      } else {
        expectedValue = expectedNumber;
      }

      if (arr[i] !== expectedValue) {
        return false;
      }
    }
  
  
    return true;
  }
  
  
  
  
  isFizzBuzz([1, 2, "Fizz", 4, "Buzz"]) //should return true.
  isFizzBuzz([13, 14, "FizzBuzz", 16, 17]) //should return true.
  isFizzBuzz([1, 2, "Fizz", 4, 5]) //should return false.
  isFizzBuzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]) //should return true.
  isFizzBuzz([1, 2, "Fizz", "Buzz", 5]) //should return false.
  isFizzBuzz([97, 98, "Buzz", "Fizz", 101, "Fizz", 103]) //should return false.
  isFizzBuzz(["Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz"]) //should return true.
  
  