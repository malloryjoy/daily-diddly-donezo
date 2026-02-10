// Given an array of finish times for a cross-country ski race, convert them into times behind the winner.

// Given times are strings in "H:MM:SS" format.
// Given times will be in order from fastest to slowest.
// The winners time (fastest time) should correspond to "0".
// Each other time should show the time behind the winner, in the format "+M:SS".
// For example, given ["1:25:32", "1:26:10", "1:27:05"], return ["0", "+0:38", "+1:33"]. 


function getRelativeResults(results) {
    function kaboot(result){  //creates function that converts string value into a numerical value, the time indicated in the string in seconds 
      return result.split(':')
    .reduce((acc, time) => (60 * acc) + +time, 0)
    }
    const totalSecondsArray = results.map(kaboot); //creates new array that applies the above 'kaboot' function to each item in the array 
    //console.log(totalSecondsArray), to check the array looks right
    function magicMath(arr){ // function that creates an array by subtracting the first value (the winner's value) in the array from each other value in the array
      return arr.map((currentValue, index, array) => {
      if (index === 0) {
        return 0;
      } else {
        const winnerValue = array[0];
        return currentValue - winnerValue;
      }
    });
    }
    const differences = magicMath(totalSecondsArray) //gives the array created by the preceding magicMath function a name
    //console.log(differences), to confirm array was created correctly
  
    function formatMe(totalSeconds) { //converts the difference in times into minutes and seconds 
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
  
      const formattedMinutes = String(minutes).padStart(1, '0'); //converts the minutes and seconds BACK into a string value 
      const formattedSeconds = String(seconds).padStart(2, '0');//converts the minutes and seconds BACK into a string value 
  
      return `+${formattedMinutes}:${formattedSeconds}`; //adds formatting to each value 
  }
    const finalResults = differences.map(formatMe); //creates FINAL array of each "difference" array value with the applied conversion
    let capitalValue = "0"; //the above function will make the first value in the final array "0:00" when it needs to just be zero. This and the following line change that value to just be "0"
    finalResults[0] = capitalValue
    console.log(finalResults); //confirms that the finalResults array is in fact FINAL and CORRECT 
    return finalResults //returns final, correct answer
      
  }
    
  
  
  getRelativeResults(["1:25:32", "1:26:10", "1:27:05"]) // should return ["0", "+0:38", "+1:33"]
  
  getRelativeResults(["1:00:01", "1:00:05", "1:00:10"]) //should return ["0", "+0:04", "+0:09"].
  getRelativeResults(["1:10:06", "1:10:23", "1:10:48", "1:12:11"]) //should return ["0", "+0:17", "+0:42", "+2:05"].
  
  getRelativeResults(["0:49:13", "0:49:15", "0:50:14", "0:51:30", "0:51:58", "0:52:16", "0:53:12", "0:53:31", "0:56:19", "1:02:20"]) //should return ["0", "+0:02", "+1:01", "+2:17", "+2:45", "+3:03", "+3:59", "+4:18", "+7:06", "+13:07"].
  getRelativeResults(["2:01:15", "2:10:45", "2:10:53", "2:11:04", "2:11:55", "2:13:27", "2:14:30", "2:15:10"]) //should return ["0", "+9:30", "+9:38", "+9:49", "+10:40", "+12:12", "+13:15", "+13:55"]
  