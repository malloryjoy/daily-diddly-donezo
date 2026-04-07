# Palindrome Characters
# Given a string, determine if it's a palindrome and return the middle character (if it's odd length) or middle two characters (if it's even).

# A palindrome is a string that is the same forward and backward.
# If it's not a palindrome, return "none".

import math

def palindrome_locator(s):
    reversed = s[::-1]
    #print(reversed)
    my_answer = "",
    if reversed != s:
        my_answer = "none"
    else: 
        length = len(s)
        middle_index = math.floor(length / 2)
        if length % 2 != 0:
            my_answer = s[middle_index]
        else:
            my_answer = s[middle_index - 1] + s[middle_index]
    print(my_answer)


    return my_answer




palindrome_locator("racecar") ##should return "e".
palindrome_locator("level") ##should return "v".
palindrome_locator("freecodecamp") ##should return "none".
palindrome_locator("noon") ##should return "oo".
palindrome_locator("11100111") ##should return "00".