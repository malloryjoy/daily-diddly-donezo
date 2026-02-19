function checkEligibility(athleteWeights, sledWeight) {
    let bobSledgible = ""; //creates element to hold determined elgibility
    let minWeight = true; //variable that holds confirmed minimum weight achieved 
    let maxWeight = true; //variable that holds confirmed maximum weight
    let numAthletes = athleteWeights.length; //variable that holds the length of the athlete weight arrays-- how many athletes to be put in the bobsled
    //console.log(numAthletes); Confirms array length is correct 
    const athleteKG = athleteWeights.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //variable that holds the sum of the weight of each athlete
    //console.log(athleteKG); Confirms weight is correct 
    if (numAthletes == 1 && sledWeight >= 162 || numAthletes == 2 && sledWeight >= 170 ||numAthletes == 4 && sledWeight >= 210) { //if statement that declares the minimum weight of the bobsled is met 
      minWeight = true;
    } else {
      minWeight = false;
    }
    //console.log(minWeight); confirms weight is or isn't met 
    let totalWeight = sledWeight + athleteKG; //variable that holds the combined weight of the sled and the athletes 
    //console.log(totalWeight); confirms the total weight is accurate 
    if (numAthletes == 1 && totalWeight <= 247 ||numAthletes == 2 && totalWeight <= 390 || numAthletes == 4 && totalWeight <= 630){ //if/else statement confirming  that the max weight is "met"
      maxWeight = true;
    } else {
      maxWeight = false;
    }
    //console.log(maxWeight); confirms the weight is "met"
    if (minWeight == true && maxWeight == true){ //if statement that confirms that the minimum weight is met and the maximum weight is not exceeded, confirming eligibility 
      bobSledgible = "Eligible"; 
    } else {
      bobSledgible = "Not Eligible"
    }
    console.log(bobSledgible) //confirms eligibility status
    return bobSledgible; //returns eligibility status 
  }
  
  
  
  checkEligibility([78], 165) //should return "Eligible".
  checkEligibility([80], 160) //should return "Not Eligible".
  checkEligibility([80], 170) //should return "Not Eligible".
  checkEligibility([85, 90], 170) //should return "Eligible".
  checkEligibility([85, 95], 168) //should return "Not Eligible".
  checkEligibility([112, 97], 185) //should return "Not Eligible".
  checkEligibility([110, 102, 90, 106], 222) //should return "Eligible".
  checkEligibility([106, 99, 90, 88], 205) //should return "Not Eligible".
  checkEligibility([106, 99, 103, 96], 227) //should return "Not Eligible".
  