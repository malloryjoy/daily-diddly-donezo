// Given a string representing a math equation, determine whether it is correct.

// The left side may contain up to three positive integers and the operators +, -, *, and /.
// The equation will be given in the format: "number operator number = number" (with two or three numbers on the left). For example: "2 + 2 = 4" or "2 + 3 - 1 = 4".
// The right side will always be a single integer.
// Follow standard order of operations: multiplication and division are evaluated before addition and subtraction, from left-to-right.

function isValidEquation(equation) {
    let myAnswer = false; //creates a checkable answer to determine correct answer 
    const index = equation.indexOf('='); //finds the index of the equal sign in the string
    const result = equation.substring(0, index); //splits the provided equation at the equal sign, creating a new value for JUST the equation without the answer
    let correct = eval(result); //gets the solution of the provided equation
    //console.log(correct); confirms the correct answer 
    const char = "="; //gets the = sign as a character 
    const secondResult = parseInt(equation.slice(equation.indexOf(char) + 1)) // creates a variable that creates an integer of the number after the equal sign; ie the provided answer of/within the equation string
    //console.log(secondResult); confirms that the value provided in the string is the value of secondResult
    if (correct == secondResult){ //creates if/else statement to confirm that the calculated answer of the equation is the same as the answer provided WITHIN the equation
      myAnswer = true; //returns true if the answer provided and the answer calculated are the same 
    } else{
      myAnswer = false; //returns false if the answer provided and the answer calculated are different
    }
    console.log(myAnswer); //confirms answer is correct
    return myAnswer; //returns the correct answer 
  }
  
  
  isValidEquation("2 + 2 = 4") //should return true.
  isValidEquation("2 + 3 - 1 = 4") //should return true.
  isValidEquation("8 / 2 = 4") //should return true.
  isValidEquation("10 * 5 = 50") //should return true.
  isValidEquation("2 - 2 = 0") //should return true.
  isValidEquation("2 + 9 / 3 = 5") //should return true.
  isValidEquation("20 - 2 * 3 = 14") //should return true.
  isValidEquation("2 + 5 = 6") //should return false.
  isValidEquation("10 - 2 * 3 = 24") //should return false.