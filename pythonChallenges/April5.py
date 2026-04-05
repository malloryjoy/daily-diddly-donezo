## Given a string representing a math equation, determine whether it is correct.

## The left side may contain up to three positive integers and the operators +, -, *, and /.
## The equation will be given in the format: "number operator number = number" (with two or three numbers on the left). For example: "2 + 2 = 4" or "2 + 3 - 1 = 4".
## The right side will always be a single integer.
## Follow standard order of operations: multiplication and division are evaluated before addition and subtraction, from left-to-right.

def is_valid_equation(equation):
    my_answer = False 
    before, separator, after = equation.partition("=")
    ##print(before)
    before_math = eval(before)
    ##print(before_math)
    after_math = int(after)
    ##print(after_math)
    if before_math == after_math:
        my_answer = True
    else:
        my_answer = False
    print(my_answer)



    return my_answer




is_valid_equation("2 + 2 = 4") ##should return True.
is_valid_equation("2 + 3 - 1 = 4") ##should return True.
is_valid_equation("8 / 2 = 4") ##should return True.
is_valid_equation("10 * 5 = 50") ##should return True.
is_valid_equation("2 - 2 = 0") ##should return True.
is_valid_equation("2 + 9 / 3 = 5") ##should return True.
is_valid_equation("20 - 2 * 3 = 14") ##should return True
is_valid_equation("2 + 5 = 6") ## should return False.
is_valid_equation("10 - 2 * 3 = 24") ##should return False.
is_valid_equation("3 + 9 / 3 = 4") ##should return False.