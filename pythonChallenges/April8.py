## Given an array of sequential integers, with multiples of 3 and 5 replaced, determine if it's a valid FizzBuzz sequence.

## In a valid FizzBuzz sequence:

## Multiples of 3 are replaced with "Fizz".
## Multiples of 5 are replaced with "Buzz".
## Multiples of both 3 and 5 are replaced with "FizzBuzz".
## All other numbers remain as integers.



def is_fizz_buzz(arr):
    start = None
    for i, item in enumerate(arr):
        if type(item) is int:
            start = item - i
            break
    if start is None:
        return False
    
    for i, item in enumerate(arr):
        expected_number = start + i
        expected_value = None
        
        if expected_number % 15 == 0:
            expected_value = "FizzBuzz"
        elif expected_number % 3 == 0:
            expected_value = "Fizz"
        elif expected_number % 5 == 0:
            expected_value = "Buzz"
        else:
            expected_value = expected_number
        
        if item != expected_value:
            return False
    
    return True
    




is_fizz_buzz([1, 2, "Fizz", 4, "Buzz"]) ##should return True.
is_fizz_buzz([13, 14, "FizzBuzz", 16, 17]) ##should return True.
is_fizz_buzz([1, 2, "Fizz", 4, 5]) ##should return False.
is_fizz_buzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]) ##should return True.
is_fizz_buzz([1, 2, "Fizz", "Buzz", 5]) ##should return False.