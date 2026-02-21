##Given a trick name consisting of two words, determine if it is a valid freestyle skiing trick name.

##A trick is valid if the first word is in the list of valid first words, and the second word is in the list of valid second words.

##The two words will be separated by a single space.
##Valid first words:

##"Misty" "Ghost" "Thunder" "Solar" "Sky" "Phantom" "Frozen" "Polar"
##Valid second words:

##"Twister" "Icequake" "Avalanche" "Vortex" "Snowstorm" "Frostbite" "Blizzard" "Shadow"



def is_valid_trick(trick_name):
    trick_name_list = trick_name.split();
    ##print(trick_name_list)
    first_valid = True;
    second_valid = True;
    if trick_name_list[0] == "Ghost" or trick_name_list[0] == "Thunder" or trick_name_list[0] == "Solar" or trick_name_list[0] == "Sky" or trick_name_list[0] == "Phantom" or trick_name_list[0] == "Frozen" or trick_name_list[0] == "Polar":
        first_valid = True
    else:
        first_valid = False
    
    ##print(first_valid)
    if trick_name_list[1] == "Icequake" or trick_name_list[1] == "Avalanche" or trick_name_list[1] == "Vortex" or trick_name_list[1] == "Snowstorm" or trick_name_list[1] == "Frostbite" or trick_name_list[1] == "Blizzard" or trick_name_list[1] == "Shadow":
        second_valid = True
    else:
        second_valid = False
    ##print(first_valid);
    ##print(second_valid)
    trick_status = True
    if first_valid == True and second_valid == True:
      trick_status = True
    else:
      trick_status = False
    print(trick_status)
    return trick_status

is_valid_trick("Polar Vortex") ##should return True.
is_valid_trick("Solar Icequake") ##should return True.
is_valid_trick("Thunder Blizzard") ##should return True.
is_valid_trick("Phantom Frostbite") ##should return True.
is_valid_trick("Ghost Avalanche") ##should return True.
is_valid_trick("Snowstorm Shadow") ##should return False.
is_valid_trick("Solar Sky") ##should return False.