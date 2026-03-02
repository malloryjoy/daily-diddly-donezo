// Given a string, return the sum of its letters.

// Letters are A-Z in uppercase or lowercase
// Letter values are: "A" = 1, "B" = 2, ..., "Z" = 26
// Uppercase and lowercase letters have the same value.
// Ignore all non-letter characters.

function sumLetters(str) {
    const cleanedText = str.toLowerCase().replace(/[^a-z]/g, '');
    const positions = [...cleanedText].map(char => {
      return char.charCodeAt(0) - 96;
    });
    //console.log(positions);
    let finalAnswer = positions.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(finalAnswer);
    return finalAnswer;
  }
  
  
  
  sumLetters("Hello") //should return 52
  sumLetters("freeCodeCamp") //should return 94.
  sumLetters("The quick brown fox jumps over the lazy dog.") //should return 473.
  sumLetters("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci.") //should return 1681.
  sumLetters("</404>") //should return 0.