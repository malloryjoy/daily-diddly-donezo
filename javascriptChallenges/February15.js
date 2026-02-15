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

/*This was fun for me to solve, because the answer came to me naturally. I didn't have to Google anything or add a few log 
statements to confirm I was right every step of the way. I understand the benefits of checks, similar to what is used when 
employing Typescript, but there's a difference between an industrialized check system for efficiency vs. needing checks to make
sure I know what I'm doing. This is the most confident I've felt and that's nice :D */ 


function getHillRating(drop, distance, type) {
    let steep = drop/distance; //Get the steepness using the calculation provided 
    let steepAdjust = 1; //establish the adjustment scale as 1 
    if (type === "Downhill"){ //if/else conditions for how to re-establish the steepAdjust value based on the type of hill
      steepAdjust = 1.2;
    } else if (type === "Slalom"){
      steepAdjust = .9;
    } else{
      steepAdjust = 1;
    }
    let skiRating = steep * steepAdjust; //establishes the skiRating based on the readjusted steep incline 
  
    let ratingColor = "";
    if (skiRating <= .1){ //if/else conditions for the adjusted skiRating 
      ratingColor = "Green";
    } else if (skiRating > .1 && skiRating <= .25){
      ratingColor = "Blue";
    } else if (skiRating > .25){
      ratingColor = "Black";
    }
    console.log(ratingColor); //Confirms the correct answer was generated 
    return ratingColor; //returns the correct answer 
  }
  getHillRating(95, 900, "Slalom") //should return "Green".
  getHillRating(620, 2800, "Downhill") //should return "Black".
  getHillRating(420, 1680, "Giant Slalom") //should return "Blue".
  getHillRating(250, 3000, "Downhill") //should return "Green".
  getHillRating(110, 900, "Slalom") //should return "Blue".
  getHillRating(380, 1500, "Giant Slalom") //should return "Black".