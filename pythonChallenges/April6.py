## Given a Unix timestamp in milliseconds, return the day of the week.
## Valid return days are:
## "Sunday"
## "Monday"
## "Tuesday"
## "Wednesday"
## "Thursday"
## "Friday"
## "Saturday"
## Be sure to ignore time zones.





from datetime import datetime, timezone #import date library


def get_day_of_week(timestamp): 
    dt = datetime.fromtimestamp(timestamp / 1000.0, tz=timezone.utc) #variable to hold converted timestamp into date 
    print(dt) #confirmed date is correct 
    weekday = dt.strftime('%A') #create variable to hold the day of the week of the date, converted into a string
    print(weekday) #confirms correct answer 
    return weekday #returns correct answer


