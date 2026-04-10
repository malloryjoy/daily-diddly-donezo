## Given two strings for the location of two rooks on a chess board, determine if they can attack each other.

## A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). Rooks can move as many squares as they want in a horizontal or vertical direction. So if they are on the same row or column, they can attack each other.


def rook_attack(rook1, rook2):
    rook1_list = list(rook1) ## creates list dividing rook1 by character 
    rook2_list = list(rook2) ## creates list dividing rook2 by character
    print(rook1_list) ## logs to confirm list created correctly
    print(rook2_list) ## logs to confirm list created correctly
    is_chess = True ## creates default boolean 
    if rook1_list[0] == rook2_list[0] or rook1_list[1] == rook2_list[1]: ## if else statement declaring that the rooks may attack if either the first or last values of both lists are a match, returning false otherwise
        is_chess = True
    else:
        is_chess = False
    print(is_chess) ## logs to confirm correct answer 

    return is_chess ## returns correct answer 




rook_attack("A1", "A8") ##should return true.
rook_attack("B4", "F4") ##should return true.
rook_attack("E3", "D4") ##should return false.
rook_attack("H7", "F6") ##should return false.