##Given two integers, determine if you can evenly divide the first one by the second one.

def is_evenly_divisible(a, b):
    if a%b == 0:
        answer = True;
    else:
        answer = False;
    print(answer)
    return answer










is_evenly_divisible(4, 2) ##should return True.
is_evenly_divisible(7, 3) ##should return False.
is_evenly_divisible(5, 10) ##should return False.
is_evenly_divisible(48, 6) ##should return True.
is_evenly_divisible(3186, 9) ##should return True.
is_evenly_divisible(4192, 11) ##should return False.


