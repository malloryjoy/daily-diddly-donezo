// Given a Unix timestamp in milliseconds, return the day of the week.
// Valid return days are:
// "Sunday"
// "Monday"
// "Tuesday"
// "Wednesday"
// "Thursday"
// "Friday"
// "Saturday"
// Be sure to ignore time zones.

function getDayOfWeek(timestamp) {
  const date = new Date(timestamp); // create variable that holds a new Date based on provided timestamp
  //console.log(date.toString()), confirms the date was converted correctly 
  let dayOfWeek = date.getUTCDay(); // create variable that holds the day of the week 
  //console.log(dayOfWeek) // confirms weekday is correct  
  let day = ""; // creates variable that holds stringified date
  if (dayOfWeek == 1){ // if statement of each day of the week, with the number converted to the corresponding day of the week
    day = "Monday"
  }  else if (dayOfWeek == 2){
    day = "Tuesday"
  } else if (dayOfWeek == 3){
    day = "Wednesday"
  }
  else if (dayOfWeek == 4){
    day = "Thursday"
  }
  else if (dayOfWeek == 5){
    day = "Friday"
  }
  else if (dayOfWeek == 6){
    day = "Saturday"
  }
  else if (dayOfWeek == 0){
    day = "Sunday"
  }else {
    day = "ERROR"
  }
  console.log(day) // confirms correct answer
  return day; // returns correct answer 
}




getDayOfWeek(1775492249000) //should return "Monday".
getDayOfWeek(1766246400000) //should return "Saturday".
getDayOfWeek(33791256000000) //should return "Tuesday".
getDayOfWeek(1773576000000) //should return "Sunday".
getDayOfWeek(0) //should return "Thursday".