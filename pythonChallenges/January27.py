##Given a timestamp (number of milliseconds since the Unix epoch), return:
##"odd" if the day of the month for that timestamp is odd.
##"even" if the day of the month for that timestamp is even.
##For example, given 1769472000000, a timestamp for January 27th, 2026, return "odd" because the day number (27) 
##is an odd number.

from datetime import datetime, timezone

def odd_or_even_day(timestamp):
    dt_object_utc = datetime.fromtimestamp(timestamp/1000, timezone.utc)
    ##print(dt_object_utc)
    day = dt_object_utc.day
    ##print(day)
    dateDivisible = "even"
    if day%2 != 0:
        dateDivisible = "odd"
    else:
        dateDivisble = "even"
    print(dateDivisible)
    return dateDivisible


odd_or_even_day(1769472000000) ##should return "odd"
odd_or_even_day(1769444440000) ##should return "even"
odd_or_even_day(6739456780000) ##should return "odd"
odd_or_even_day(1) ##should return "odd"
odd_or_even_day(86400000) ##should return "even"