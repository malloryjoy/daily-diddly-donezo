//Given two integers, determine if you can evenly divide the first one by the second one.

function isEvenlyDivisible(a, b) {
    let answer = "";
    if (a%b == 0 ){
      answer = true;
    } else {
      answer = false;
    }
    console.log(answer)
    return answer;
 
}






isEvenlyDivisible(4, 2) //should return true.
isEvenlyDivisible(7, 3) //should return false
isEvenlyDivisible(5, 10) //should return false.
isEvenlyDivisible(48, 6) //should return true.
isEvenlyDivisible(3186, 9) //should return true.
isEvenlyDivisible(4192, 11) //should return false





