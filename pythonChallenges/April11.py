# Given a string for the location of a rook on a chess board, and another for the location of a bishop, determine if one piece can attack another.
# A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top).

# Rooks can move as many squares as they want in a horizontal or vertical direction.
# Bishops can move as many squares as they want in any diagonal direction.
# One piece can attack another if it can move to the location of that piece. Return:
# "rook" if the rook can attack the bishop.
# "bishop" if the bishop can attack the rook.
# "neither" if neither piece can attack one another.

import math 


def rook_bishop_attack(rook, bishop):
    rook_list = list(rook) ## creates list dividing rook by character 
    bishop_list = list(bishop) ## creates list dividing bishop by character
    ##print(rook_list)
    chess_move = "" ##creates blank variable to hold answer 
    convert_rook = ord(rook_list[0]) - 64 ## creates variable that holds the converted corresponding rook alpha location to numeric location
    convert_bishop = ord(bishop_list[0]) - 64 ## creates variable that holds the converted corresponding bishop alpha location to numeric location
    ##print(convert_rook) 
    ##print(convert_bishop)
    if rook_list[0] == bishop_list[0] or rook_list[1] == bishop_list[1]: ## if else statement that determines if a rook or a bishop (or neither) can attack
        chess_move = "rook"
    elif abs(convert_rook - convert_bishop) == abs(int(rook_list[1]) - int(bishop_list[1])):
        chess_move = "bishop"
    else:
        chess_move = "neither"
    print(chess_move) ## prints to confirm correct answer 
    return chess_move ## returns correct answer 
    
