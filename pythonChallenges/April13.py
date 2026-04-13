# Given a full name as a string, return their initials.

# Names to initialize are separated by a space.
# Initials should be made uppercase.
# Initials should be separated by dots.
# For example, "Tommy Millwood" returns "T.M.".


def get_initials(name):
    initial_array = name.split(" ") ## creates list of all words in name string
    ##print(initial_array), confirms list/array was created correctly
    first_chars = [item[0] for item in initial_array] ## creates array from initial array/list, getting the first character of each item in the initial array
    ##print(first_chars), confirms list/array was created correctly
    our_initials = ".".join(first_chars) ## creates variable holding the initials from the list, separated by a "."
    ##print(our_initials), confirms string was created correctly 
    final_initials = our_initials + "." ## creates variable to hold initials, and an end "."
    print(final_initials) ## confirms correct answer 
    

    return final_initials ## returns final initials answer 




get_initials("Tommy Millwood") ##should return "T.M.".
get_initials("Savanna Puddlesplash") ##should return "S.P.".
get_initials("Frances Cowell Conrad") ##should return "F.C.C.".
get_initials("Dragon") ##should return "D.".
get_initials("Dorothy Vera Clump Haverstock Norris") ##should return "D.V.C.H.N.".