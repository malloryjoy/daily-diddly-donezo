# Given a bingo number, return the next bingo number sequentially.

# A bingo number is a single letter followed by a number in its range according to this chart:

# Letter	Number Range
# "B"	1-15
# "I"	16-30
# "N"	31-45
# "G"	46-60
# "O"	61-75
# For example, given "B10", return "B11", the next bingo number. If given the last bingo number, return "B1".

def get_next_bingo_number(n):
    bing_array = list(n) ## splits n into an array by character
    ##print(bing_array), confirms n was split correctly
    bing_value = bing_array[1]+ bing_array[2] ## creates value to hold the number provided in n 
    ##print(bing_value), confirms the correct value was pulled 
    my_num = int(bing_value) + 1 ## converts the pulled value into an integer and adds 1 to it 
    ##print(my_num), confirms the correct value was generated 
    next_letter = my_num ## creates blank value to hold new BINGO letter  
    if my_num > 1 and my_num <= 15: ## if else statement to determine the next Bingo Number by letter
        next_letter = f"B{my_num}"
    elif my_num >= 16 and my_num <=30:
        next_letter = f"I{my_num}"
    elif my_num >= 31 and my_num <=45:
        next_letter = f"N{my_num}"
    elif my_num >= 46 and my_num <= 60:
        next_letter = f"G{my_num}"
    elif my_num >= 61 and my_num <=75:
        next_letter = f"O{my_num}"
    elif my_num > 75: ## creates final possible answer to "restart" the loop if the final letter of 075 is pulled 
      next_letter = "B1"
    
    print(next_letter) ## confirms correct answer 
    return next_letter ## pulls correct answer 



get_next_bingo_number("B10") ##should return "B11".
get_next_bingo_number("N33") ##should return "N34".
get_next_bingo_number("I30") ##should return "N31".
get_next_bingo_number("G60") ##should return "O61".
get_next_bingo_number("O75") ##should return "B1".