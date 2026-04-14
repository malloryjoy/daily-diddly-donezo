// Given a string, return the letter from the string that appears last in the alphabet.

// If two or more letters tie for the last in the alphabet, return the first one.
// Ignore all non-letter characters.

function getLastLetter(str) {
    const cleanedStr = str.replace(/[^a-zA-Z]/g, "")
    //console.log(cleanedStr)
    let theLetter = "";
    if ((cleanedStr.match(/[A-Z]/g) || []).length > 1) {
      let sorted = cleanedStr.replace(/\p{Ll}/gu, "")
      //console.log(sorted)
      let conLetter = [...sorted].map(c => c.charCodeAt(0) - 64)
      //console.log(conLetter)
      let largeNum = Math.max(...conLetter)
      let theLetter = String.fromCharCode(64+largeNum)
      console.log(theLetter)
      return theLetter
    } else{
      let conLetter = [...cleanedStr].map(c => c.charCodeAt(0)- 96)
      //console.log(conLetter)
      let largeNum = Math.max(...conLetter)
      let theLetter = String.fromCharCode(96+largeNum)
      console.log(theLetter)
      return theLetter
     
    }
    
  }
  
  
  getLastLetter("world") //should return "w".
  getLastLetter("Hello World") //should return "W".
  getLastLetter("The quick brown fox jumped over the lazy dog.") //should return "z".
  getLastLetter("HeLl0") //should return "L".
  getLastLetter("!#$ er@R asd fT.,> 2t0e9") //should return "T".