// Given a string, return the letter from the string that appears last in the alphabet.

// If two or more letters tie for the last in the alphabet, return the first one.
// Ignore all non-letter characters.

function getLastLetter(str) {
    const cleanedStr = str.replace(/[^a-zA-Z]/g, "") //creates a string that filters out non-letters
    //console.log(cleanedStr), confirms string has only letters 
    let theLetter = ""; //creates blank variable to hold correct answer 
    if ((cleanedStr.match(/[A-Z]/g) || []).length > 1) { //if else statement depending on if the string has more than two capital letters
      let sorted = cleanedStr.replace(/\p{Ll}/gu, "") //replaces lowercase letters so only the capital letters are available for comparison
      //console.log(sorted), confirms string only has capital letters
      let conLetter = [...sorted].map(c => c.charCodeAt(0) - 64) //creates array that converts each letter in the string to the corresponding numerical value 
      //console.log(conLetter), confirms array was generated correctly 
      let largeNum = Math.max(...conLetter) //creates variable that holds the largest number in the array
      let theLetter = String.fromCharCode(64+largeNum) //converts that letter into the corresponding capital letter 
      console.log(theLetter) //confirms the correct answer 
      return theLetter //returns the correct answer 
    } else{
      let conLetter = [...cleanedStr].map(c => c.charCodeAt(0)- 96) //creates array that converts each letter in the string to the corresponding numerical value 
      //console.log(conLetter), confirms array was generated correctly 
      let largeNum = Math.max(...conLetter) //creates variable that holds the largest number in the array 
      let theLetter = String.fromCharCode(96+largeNum) //converts that letter into the corresponding lowercase letter 
      console.log(theLetter) //confirms the correct answer 
      return theLetter //returns the correct answer 
     
    }
    
  }
  
  
  getLastLetter("world") //should return "w".
  getLastLetter("Hello World") //should return "W".
  getLastLetter("The quick brown fox jumped over the lazy dog.") //should return "z".
  getLastLetter("HeLl0") //should return "L".
  getLastLetter("!#$ er@R asd fT.,> 2t0e9") //should return "T".