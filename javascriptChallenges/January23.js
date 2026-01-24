/*Given a string, determine whether it is a valid CSS hex color. A valid CSS hex color must:

Start with a #, and
be followed by either 3 or 6 hexadecimal characters.
Hexadecimal characters are numbers 0 through 9 and letters a through f (case-insensitive). */



function isValidHex(str) {
  
    const array = str.split(""); //place characters in provided test string in an array
    //console.log(array);
  
   
  
    const regexp = /^[0-9a-fA-F]+$/; //declares regex; character checker to make sure characters are alphanumeric
  
  
   
  
    let hexCheck = ""; //create empty string 
  const checkhex = (array) => { //declares variable to check each character of array 
    array.forEach((item) => {
      if (regexp.test(item)) { //for each item in the array, check if the value is alphanumeric 
        hexCheck += 'y'; //if  it is alphanumeric, add a y value to the empty string 
      } else {
        hexCheck+= 'n'; //if it is NOT alphanumeric, add a n value to the empty string 
      }
    });
    return hexCheck; //return converted array/search completed string
  };
  
  checkhex(array) //perform this test on the array created from the string
  
    console.log(hexCheck);
    let charToRemove = /n/g; // Regular expression with global flag
    let newString = hexCheck.replace(charToRemove, "") // create new string after replacing any "ns in the developed string"
    console.log(newString);

  
  
  
  if ((newString === "yyyyyy" || newString ==="yyy") && (array[0] == "#") && (!str.includes(' '))){ //sets if statement for if the newstring is either 3 y's or 6y's, as well as if the first value in the array is a hashtag, and whether or not the string has a space in it --making it invalid.
    console.log(true) 
    return true; //returns true if the test string could be a hex code
  } else {
    console.log(false)
    return false; //returns false if the test string is not a hex code 
  }
  

  }
  
  isValidHex("#123") 
  isValidHex("#123abc")
  isValidHex("#ABCDEF")
  isValidHex("#0a1B2c")
  isValidHex("#12G")
  isValidHex("#1234567")
  isValidHex("#12 3")
  isValidHex("fff")