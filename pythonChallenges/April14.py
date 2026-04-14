# Given a string, return the letter from the string that appears last in the alphabet.

# If two or more letters tie for the last in the alphabet, return the first one.
# Ignore all non-letter characters.

import re ## import regex capability

def get_last_letter(s):
    cleaned_str = "".join(char for char in s if char.isalpha()) ## creates new string filtering out non letters
    ## print(cleaned_str), logs to confirm new string was created correctly 
    the_letter = " " ## creates blank variable to hold correct answer 
    upper_count = sum(1 for char in cleaned_str if char.isupper()) ##creates variable to get the count of capital letters in the string 
    if upper_count > 1: ##applies the following code if there are more than one capital letters in the string
        sorted = re.sub(r'[a-z]', '', cleaned_str) ## creates a new string that removes all the lowercase letters from the previous string
        con_letter_array = list(sorted) ## creates a list from the filtered 'sorted' string
        ## print(con_letter_array), logs to confirm list was created correctly 
        con_letter = [ord(char.lower()) - 64 for char in con_letter_array] ## converts each letter in the list to the corresponding alphanumeric number
        ## print(con_letter), logs to confirm letter list was created correctly
        large_num = max(con_letter) ## returns the largest number in the list
        ## print(large_num), logs to confirm the largest number in the list was returned
        the_letter = chr(64 + large_num).upper() ## creates a variable that converts the largest number to the corresponding letter, then capitalizes the letter
        print(the_letter) ## logs to confirm the correct answer 
        return the_letter ## returns the correct answer
    else:
        con_letter_array = list(cleaned_str) ## creates a list from the cleaned string 
        ## print(con_letter_array), logs to confirm list was created correctly
        con_letter = [ord(char.lower()) - 64 for char in con_letter_array] ## converts each letter to the corresponding number 
        ## print(con_letter), logs to confirm letter list was created correctly
        large_num = max(con_letter) ## returns largest number in the list 
        ## print(large_num), logs to confirm the largest number in the list was returned
        the_letter = chr(64 + large_num) ## reconverts largest number in the list to the corresponding letter in the alphabet
        print(the_letter) ## logs to confirm the correct answer 
        return the_letter ## returns the correct answer 





get_last_letter("world") ##should return "w".
get_last_letter("Hello World") ##should return "W".
get_last_letter("The quick brown fox jumped over the lazy dog.") ##should return "z".
get_last_letter("HeLl0") ##should return "L".
get_last_letter("!#$ er@R asd fT.,> 2t0e9") ##should return "T".