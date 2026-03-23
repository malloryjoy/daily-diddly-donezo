// Given two strings representing the time you parked your car and the time you picked it up, calculate the parking fee.

// The given strings will be in the format "HH:MM" using a 24-hour clock. So "14:00" is 2pm for example.
// The first string will be the time you parked your car, and the second will be the time you picked it up.
// If the pickup time is earlier than the entry time, it means the parking spanned past midnight into the next day.
// Fee rules:

// Each hour parked costs $3.
// Partial hours are rounded up to the next full hour.
// If the parking spans overnight (past midnight), an additional $10 overnight fee is applied.
// There is a minimum fee of $5 (only used if the total would be less than $5).
// Return the total cost in the format "$cost", "$5" for example.


function calculateParkingFee(parkTime, pickupTime) {
    const startTime = new Date("March 23, 2026 " + parkTime); //create a variable to hold a date made with the parkTime time
   let endTime = ""; //creates empty variable to hold an endTime that will be calculated later
   let parkArray = parkTime.split(":"); //creates an array that splits the time of the parking start by hours and minutes 
   let pickArray = pickupTime.split(":"); //creates an array that splits the time of the parking end by hours and minutes 
   //console.log(startTime);, confirms the correct answer for the date 
   //console.log(parkArray);, confirms the starting time array has been created correctly
   //console.log(pickArray);, confirms the finishing time array has been created correctly 
   if (parkArray[0] > pickArray[0] || (parkArray[0] == pickArray[0] && (parkArray[1] > pickArray[1]))){ //if statement that establishes the endTime based on if it ends the same day or the next day of the parking start time 
     endTime = new Date ("March 24, 2026 " + pickupTime);
   } else {
     endTime = new Date ("March 23, 2026 " + pickupTime);
   }
   //console.log(startTime);,  confirms the correct startTime
   //console.log(endTime);, confirms the correct endTime
   const difference = Math.abs(startTime.getTime() - endTime.getTime()) //creates the numerical value of the hours spent in the parking space, as miliseconds
   //console.log(difference), confirms the number is correct 
   let hoursDifference = Math.ceil(difference / 1000 / 60 / 60); //converts the number into hours 
   //console.log(hoursDifference);, confirms the number is correct 
   const pickupDay = endTime.getDate(); //gets the date of the parking start 
   //console.log(pickupDay);, confirms the date is correct 
   const startDay = startTime.getDate(); //gets the date of the parking end 
   //console.log(startDay);, confirms the date is correct 
   let costNum = ""; //creates a numerical value for the overall parking cost 
   if (hoursDifference <=1) { //if else statement to determine the parking fee based on if the parking duration was more than an hour 
     costNum = 5;
     } else {
       if (startDay != pickupDay){ //if else statement to determine the parking fee based on if the parking duration was overnight 
         costNum = ((3 * hoursDifference) + 10);
       } else {
         costNum = (3 * hoursDifference);
       }
     }
     let cost = `$${costNum}` //creates a final value for the parking fee cost that wraps the parking fee in the necessary string format 
   console.log(cost); //confirms the correct answer 
   return cost; //returns the correct answer 
   
   
   }
   
   
   
   
   
   
   calculateParkingFee("09:00", "11:00") //should return "$6".
   calculateParkingFee("10:00", "10:30") //should return "$5".
   calculateParkingFee("08:10", "10:45") //should return "$9".
   calculateParkingFee("14:40", "23:10") //should return "$27".
   calculateParkingFee("18:15", "01:30") //should return "$34".
   calculateParkingFee("11:11", "11:10") //should return "$82".
   