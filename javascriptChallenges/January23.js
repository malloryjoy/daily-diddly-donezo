/*Given a string, determine whether it is a valid CSS hex color. A valid CSS hex color must:

Start with a #, and
be followed by either 3 or 6 hexadecimal characters.
Hexadecimal characters are numbers 0 through 9 and letters a through f (case-insensitive). */



function isValidHex(str) {
  
    const array = str.split("");
    //console.log(array);
  
    //console.log(array[0])
    //console.log(array.length)
  
    const regexp = /^[0-9a-fA-F]+$/;
  
    function is_hexadecimal(array)
  {
   regexp = /^[0-9a-fA-F]+$/;
    
          if (regexp.test(array))
            {
              console.log("TRUE");
              return true;
            }
          else
            {
              console.log("FALSE");
              return false;
            }
  }
    
  
   
  
    let hexCheck = "";
  const checkhex = (array) => {
    array.forEach((item) => {
      if (regexp.test(item)) {
        hexCheck += 'y';
      } else {
        hexCheck+= 'n';
      }
    });
    return hexCheck;
  };
  
  checkhex(array)
  //console.log(hexCheck)
  
  let originalString = hexCheck;
  //console.log(hexCheck);
  let charToRemove = /n/g; // Regular expression with global flag
  let newString = originalString.replace(charToRemove, "")
  //console.log(newString);
  
  
  
  if ((newString === "yyyyyy" || newString ==="yyy") && (array[0] == "#") && (!str.includes(' '))){
    console.log(true)
    return true; 
  } else {
    console.log(false)
    return false;
  }
  
    /*if (array.length == 6 && array[0] == "#" && hexCheck ){
      console.log("Yay!")
    } else {
      console.log("No!")
    } */
    
    /*let coleur="";
      if () {
        coleur = true
      } else{
        coleur = false
      }
    return coleur;*/
  }
  
  isValidHex("#123") 
  isValidHex("#123abc")
  isValidHex("#ABCDEF")
  isValidHex("#0a1B2c")
  isValidHex("#12G")
  isValidHex("#1234567")
  isValidHex("#12 3")
  isValidHex("fff")