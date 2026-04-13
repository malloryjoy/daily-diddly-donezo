// Given a full name as a string, return their initials.

// Names to initialize are separated by a space.
// Initials should be made uppercase.
// Initials should be separated by dots.
// For example, "Tommy Millwood" returns "T.M.".


function getInitials(name) {
    let initialArray = name.split(" ")
    //console.log(initialArray)
    const firstChars = initialArray.map(item => item[0]);
    //console.log(firstChars)
    const ourInitials = firstChars.join(".")
    //console.log(ourInitials)
    const finalInitials = ourInitials + '.'
    console.log(finalInitials)
    return finalInitials;
  }
  
  
  getInitials("Tommy Millwood") //should return "T.M.".
  getInitials("Savanna Puddlesplash") //should return "S.P.".
  getInitials("Frances Cowell Conrad") //should return "F.C.C.".
  getInitials("Dragon") //should return "D.".
  getInitials("Dorothy Vera Clump Haverstock Norris") //should return "D.V.C.H.N.".