## Given two strings for the location of two rooks on a chess board, determine if they can attack each other.

## A standard chessboard is 8x8, with columns labeled A through H (left to right) and rows labeled 1 through 8 (bottom to top). Rooks can move as many squares as they want in a horizontal or vertical direction. So if they are on the same row or column, they can attack each other.


def rook_attack(rook1, rook2):
    rook1_list = list(rook1) 
    rook2_list = list(rook2)
    print(rook1_list)
    print(rook2_list)
    is_chess = True
    if rook1_list[0] == rook2_list[0] or rook1_list[1] == rook2_list[1]:
        is_chess = True
    else:
        is_chess = False
    print(is_chess)

    return is_chess




rook_attack("A1", "A8") ##should return true.
rook_attack("B4", "F4") ##should return true.
rook_attack("E3", "D4") ##should return false.
rook_attack("H7", "F6") ##should return false.