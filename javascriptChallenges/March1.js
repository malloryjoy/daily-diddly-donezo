//Given an array, determine if it is flat.

//An array is flat if none of its elements are arrays.


function isFlat(arr) {
    const hasNested = arr.some(element => Array.isArray(element)); //determines if any of the items in an array are also an array
  //console.log(hasNested), logs whether or not arrays exist within the array
  let myAnswer = ""; //creates variable to hold correct answer 
  if (hasNested){ //if statement to place the status of arrays in a boolean
    myAnswer = false;
  } else{
    myAnswer = true;
  };
   console.log(myAnswer); //confirms correct answer
   return myAnswer //returns correct answer 
    
  }
  
  
  isFlat([1, 2, 3, 4]) //should return true.
  isFlat([1, [2, 3], 4]) //should return false.
  isFlat([1, 0, false, true, "a", "b"]) //should return true.
  isFlat(["a", [0], "b", true]) //should return false.
  isFlat([1, [2, [3, [4, [5]]]], 6]) //should return false