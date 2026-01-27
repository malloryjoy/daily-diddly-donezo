##Given an integer, return a string based on the following rules:

##If the number is divisible by 3, return "Fizz".
##If the number is divisible by 5, return "Buzz".
##If the number is divisible by both 3 and 5, return "FizzBuzz".
##Otherwise, return the given number as a string.

def fizz_buzz_mini(n):
    fizzbo = ""
    if n%5==0 and n%3==0:
    	fizzbo = "FizzBuzz"
    elif n%5==0:
        fizzbo = "Buzz"
    elif n%3==0:
        fizzbo = "Fizz"
    else:
        fizzbo = str(n)
    print(fizzbo)
    return fizzbo



fizz_buzz_mini(3) ##should return "Fizz".
fizz_buzz_mini(4) ##should return "4"
fizz_buzz_mini(35) ##should return "Buzz".
fizz_buzz_mini(75) ##should return "FizzBuzz"
fizz_buzz_mini(98) ##should return "98"