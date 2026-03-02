// Given a string, return the sum of its letters.

// Letters are A-Z in uppercase or lowercase
// Letter values are: "A" = 1, "B" = 2, ..., "Z" = 26
// Uppercase and lowercase letters have the same value.
// Ignore all non-letter characters.

function sumLetters(str) {
    const cleanedText = str.toLowerCase().replace(/[^a-z]/g, ''); //creates new string without special characters or spaces 
    const positions = [...cleanedText].map(char => { //creates an array, with the array items consisting of the letters in the new 
    //string, converted to their ASCII numeric value 
      return char.charCodeAt(0) - 96; //converts the ASCII value to the corresponding alphanumeric value (a=1, b=2, c=3, etc.)
    });
    //console.log(positions); confirms that the array has been created  with the correct corresponding alphanumeric conversions
    let finalAnswer = positions.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //sums up all values in the array
    console.log(finalAnswer); //confirms the correct answer 
    return finalAnswer; //returns the final answer 
  }
  
  
  
  sumLetters("Hello") //should return 52
  sumLetters("freeCodeCamp") //should return 94.
  sumLetters("The quick brown fox jumps over the lazy dog.") //should return 473.
  sumLetters("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci.") //should return 1681.
  sumLetters("</404>") //should return 0.