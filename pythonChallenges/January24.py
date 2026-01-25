##Given a number, return the bingo letter associated with it (capitalized). Bingo numbers are grouped as follows:

##Letter	Number Range
##"B"	1-15
##"I"	16-30
##"N"	31-45
##"G"	46-60
##"O"	61-75 


def get_bingo_letter(n):
    ntoL = ""; ## Creates empty variable 
    if n >= 1 and n <= 15: ## If/elif statement to return the proper letter for the corresponding number 
        ntoL = "B";  
    elif n >= 16 and n <= 30:
        ntoL = "I";
    elif n >= 31 and n <= 45:
        ntoL = "N";
    elif n >= 46 and n <= 60:
        ntoL = "G";
    elif n >= 61 and n <= 75:
        ntoL = "O";
    else:
        ntoL = "ERROR"; ## Catches error 
    print(ntoL); ## Checks to confirm answer works 
    return ntoL ## Returns correct value 


get_bingo_letter(75); ##should return "0".
get_bingo_letter(54); ##should return "G".
get_bingo_letter(38); ##should return "N".
get_bingo_letter(25); ##should return "I".
get_bingo_letter(11); ##should return "B".
