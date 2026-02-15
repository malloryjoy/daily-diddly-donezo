// Given a ski hill's vertical drop, horizontal distance, and type, determine the difficulty rating of the hill.

// To determine the rating:

// Calculate the steepness of the hill by taking the drop divided by the distance.
// Then, calculate the adjusted steepness based on the hill type:
// "Downhill" multiply steepness by 1.2
// "Slalom": multiply steepness by 0.9
// "Giant Slalom": multiply steepness by 1.0
// Return:

// "Green" if the adjusted steepness is less than or equal to 0.1
// "Blue" if the adjusted steepness is greater than 0.1 and less than or equal to 0.25
// "Black" if the adjusted steepness is greater than 0.25


function getHillRating(drop, distance, type) {
    let steep = drop/distance; 
    let steepAdjust = 1;
    if (type === "Downhill"){
      steepAdjust = 1.2;
    } else if (type === "Slalom"){
      steepAdjust = .9;
    } else{
      steepAdjust = 1;
    }
    let skiRating = steep * steepAdjust;
  
    let ratingColor = "";
    if (skiRating <= .1){
      ratingColor = "Green";
    } else if (skiRating > .1 && skiRating <= .25){
      ratingColor = "Blue";
    } else if (skiRating > .25){
      ratingColor = "Black";
    }
    console.log(ratingColor);
    return ratingColor;
  }
  getHillRating(95, 900, "Slalom") //should return "Green".
  getHillRating(620, 2800, "Downhill") //should return "Black".
  getHillRating(420, 1680, "Giant Slalom") //should return "Blue".
  getHillRating(250, 3000, "Downhill") //should return "Green".
  getHillRating(110, 900, "Slalom") //should return "Blue".
  getHillRating(380, 1500, "Giant Slalom") //should return "Black".