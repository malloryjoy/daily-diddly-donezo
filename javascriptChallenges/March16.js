//Given two integers, determine if you can evenly divide the first one by the second one.

function isEvenlyDivisible(a, b) {
    let answer = ""; // Creates variable to hold the boolean true/false 
    if (a%b == 0 ){  // Sets up if/else that establishes a Boolean depending on the divisibility of the provided values
      answer = true;  // Establishes answer as true if the numbers are divisible 
    } else {
      answer = false; // Establishes answer as false if the numbers are not divisible 
    }
    console.log(answer) // Logs to confirm the correct answer 
    return answer; // Returns the correct answer 
  
}






isEvenlyDivisible(4, 2) //should return true.
isEvenlyDivisible(7, 3) //should return false
isEvenlyDivisible(5, 10) //should return false.
isEvenlyDivisible(48, 6) //should return true.
isEvenlyDivisible(3186, 9) //should return true.
isEvenlyDivisible(4192, 11) //should return false





