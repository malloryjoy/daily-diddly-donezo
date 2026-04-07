# Palindrome Characters
# Given a string, determine if it's a palindrome and return the middle character (if it's odd length) or middle two characters (if it's even).

# A palindrome is a string that is the same forward and backward.
# If it's not a palindrome, return "none".

import math

def palindrome_locator(s):
    reversed = s[::-1] #reverses string
    #print(reversed), confirms provided string has been reversed
    my_answer = "", #creates blank variable to  hold answer 
    if reversed != s: #if else statement to determine if word provided is a palindrome 
        my_answer = "none" #sets the correct answer as "none" if it is not a palindrome 
    else: 
        length = len(s) #gets the number of characters in the palindrome 
        middle_index = math.floor(length / 2) #creates a variable that holds the value of the length divided by 2
        if length % 2 != 0: #if else statement to determine if there is an "even" split in the palindrome 
            my_answer = s[middle_index] #if the palindrome is an even split, the answer is the index of the midway point of the string 
        else:
            my_answer = s[middle_index - 1] + s[middle_index] #if the palindrome is not an even split, the answer is the index of the midway point of the string, minus 1, added to the midway point of the string
    print(my_answer) #confirms correct answer 


    return my_answer #returns correct answer 




palindrome_locator("racecar") ##should return "e".
palindrome_locator("level") ##should return "v".
palindrome_locator("freecodecamp") ##should return "none".
palindrome_locator("noon") ##should return "oo".
palindrome_locator("11100111") ##should return "00".