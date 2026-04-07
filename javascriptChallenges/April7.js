// Palindrome Characters
// Given a string, determine if it's a palindrome and return the middle character (if it's odd length) or middle two characters (if it's even).

// A palindrome is a string that is the same forward and backward.
// If it's not a palindrome, return "none".


function palindromeLocator(str) {
    const reversed = str.split("").reverse().join("");
    //console.log(reversed);
    let myAnswer = "";
    if (reversed !== str){
      myAnswer = "none"
    } else{
      const length = str.length;
      const middleIndex = Math.floor(length / 2);
      if (length % 2 !== 0) {
      
      myAnswer = str[middleIndex]; 
    } else {
      myAnswer = str[middleIndex - 1] + str[middleIndex];
    }
    }
    console.log(myAnswer)
    return myAnswer;
  }
  
  
  palindromeLocator("racecar") //should return "e".
  palindromeLocator("level") //should return "v".
  palindromeLocator("freecodecamp") //should return "none".
  palindromeLocator("noon") //should return "oo".
  palindromeLocator("11100111") //should return "00".