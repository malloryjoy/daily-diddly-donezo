##Given a ski hill's vertical drop, horizontal distance, and type, determine the difficulty rating of the hill.

## To determine the rating:

## Calculate the steepness of the hill by taking the drop divided by the distance.
## Then, calculate the adjusted steepness based on the hill type:
## "Downhill" multiply steepness by 1.2
## "Slalom": multiply steepness by 0.9
## "Giant Slalom": multiply steepness by 1.0
## Return:

## "Green" if the adjusted steepness is less than or equal to 0.1
## "Blue" if the adjusted steepness is greater than 0.1 and less than or equal to 0.25
## "Black" if the adjusted steepness is greater than 0.25




def get_hill_rating(drop, distance, hill_type):
    steep = drop/distance; ##Get the steepness using the calculation provided 
    steepAdjust = 1; ##establish the adjustment scale as 1 
    if hill_type == "Downhill": 
      steepAdjust = 1.2
    elif hill_type == "Slalom":
      steepAdjust = .9
    elif hill_type =="Giant Slalom":
      steepAdjust = 1;
    
    skiRating = steep * steepAdjust; ##establishes the skiRating based on the readjusted steep incline 
    print(skiRating)
    ratingColor = "";
    if skiRating <= .1: 
      ratingColor = "Green"
    elif skiRating > .1 and skiRating <= .25:
      ratingColor = "Blue"
    elif skiRating > .25: 
      ratingColor = "Black"
    
    print(ratingColor); ##Confirms the correct answer was generated 
    return ratingColor; ##returns the correct answer 

get_hill_rating(95, 900, "Slalom") ##should return "Green".
get_hill_rating(620, 2800, "Downhill") ##should return "Black".
get_hill_rating(420, 1680, "Giant Slalom") ##should return "Blue".
get_hill_rating(250, 3000, "Downhill") ##should return "Green".
get_hill_rating(110, 900, "Slalom") ##should return "Blue".
get_hill_rating(380, 1500, "Giant Slalom") ##should return "Black".