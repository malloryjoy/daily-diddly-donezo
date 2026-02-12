// Given two arrays representing the lap times (in seconds) for two speed skaters, return the lap number where the 
// difference in lap times is the largest.

// The first element of each array corresponds to lap 1, the second to lap 2, and so on.



function largestDifference(skater1, skater2) {
    let lap1Diff = Math.abs(skater1[0] - skater2[0]);
    //console.log(lap1Diff)
    let lap2Diff = Math.abs(skater1[1] - skater2[1]);
    //console.log(lap2Diff)
    let lap3Diff = Math.abs(skater1[2] - skater2[2]);
    //console.log(lap3Diff)
    let lap4Diff = Math.abs(skater1[3] - skater2[3]);
    //console.log(lap4Diff)
    let lap5Diff = Math.abs(skater1[4] - skater2[4]);
    //console.log(lap5Diff)
   
    let lapArray = [lap1Diff, lap2Diff, lap3Diff, lap4Diff, lap5Diff];
    const maxValue = Math.max(...lapArray);
    const maxIndex = lapArray.indexOf(maxValue);
    let results = maxIndex+1
    console.log(results)
   return results;
   }
   
   
   largestDifference([26.11, 25.80, 25.92, 26.23, 26.07], [25.93, 25.74, 26.53, 26.11, 26.30]) //should return 3.
   
   largestDifference([27.04, 25.94, 26.22, 26.07, 26.18], [25.59, 25.80, 26.11, 26.01, 26.23]) //should return 1.
   
   largestDifference([25.82, 25.90, 26.05, 26.00, 26.48], [25.85, 25.92, 26.07, 25.98, 25.95]) //should return 5.
   
   largestDifference([25.88, 26.10, 25.95, 26.05, 26.00], [25.90, 26.55, 25.92, 26.03, 26.01]) //should return 2.
   
   largestDifference([25.92, 26.01, 26.05, 25.88, 26.12], [25.95, 26.00, 26.03, 26.45, 26.10]) //should return 4.