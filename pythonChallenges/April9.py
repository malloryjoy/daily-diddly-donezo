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
    bing_array = list(n)
    ##print(bing_array)
    bing_value = bing_array[1]+ bing_array[2]
    ##print(bing_value)
    my_num = int(bing_value) + 1
    ##print(my_num)
    next_letter = my_num
    if my_num > 1 and my_num <= 15:
        next_letter = f"B{my_num}"
    elif my_num >= 16 and my_num <=30:
        next_letter = f"I{my_num}"
    elif my_num >= 31 and my_num <=45:
        next_letter = f"N{my_num}"
    elif my_num >= 46 and my_num <= 60:
        next_letter = f"G{my_num}"
    elif my_num >= 61 and my_num <=75:
        next_letter = f"O{my_num}"
    elif my_num > 75:
      next_letter = "B1"
    
    print(next_letter)
    return next_letter



get_next_bingo_number("B10") ##should return "B11".
get_next_bingo_number("N33") ##should return "N34".
get_next_bingo_number("I30") ##should return "N31".
get_next_bingo_number("G60") ##should return "O61".
get_next_bingo_number("O75") ##should return "B1".