def get_bingo_letter(n):
    ntoL = "";
    if n >= 1 and n <= 15:
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
        ntoL = "ERROR";
    print(ntoL);
    return ntoL


get_bingo_letter(75); ##should return "0".
get_bingo_letter(54); ##should return "G".
get_bingo_letter(38); ##should return "N".
get_bingo_letter(25); ##should return "I".
get_bingo_letter(11); ##should return "B".
