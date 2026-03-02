//Given an array, determine if it is flat.

//An array is flat if none of its elements are arrays.


function isFlat(arr) {
    const hasNested = arr.some(element => Array.isArray(element));
  //console.log(hasNested); 
  let myAnswer = "";
  if (hasNested){
    myAnswer = false;
  } else{
    myAnswer = true;
  };
   console.log(myAnswer);
   return myAnswer
    
  }
  
  
  isFlat([1, 2, 3, 4]) //should return true.
  isFlat([1, [2, 3], 4]) //should return false.
  isFlat([1, 0, false, true, "a", "b"]) //should return true.
  isFlat(["a", [0], "b", true]) //should return false.
  isFlat([1, [2, [3, [4, [5]]]], 6]) //should return false