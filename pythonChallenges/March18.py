##Given a string of numbers separated by various punctuation, return the largest number.

##The given string will only contain numbers and separators.
##Separators can be commas (","), exclamation points ("!"), question marks ("?"), colons (":"), or semi-colons (";").

def largest_number(s):
    res = s.replace("?", ",")
    res2 = res.replace("!",",")
    res3 = res2.replace(":",",")
    res4 = res3.replace(";",",")
    new_text = res4
    ##print(new_text)
    new_list = new_text.split(",");
    ##print(new_list)
    nums = [float(x) for x in new_list]
    largest_num = max(nums)
    ##print(new_list[0])
    print(largest_num)
    return largest_num
   










largest_number("1,2") ##should return 2.
largest_number("4;15:60,26?52!0") ##should return 60.
largest_number("-402,-1032!-569:-947;-633?-800!-1012;-402,-723?-8102!-3011") ##should return -402.
largest_number("12;-50,99.9,49.1!-10.1?88?16") ##should return 99.9.
