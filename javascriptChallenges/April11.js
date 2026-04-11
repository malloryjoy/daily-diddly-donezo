function rookBishopAttack(rook, bishop) {
    let rookArray = rook.split("") //splits rook position into an array by character 
    let bishopArray = bishop.split("") //splits bishop position into an array by character 
    let chessMove = ""; //creates blank variable to hold answer 
    const convertRook = rookArray.map((item, index) => index === 0 ? rookArray[0].charCodeAt(0) - 64 : item); //converts letter in array[0] to corresponding alphanumeric letter (rook)
    const convertBishop = bishopArray.map((item, index) => index === 0 ? bishopArray[0].charCodeAt(0) - 64 : item); //converts letter in array[0] to corresponding alphanumeric letter (bishop)
    let convertedRook = convertRook[0] //holds the new numeric value 
    let convertedBishop = convertBishop[0] //holds the new numeric value
    //console.log(convertRook) confirms correct Rook array
    //console.log(convertBishop) confirms correct Bishop array
    if (rookArray[0] == bishopArray[0] || rookArray[1] == bishopArray[1]){
      chessMove = "rook"
    } else if (Math.abs(convertedRook - convertedBishop) === Math.abs(convertRook[1] - convertBishop[1])){
      chessMove = "bishop"
    } else {
      chessMove = "neither"
    }
    console.log(chessMove)
    return chessMove;
  }
  
  rookBishopAttack("A1", "A5") //should return "rook".
  rookBishopAttack("C3", "F6") //should return "bishop".
  rookBishopAttack("D4", "D7") //should return "rook".
  rookBishopAttack("B7", "H1") //should return "bishop".
  rookBishopAttack("B3", "C5") //should return "neither"
  rookBishopAttack("G3", "E8") //should return "neither"