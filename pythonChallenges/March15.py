## Given an array of strings representing chess pieces you still have on the board, calculate the value of the pieces your opponent has captured.

## In chess, you start with 16 pieces:

## Piece	Abbreviation	Quantity	Value
## Pawn	"P"	8	1
## Rook	"R"	2	5
## Knight	"N"	2	3
## Bishop	"B"	2	3
## Queen	"Q"	1	9
## King	"K"	1	0
## The given array will only contain the abbreviations above.
## Any of the 16 pieces not included in the given array have been captured.
## Return the total value of all captured pieces, unless...
## If the King has been captured, return "Checkmate".

def get_captured_value(pieces):
    answer = "" ## Establishes variable to hold the correct answer 
    if "K" not in pieces: ## Establishes if else statement depending on whether or not the array has a "King" in it
      answer = "Checkmate"
    else:
        for i in range(len(pieces)): ## For each item in the pieces array, replace the letter with the corresponding point
            if pieces[i] == "P": 
                pieces[i] = 1
            elif pieces[i] == "R":
                pieces[i] = 5
            elif pieces[i] =="N" or pieces[i] =="B":
                pieces[i] = 3
            elif pieces[i] =="Q":
                pieces[i] = 9
            elif pieces[i] =="K":
                pieces[i] = 0
    
        ##print(pieces), confirms array has been reassigned 
        total = sum(pieces) ## Establishes variable that holds the sum of the variables in the array
        ##print(total), confirms correct total value 
        answer = 39 - total ## Establishes variable that holds the total points available (39) minus the total points in the array
    
    print(answer) ## Confirms the answer variable is correct 
    return answer ## Returns the correct answer 




get_captured_value(["P", "P", "P", "P", "P", "P", "R", "R", "N", "B", "Q", "K"]) ##should return 8.
get_captured_value(["P", "P", "P", "P", "P", "R", "B", "K"]) ##should return 26.
get_captured_value(["K", "P", "P", "N", "P", "P", "R", "P", "B", "P", "N", "B"]) ##should return 16.
get_captured_value(["P", "Q", "N", "P", "P", "B", "K", "P", "R", "R", "P", "P", "B", "P"]) ##should return 4.
get_captured_value(["P", "K"]) ##should return 38.
get_captured_value(["N", "P", "P", "B", "K", "P", "Q", "N", "P", "P", "R", "R", "P", "P", "P", "B"]) ##should return 0.
get_captured_value(["N", "P", "P", "B", "P", "R", "Q", "P", "P", "P", "B"]) ##should return "Checkmate".