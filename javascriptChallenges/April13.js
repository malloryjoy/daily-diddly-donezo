// Given a full name as a string, return their initials.

// Names to initialize are separated by a space.
// Initials should be made uppercase.
// Initials should be separated by dots.
// For example, "Tommy Millwood" returns "T.M.".


function getInitials(name) {
    let initialArray = name.split(" ") // separate name into items in an array
    //console.log(initialArray), confirms array was created correctly
    const firstChars = initialArray.map(item => item[0]); //creates new array using only the first characters of each item in the array
    //console.log(firstChars), confirms array was created correctly
    const ourInitials = firstChars.join(".") //creates answer in the form of a string, merging the items in the array with a "."
    //console.log(ourInitials), confirms correct string was generated 
    const finalInitials = ourInitials + '.' //creates answer of the generated string with a final "."
    console.log(finalInitials) // confirms correct answer 
    return finalInitials; // returns correct answer 
  }
  
  
  getInitials("Tommy Millwood") //should return "T.M.".
  getInitials("Savanna Puddlesplash") //should return "S.P.".
  getInitials("Frances Cowell Conrad") //should return "F.C.C.".
  getInitials("Dragon") //should return "D.".
  getInitials("Dorothy Vera Clump Haverstock Norris") //should return "D.V.C.H.N.".