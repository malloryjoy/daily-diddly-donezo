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





from datetime import datetime, timezone


def get_day_of_week(timestamp):
    dt = datetime.fromtimestamp(timestamp / 1000.0, tz=timezone.utc)
    print(dt)
    weekday = dt.strftime('%A')
    print(weekday)
    return weekday


