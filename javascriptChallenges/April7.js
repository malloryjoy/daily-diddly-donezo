// Palindrome Characters
// Given a string, determine if it's a palindrome and return the middle character (if it's odd length) or middle two characters (if it's even).

// A palindrome is a string that is the same forward and backward.
// If it's not a palindrome, return "none".


function palindromeLocator(str) {
    const reversed = str.split("").reverse().join(""); //creates variable that reverses string
    //console.log(reversed); confirms string has been reversed 
    let myAnswer = ""; //creates blank variable to hold correct answer 
    if (reversed !== str){ //if else statement to determine if word provided is a palindrome 
      myAnswer = "none" //sets the correct answer as "none" if it is not a palindrome 
    } else{
      const length = str.length; //gets the number of characters in the palindrome 
      const middleIndex = Math.floor(length / 2); //creates a variable that holds the value of the length divided by 2
      if (length % 2 !== 0) { //if else statement to determine if there is an "even" split in the palindrome 
      
      myAnswer = str[middleIndex];  //if the palindrome is an even split, the answer is the index of the midway point of the string 
    } else {
      myAnswer = str[middleIndex - 1] + str[middleIndex]; //if the palindrome is not an even split, the answer is the index of the midway point of the string, minus 1, added to the midway point of the string
    }
    }
    console.log(myAnswer) //confirms correct answer 
    return myAnswer; //returns correct answer
  }
  
  
  palindromeLocator("racecar") //should return "e".
  palindromeLocator("level") //should return "v".
  palindromeLocator("freecodecamp") //should return "none".
  palindromeLocator("noon") //should return "oo".
  palindromeLocator("11100111") //should return "00".