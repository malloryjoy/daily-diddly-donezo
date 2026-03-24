## Given two strings representing the time you parked your car and the time you picked it up, calculate the parking fee.

## The given strings will be in the format "HH:MM" using a 24-hour clock. So "14:00" is 2pm for example.
## The first string will be the time you parked your car, and the second will be the time you picked it up.
## If the pickup time is earlier than the entry time, it means the parking spanned past midnight into the next day.
## Fee rules:

## Each hour parked costs $3.
## Partial hours are rounded up to the next full hour.
## If the parking spans overnight (past midnight), an additional $10 overnight fee is applied.
## There is a minimum fee of $5 (only used if the total would be less than $5).
## Return the total cost in the format "$cost", "$5" for example.

import math
from datetime import date, time, datetime

def calculate_parking_fee(park_time, pickup_time):
    start_array = park_time.split(":")
    start_hour = int(start_array[0])
    start_minute = int(start_array[1])
    pickup_array = pickup_time.split(":")
    specific_date = date(2026, 3, 23)
    specific_start_time = time(start_hour,start_minute)
    ##print(specific_start_time)
    start_date = datetime.combine(specific_date,specific_start_time)
    ##print(start_date)
    end_hour = int(pickup_array[0])
    end_minute = int(pickup_array[1])
    specific_end_time = time(end_hour,end_minute)
    new_date = date(2026, 3, 24)
    if start_hour > end_hour or (start_hour == end_hour and start_minute > end_minute):
        end_date = datetime.combine(new_date,specific_end_time)
    else: 
        end_date = datetime.combine(specific_date,specific_end_time)
    ##print(end_date)

    difference = end_date - start_date
    hours_difference = math.ceil(difference.total_seconds() / 3600.0)
    ##print(hours_difference)
    start_day = start_date.strftime("%d")
    end_day = end_date.strftime("%d")
    cost_num = "",
    if hours_difference <=1:
        cost_num = 5 
    else:
        if start_day != end_day:
            cost_num = ((3 * hours_difference) + 10)
        else:
            cost_num = 3 * hours_difference
    cost = f"${cost_num}"
    print(cost)
    return cost
    
    
    




calculate_parking_fee("09:00", "11:00") ##should return "$6".
calculate_parking_fee("10:00", "10:30") ##should return "$5".
calculate_parking_fee("08:10", "10:45") ##should return "$9".
calculate_parking_fee("14:40", "23:10") ##should return "$27".
calculate_parking_fee("18:15", "01:30") ##should return "$34".
calculate_parking_fee("11:11", "11:10") ##should return "$82".