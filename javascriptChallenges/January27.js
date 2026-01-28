/*Given a timestamp (number of milliseconds since the Unix epoch), return:

"odd" if the day of the month for that timestamp is odd.
"even" if the day of the month for that timestamp is even.
For example, given 1769472000000, a timestamp for January 27th, 2026, return "odd" because the day number (27) 
is an odd number.*/

function oddOrEvenDay(timestamp) {  //takes timestamp as a parameter 
    const dateObject = new Date(timestamp); //creates new Date object that converts timestamp into a date
    console.log(dateObject); //displays dateObject to confirm date converted correctly
    let tsConvert = dateObject.getUTCDate(); //creates value that isolates the date in UTC format
  
    let dateDivisible = ""; //creates empty dateDivisible value
      if (tsConvert%2 == 0){ //if then statement determining whether date number is odd or even, returning string indicating such
        dateDivisible="even"
      } else {
        dateDivisible="odd"
      }
      console.log(dateDivisible) //displays answer to confirm number value is correct 
    return dateDivisible; //returns value 
  }
  
  
  oddOrEvenDay(1769472000000) //should return "odd"
  oddOrEvenDay(1769444440000) //should return "even"
  oddOrEvenDay(6739456780000) //should return "odd"
  oddOrEvenDay(1) //should return "odd"
  oddOrEvenDay(86400000) //should return "even"