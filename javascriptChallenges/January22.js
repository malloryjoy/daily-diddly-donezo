/*Given an array of exam scores (numbers), return the average score in form of a letter grade according to 
the following chart:

Average Score	Letter Grade
97-100	        "A+"
93-96	        "A"
90-92	        "A−"
87-89	        "B+"
83-86	        "B"
80-82	        "B-"
77-79	        "C+"
73–76	        "C"
70-72	        "C-"
67-69	        "D+"
63-66	        "D"
60–62	        "D-"
below 60       	"F"

Calculate the average by adding all scores in the array and dividing by the total number of scores.


1. getAverageGrade([92, 91, 90, 94, 89, 93]) should return "A-".
2. getAverageGrade([84, 89, 85, 100, 91, 88, 79]) should return "B+".
3. getAverageGrade([63, 69, 65, 66, 71, 64, 65]) should return "D".
4. getAverageGrade([97, 98, 99, 100, 96, 97, 98, 99, 100]) should return "A+".
5. getAverageGrade([75, 100, 88, 79, 80, 78, 64, 60]) should return "C+".
6. getAverageGrade([45, 48, 50, 52, 100, 54, 56, 58, 59]) should return "F".

*/
function getAverageGrade(scores) {
    const scoreSum =  scores.reduce((a,b)=>a+b) //step 1: calculate sum of all array values added together

  console.log(scoreSum)  //ensure the scoreSum step worked
    const averageScore = Math.floor(scoreSum / scores.length); //step 2: determine mean (average) score by dividing the sum value by number of values. Round down this value to the nearest whole number for THIS specific challenge. **
  console.log(averageScore); //ensure the averageScore step worked 

  let letterGrade = "";  //declare the letterGrade value as a blank string variable
  if (averageScore >= 97  && averageScore <= 100){ //if/else statement for each corresponding letter grade by score value
     letterGrade = "A+";
  }
  else if (averageScore >= 93  && averageScore <= 96){
     letterGrade = "A";
  }
  if (averageScore >= 90  && averageScore <= 92){
     letterGrade = "A-";
  }
  if (averageScore >= 87  && averageScore <= 89){
     letterGrade = "B+";
  }
  if (averageScore >= 83  && averageScore <= 86){
     letterGrade = "B";
  }
  if (averageScore >= 80  && averageScore <= 82){
     letterGrade = "B-";
  }
  if (averageScore >= 77  && averageScore <= 79){
     letterGrade = "C+";
  }
  if (averageScore >= 73  && averageScore <= 76){
     letterGrade = "C";
  }
  if (averageScore >= 70  && averageScore <= 72){
     letterGrade = "C-";
  }
  if (averageScore >= 67  && averageScore <= 69){
     letterGrade = "D+";
  }
  if (averageScore >= 63  && averageScore <= 66){
     letterGrade = "D";
  }
  if (averageScore >= 60  && averageScore <= 62){
     letterGrade = "D-";
  }
   else if (averageScore < 60){
     letterGrade = "F";
  }
  console.log(letterGrade) //check to ensure value is returned properly
  return letterGrade; //ACTUALLY return the property! 
  
}

getAverageGrade([92, 91, 90, 94, 89, 93]); //returns "A-"!
getAverageGrade([84, 89, 85, 100, 91, 88, 79]); //returns "B+"!
getAverageGrade([63, 69, 65, 66, 71, 64, 65]); //returns "D"! **
getAverageGrade([97, 98, 99, 100, 96, 97, 98, 99, 100]); //returns "A+"!
getAverageGrade([75, 100, 88, 79, 80, 78, 64, 60]); //returns "C+"!
getAverageGrade([45, 48, 50, 52, 100, 54, 56, 58, 59]); //returns "F"!

/* **When testing my code, I noticed that I could get the first two results correctly as well as the last three,
but the third test didn't return anything. Thanks to my multiple check lines, I determined that the value of test three
was 66 and some change. Given that the answer HAD to be a D, as opposed to a D+, I knew I needed to apply the Math.floor()
method to round that number down to 66 for the correct answer to apply! Once this was added, we were "grade" to go!  */