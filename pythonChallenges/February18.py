def check_eligibility(athlete_weights, sled_weight):
    bob_sledgible = "Eligible" ##creates element to hold determined elgibility
    min_weight = True ##variable that holds confirmed minimum weight achieved 
    max_weight = True ##variable that holds confirmed maximum weight
    num_athletes = len(athlete_weights) ##variable that holds the length of the athlete weight arrays-- how many athletes to be put in the bobsled
  ##print(num_athletes); confirms the number of athletes to place in the bobsled 
    athleteKG = sum(athlete_weights) ##variable that holds the sum of the weight of each athlete
 
  ##print(athleteKG); confirms the athlete weight total
    if num_athletes == 1 and sled_weight >= 162 or num_athletes == 2 and sled_weight >= 170 or num_athletes == 4 and sled_weight >= 210: ##if statement that declares the minimum weight of the bobsled is met 
        min_weight = True
    else:
        min_weight = False
  
  ##print(min_weight), confirms the correct weight status 
    total_weight = sled_weight + athleteKG ##variable that holds the combined weight of the sled and the athletes 
  ##print(total_weight), confirms total weight 
    if num_athletes == 1 and total_weight <= 247 or num_athletes == 2 and total_weight <= 390 or num_athletes == 4 and total_weight <= 630: ##if/else statement confirming  that the max weight is "met"
        max_weight = True
    else:
        max_weight = False

  ##print(max_weight), confirms max weight status 
    if min_weight == True and max_weight == True: ##if statement that confirms that the minimum weight is met and the maximum weight is not exceeded, confirming eligibility 
        bobSledgible = "Eligible"
    else:
        bobSledgible = "Not Eligible"

    print(bobSledgible) ## confirms eligibility status 
    return bobSledgible ## returns eligibility status 




check_eligibility([78], 165) ##should return "Eligible"
check_eligibility([80], 160) ##should return "Not Eligible".
check_eligibility([80], 170) ##should return "Not Eligible".
check_eligibility([85, 90], 170) ##should return "Eligible".
check_eligibility([85, 95], 168) ##should return "Not Eligible".
check_eligibility([112, 97], 185) ##should return "Not Eligible".
check_eligibility([110, 102, 90, 106], 222) ##should return "Eligible".
check_eligibility([106, 99, 90, 88], 205) ##should return "Not Eligible".
check_eligibility([106, 99, 103, 96], 227) ##should return "Not Eligible".




