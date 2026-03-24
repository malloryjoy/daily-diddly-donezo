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
from datetime import date, time, datetime ## import necessary libraries, ie math and dates

def calculate_parking_fee(park_time, pickup_time):
    start_array = park_time.split(":") ## create an array from splitting the hours and minutes of the park time 
    start_hour = int(start_array[0]) ## creates an integer value for the hours of the start time
    start_minute = int(start_array[1]) ## creates an integer value for the minutes of the start time
    pickup_array = pickup_time.split(":") ## create an array from splitting the hours and minutes of the pickup time 
    specific_date = date(2026, 3, 23) ## creates a date to use for the start day
    specific_start_time = time(start_hour,start_minute) ## creates specific time for the start of the parking use 
    ## print(specific_start_time), confirm correct specific time
    start_date = datetime.combine(specific_date,specific_start_time) ## creates start date object for the specific date and start time 
    ## print(start_date), confirms correct start date
    end_hour = int(pickup_array[0]) ## creates an integer value for the hours of the pickup time
    end_minute = int(pickup_array[1]) ## creates an integer value for the minutes of the pickup time
    specific_end_time = time(end_hour,end_minute) ## creates specific time for the end of the parking use 
    new_date = date(2026, 3, 24) ## creates end date object for the specific date and end time
    if start_hour > end_hour or (start_hour == end_hour and start_minute > end_minute): ## if statement for creating an end date based on if the parking occurred overnight
        end_date = datetime.combine(new_date,specific_end_time) ## creates date object using the next day if parking occurred overnight 
    else: 
        end_date = datetime.combine(specific_date,specific_end_time) ## creates date object using the same day if parking did not occur overnight 
    ##print(end_date), confirms correct end date 

    difference = end_date - start_date ## calculates the duration of time between the start time and pickup time for the car  
    hours_difference = math.ceil(difference.total_seconds() / 3600.0) ## converts that duration of time into hours, rounded up to the nearest whole hour 
    ##print(hours_difference), confirms correct horu time 
    start_day = start_date.strftime("%d") ## gets date of starting time 
    end_day = end_date.strftime("%d") ## gets date of ending time 
    cost_num = "", ## creates empty variable for the cost of parking 
    if hours_difference <=1: ## if statement to determine cost of parking, with the cost being five dollars for time duration under one hour 
        cost_num = 5  
    else:
        if start_day != end_day: ## continued/nested if statement if the parking is overnight
            cost_num = ((3 * hours_difference) + 10) ## if the parking is overnight, an additional ten dollars is added 
        else:
            cost_num = 3 * hours_difference ## if the parking is not overnight, the total dollar amount is 3 * number of hours between start and end time 
    cost = f"${cost_num}" ## wraps cost in proper formatting 
    print(cost) ## confirms correct price 
    return cost ## returns correct price 
    
    
    
    




calculate_parking_fee("09:00", "11:00") ##should return "$6".
calculate_parking_fee("10:00", "10:30") ##should return "$5".
calculate_parking_fee("08:10", "10:45") ##should return "$9".
calculate_parking_fee("14:40", "23:10") ##should return "$27".
calculate_parking_fee("18:15", "01:30") ##should return "$34".
calculate_parking_fee("11:11", "11:10") ##should return "$82".