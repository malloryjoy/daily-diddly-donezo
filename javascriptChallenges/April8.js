// Given an array of sequential integers, with multiples of 3 and 5 replaced, determine if it's a valid FizzBuzz sequence.

// In a valid FizzBuzz sequence:

// Multiples of 3 are replaced with "Fizz".
// Multiples of 5 are replaced with "Buzz".
// Multiples of both 3 and 5 are replaced with "FizzBuzz".
// All other numbers remain as integers.

function isFizzBuzz(arr) {


    
    let start = null; // create blank starting value 
  
  
    for (let i = 0; i < arr.length; i++) { //create loop for each item in the array
      if (typeof arr[i] === "number") { //check to determine if each item is a number type
        start = arr[i] - i; //change value of blank array to be the value of the number in the array, minus 1
        break; //stop loop after all numbers have been created 
      }
    }
  

    if (start === null) { //if statement declaring that if there are no numbers, the statement is in valid 
      return false; 
    }
  

    for (let i = 0; i < arr.length; i++) { //new loop to find the expected numbers within the array 
  
  
      let expectedNumber = start + i; //declares variable for the starting number + the proceeding array integer 
      let expectedValue;  //creates blank variable for the expected value of the corresponding integer 
  

      if (expectedNumber % 15 === 0) { //if then statement to confirm the corresponding string values 
        expectedValue = "FizzBuzz";
      } else if (expectedNumber % 3 === 0) {
        expectedValue = "Fizz";
      } else if (expectedNumber % 5 === 0) {
        expectedValue = "Buzz";
      } else {
        expectedValue = expectedNumber;
      }

      if (arr[i] !== expectedValue) { //if statement to clarify that if the value of an array item is not the expected corresponding value, the array is invalid
        return false;
      }
    }
  
  
    return true; //declares true if all conditions are met 
  }
  
  
  
  
  isFizzBuzz([1, 2, "Fizz", 4, "Buzz"]) //should return true.
  isFizzBuzz([13, 14, "FizzBuzz", 16, 17]) //should return true.
  isFizzBuzz([1, 2, "Fizz", 4, 5]) //should return false.
  isFizzBuzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]) //should return true.
  isFizzBuzz([1, 2, "Fizz", "Buzz", 5]) //should return false.
  isFizzBuzz([97, 98, "Buzz", "Fizz", 101, "Fizz", 103]) //should return false.
  isFizzBuzz(["Fizz", "Buzz", 101, "Fizz", 103, 104, "FizzBuzz"]) //should return true.
  
  