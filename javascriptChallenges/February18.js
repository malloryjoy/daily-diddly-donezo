function checkEligibility(athleteWeights, sledWeight) {
    let bobSledgible = "";
    let minWeight = true;
    let maxWeight = true;
    let numAthletes = athleteWeights.length;
    //console.log(numAthletes);
    const athleteKG = athleteWeights.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    //console.log(athleteKG);
    if (numAthletes == 1 && sledWeight >= 162 || numAthletes == 2 && sledWeight >= 170 ||numAthletes == 4 && sledWeight >= 210) {
      minWeight = true;
    } else {
      minWeight = false;
    }
    //console.log(minWeight)
    let totalWeight = sledWeight + athleteKG;
    //console.log(totalWeight)
    if (numAthletes == 1 && totalWeight <= 247 ||numAthletes == 2 && totalWeight <= 390 || numAthletes == 4 && totalWeight <= 630){
      maxWeight = true;
    } else {
      maxWeight = false;
    }
    //console.log(maxWeight)
    if (minWeight == true && maxWeight == true){
      bobSledgible = "Eligible";
    } else {
      bobSledgible = "Not Eligible"
    }
    console.log(bobSledgible)
    return bobSledgible;
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
  