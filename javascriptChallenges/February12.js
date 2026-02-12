// Given two arrays representing the lap times (in seconds) for two speed skaters, return the lap number where the 
// difference in lap times is the largest.

// The first element of each array corresponds to lap 1, the second to lap 2, and so on.



function largestDifference(skater1, skater2) {
    let lap1Diff = Math.abs(skater1[0] - skater2[0]); //Compares lap 1 results for each skater, absoluting them to a positive value
    //console.log(lap1Diff), confirms the right value 
    let lap2Diff = Math.abs(skater1[1] - skater2[1]); //Compares lap 2 results for each skater, absoluting them to a positive value
    //console.log(lap2Diff), confirms the right value
    let lap3Diff = Math.abs(skater1[2] - skater2[2]); //Compares lap 3 results for each skater, absoluting them to a positive value
    //console.log(lap3Diff), confirms the right value
    let lap4Diff = Math.abs(skater1[3] - skater2[3]); //Compares lap 4 results for each skater, absoluting them to a positive value
    //console.log(lap4Diff), confirms the right value 
    let lap5Diff = Math.abs(skater1[4] - skater2[4]); //Compares lap 5 results for each skater, absoluting them to a positive value
    //console.log(lap5Diff), confirms the right value 
   
    let lapArray = [lap1Diff, lap2Diff, lap3Diff, lap4Diff, lap5Diff]; //Places each value into a new array 
    const maxValue = Math.max(...lapArray); //determines the largest value in the array 
    const maxIndex = lapArray.indexOf(maxValue); //confirms the index of the largest value 
    let results = maxIndex+1 //adds 1 to the index value to give the correct Lap value (ie, not lap 0!)
    console.log(results) //confirms the result is correct
   return results; //returns final answer 
   }
   
   
   largestDifference([26.11, 25.80, 25.92, 26.23, 26.07], [25.93, 25.74, 26.53, 26.11, 26.30]) //should return 3.
   
   largestDifference([27.04, 25.94, 26.22, 26.07, 26.18], [25.59, 25.80, 26.11, 26.01, 26.23]) //should return 1.
   
   largestDifference([25.82, 25.90, 26.05, 26.00, 26.48], [25.85, 25.92, 26.07, 25.98, 25.95]) //should return 5.
   
   largestDifference([25.88, 26.10, 25.95, 26.05, 26.00], [25.90, 26.55, 25.92, 26.03, 26.01]) //should return 2.
   
   largestDifference([25.92, 26.01, 26.05, 25.88, 26.12], [25.95, 26.00, 26.03, 26.45, 26.10]) //should return 4.