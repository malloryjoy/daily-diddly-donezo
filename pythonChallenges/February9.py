## Given distance points, style points, a wind compensation value, and K-point bonus value, calculate your score for the ski jump and determine if you won a medal or not.

##Your score is calculated by summing the above four values.
##The current total scores of the other jumpers are:

##165.5
##172.0
##158.0
##180.0
##169.5
##175.0
##162.0
##170.0
##If your score is the best, return "Gold"
##If it's second best, return "Silver"
##If it's third best, return "Bronze"
##Otherwise, return "No Medal"

def ski_jump_medal(distance_points, style_points, wind_comp, k_point_bonus):
    my_score = distance_points + style_points + wind_comp + k_point_bonus
    print(my_score)
    my_medal = ""
    if my_score > 180:
       my_medal = "Gold"
    elif my_score > 175.0 and my_score < 180:
       my_medal = "Silver"
    elif my_score > 172.0 and my_score < 175.0:
       my_medal = "Bronze"
    else:
       my_medal = "No Medal"
    print(my_medal)
    return my_medal


  
ski_jump_medal(125.0, 58.0, 0.0, 6.0) ##should return "Gold".
ski_jump_medal(119.0, 50.0, 1.0, 4.0) ##should return "Bronze".
ski_jump_medal(122.0, 52.0, -1.0, 4.0) ##should return "Silver".
ski_jump_medal(118.0, 50.5, -1.5, 4.0) ##should return "No Medal".
ski_jump_medal(124.0, 50.5, 2.0, 5.0) ##should return "Gold".
ski_jump_medal(119.0, 49.5, 0.0, 3.0) ##should return "No Medal".