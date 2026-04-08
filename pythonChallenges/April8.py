## Given an array of sequential integers, with multiples of 3 and 5 replaced, determine if it's a valid FizzBuzz sequence.

## In a valid FizzBuzz sequence:

## Multiples of 3 are replaced with "Fizz".
## Multiples of 5 are replaced with "Buzz".
## Multiples of both 3 and 5 are replaced with "FizzBuzz".
## All other numbers remain as integers.



def is_fizz_buzz(arr):
    start = None ## Create blank starting value 
    for i, item in enumerate(arr): ## create a loop for items in the array 
        if type(item) is int: ## if the array item is an integer
            start = item - i ## start value is the item in the array - the item
            break
    if start is None: ## if the start value stays None, return False 
        return False
    
    for i, item in enumerate(arr): ## create a loop for items in the array 
        expected_number = start + i ## create variable for start value plus value in i 
        expected_value = None ## create variable setting the expected value as None 
        
        if expected_number % 15 == 0: ## if else statement to confirm the corresponding Fizz, Buzz, and FizzBuzz integers have the correct operating integers
            expected_value = "FizzBuzz"
        elif expected_number % 3 == 0:
            expected_value = "Fizz"
        elif expected_number % 5 == 0:
            expected_value = "Buzz"
        else:
            expected_value = expected_number ## if the values are not in the associated Fizz, Buzz, or FizzBuzz integers, expected value should be the same as the expected number 
        
        if item != expected_value: ## if the array item does not equal the expected value, the array is invalid 
            return False
    
    return True ## returns true if the array is valid 
    




is_fizz_buzz([1, 2, "Fizz", 4, "Buzz"]) ##should return True.
is_fizz_buzz([13, 14, "FizzBuzz", 16, 17]) ##should return True.
is_fizz_buzz([1, 2, "Fizz", 4, 5]) ##should return False.
is_fizz_buzz(["FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]) ##should return True.
is_fizz_buzz([1, 2, "Fizz", "Buzz", 5]) ##should return False.