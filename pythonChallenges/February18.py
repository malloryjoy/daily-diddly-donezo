def check_eligibility(athlete_weights, sled_weight):
    bob_sledgible = "Eligible"
    min_weight = True
    max_weight = True
    num_athletes = len(athlete_weights)
  ##print(num_athletes)
    athleteKG = sum(athlete_weights)
  ##print(athleteKG);
    if num_athletes == 1 and sled_weight >= 162 or num_athletes == 2 and sled_weight >= 170 or num_athletes == 4 and sled_weight >= 210:
        min_weight = True
    else:
        min_weight = False
  
  ##print(min_weight)
    total_weight = sled_weight + athleteKG
  ##print(total_weight)
    if num_athletes == 1 and total_weight <= 247 or num_athletes == 2 and total_weight <= 390 or num_athletes == 4 and total_weight <= 630:
        max_weight = True
    else:
        max_weight = False

  ##print(max_weight)
    if min_weight == True and max_weight == True:
        bobSledgible = "Eligible"
    else:
        bobSledgible = "Not Eligible"

    print(bobSledgible)
    return bobSledgible




check_eligibility([78], 165) ##should return "Eligible"
check_eligibility([80], 160) ##should return "Not Eligible".
check_eligibility([80], 170) ##should return "Not Eligible".
check_eligibility([85, 90], 170) ##should return "Eligible".
check_eligibility([85, 95], 168) ##should return "Not Eligible".
check_eligibility([112, 97], 185) ##should return "Not Eligible".
check_eligibility([110, 102, 90, 106], 222) ##should return "Eligible".
check_eligibility([106, 99, 90, 88], 205) ##should return "Not Eligible".
check_eligibility([106, 99, 103, 96], 227) ##should return "Not Eligible".




