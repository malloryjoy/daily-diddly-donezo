##Given a timestamp (number of milliseconds since the Unix epoch), return:
##"odd" if the day of the month for that timestamp is odd.
##"even" if the day of the month for that timestamp is even.
##For example, given 1769472000000, a timestamp for January 27th, 2026, return "odd" because the day number (27) 
##is an odd number.

from datetime import datetime, timezone ##imports date and timezone

def odd_or_even_day(timestamp): ## takes timestamp as a parameter 
    dt_object_utc = datetime.fromtimestamp(timestamp/1000, timezone.utc) ##creates object for converted timestamp, accounting for utc
    print(dt_object_utc) ##checks that timestamp conversion is effective
    day = dt_object_utc.day ##isolates the day of the previously created object
    print(day) ##checks that day isolation worked 
    dateDivisible = "even" ##establishes that the default of dateDivisible is "even"
    if day%2 != 0: ## creates if/else statement that determines the setting of dateDivisible
        dateDivisible = "odd"
    else:
        dateDivisble = "even"
    print(dateDivisible) ##checks that dateDivisble returns the correct answer 
    return dateDivisible ##returns the correct answer! 


odd_or_even_day(1769472000000) ##should return "odd"
odd_or_even_day(1769444440000) ##should return "even"
odd_or_even_day(6739456780000) ##should return "odd"
odd_or_even_day(1) ##should return "odd"
odd_or_even_day(86400000) ##should return "even"