/*Given an integer, return a string based on the following rules:

If the number is divisible by 3, return "Fizz".
If the number is divisible by 5, return "Buzz".
If the number is divisible by both 3 and 5, return "FizzBuzz".
Otherwise, return the given number as a string.*/ 

function fizzBuzzMini(n) {
    let FizzBo; 
    if (n%5==0 && n%3==0){
      FizzBo = "FizzBuzz";
    } else if (n%3 ==0 ){
      FizzBo = "Fizz";
    } else if (n%5 == 0) {
      FizzBo = "Buzz";
    } else {
      FizzBo = n.toString();
    }
    console.log(FizzBo)
    return FizzBo;
  }
  
  
  fizzBuzzMini(3) //should return "Fizz".
  fizzBuzzMini(4) //should return "4"
  fizzBuzzMini(35) //should return "Buzz".
  fizzBuzzMini(75) //should return "FizzBuzz"
  fizzBuzzMini(98) //should return "98"