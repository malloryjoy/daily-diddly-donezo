# Given a string, return the letter from the string that appears last in the alphabet.

# If two or more letters tie for the last in the alphabet, return the first one.
# Ignore all non-letter characters.

import re

def get_last_letter(s):
    cleaned_str = "".join(char for char in s if char.isalpha())
    ## print(cleaned_str)
    the_letter = " "
    upper_count = sum(1 for char in cleaned_str if char.isupper())
    if upper_count > 1:
        sorted = re.sub(r'[a-z]', '', cleaned_str)
        con_letter_array = list(sorted)
        ## print(con_letter_array)
        con_letter = [ord(char.lower()) - 64 for char in con_letter_array]
        ## print(con_letter)
        large_num = max(con_letter)
        ## print(large_num)
        the_letter = chr(64 + large_num).upper()
        print(the_letter)
        return the_letter
    else:
        con_letter_array = list(cleaned_str)
        ## print(con_letter_array)
        con_letter = [ord(char.lower()) - 64 for char in con_letter_array]
        ## print(con_letter)
        large_num = max(con_letter)
        ## print(large_num)
        the_letter = chr(64 + large_num)
        print(the_letter)
        return the_letter





get_last_letter("world") ##should return "w".
get_last_letter("Hello World") ##should return "W".
get_last_letter("The quick brown fox jumped over the lazy dog.") ##should return "z".
get_last_letter("HeLl0") ##should return "L".
get_last_letter("!#$ er@R asd fT.,> 2t0e9") ##should return "T".