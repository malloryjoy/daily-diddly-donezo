##Given a string of numbers separated by various punctuation, return the largest number.

##The given string will only contain numbers and separators.
##Separators can be commas (","), exclamation points ("!"), question marks ("?"), colons (":"), or semi-colons (";").

def largest_number(s):
    res = s.replace("?", ",") ## Creates a variable that holds the original string, but replaces all question marks with a comma 
    res2 = res.replace("!",",") ## Creates a variable that holds the new string, but replaces all exclamation marks with a comma
    res3 = res2.replace(":",",") ## Creates a variable that holds the newer string, but replaces all colons with a comma
    res4 = res3.replace(";",",") ## Creates a variable that holds the newest string, but replaces all semicolons with a comma
    new_text = res4 ## Creates a variable that holds the final version of the fully replaced string 
    ##print(new_text), to confirm the string has been properly converted 
    new_list = new_text.split(","), ## Creates an array of the newest string, splitting into individual values by comma placement
    ##print(new_list), to confirm the string has been properly converted into an array 
    nums = [float(x) for x in new_list] ## Converts the items in the list to be full numerical values, not stringified numbers 
    largest_num = max(nums) ## Creates a variable that holds the largest number in the array
    
    print(largest_num) ## Confirms the largest number has been selected 
    return largest_num ## Returns the largest number as the final answer 
   










largest_number("1,2") ##should return 2.
largest_number("4;15:60,26?52!0") ##should return 60.
largest_number("-402,-1032!-569:-947;-633?-800!-1012;-402,-723?-8102!-3011") ##should return -402.
largest_number("12;-50,99.9,49.1!-10.1?88?16") ##should return 99.9.
