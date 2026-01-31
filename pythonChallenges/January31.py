##Given a date string in the format "YYYY-MM-DD", return the zodiac sign for that date using the following chart:

##Date Range	Zodiac Sign
##March 21 - April 19	"Aries"
##April 20 - May 20	"Taurus"
##May 21 - June 20	"Gemini"
##June 21 - July 22	"Cancer"
##July 23 - August 22	"Leo"
##August 23 - September 22	"Virgo"
##September 23 - October 22	"Libra"
##October 23 - November 21	"Scorpio"
##November 22 - December 21	"Sagittarius"
##December 22 - January 19	"Capricorn"
##January 20 - February 18	"Aquarius"
##February 19 - March 20	"Pisces"
##Zodiac signs are based only on the month and day, you can ignore the year. */



def get_sign(date_str): ##Create function that accepts date string as a parameter 
    date_List = date_str.split("-") ##converts date string to a list, split by "-"
    ##print(date_List), establishes correct answer
    date = int(date_List[2]) ## assigns the date value as a number
    month = date_List[1] ##assigns the month value as an item 
    ##print(date), confirms the correct answer
    ##print(month), confirms the correct answer 
    star_sign = "" ##creates empty item for starsign
    if (month == "01" and date >= 20) or (month == "02" and date <= 18): ##establishes if/else statement for each possible outcome 
      star_sign = "Aquarius"
    elif (month == "02" and date >= 19) or (month == "03" and date <= 20): 
      star_sign = "Pisces"
    elif (month == "03" and date >= 21) or (month == "04" and date <= 19):
      star_sign = "Aries"
    elif (month == "04" and date >= 20) or (month == "05" and date <= 20):
      star_sign = "Taurus"
    elif (month == "05" and date >= 21) or (month == "06" and date <= 20):
      star_sign = "Gemini"
    elif (month == "06" and date >= 21) or (month == "07" and date <= 22):
      star_sign = "Cancer"
    elif (month == "07" and date >= 23) or (month == "08" and date <= 22):
      star_sign = "Leo"
    elif (month == "08" and date >= 23) or (month == "09" and date <= 22):
      star_sign = "Virgo"
    elif (month == "09" and date >= 23) or (month == "10" and date <= 22):
      star_sign = "Libra"
    elif (month == "10" and date >= 23) or (month == "11" and date <= 21):
      star_sign = "Scorpio"
    elif (month == "11" and date >= 22) or (month == "12" and date <= 21):
      star_sign = "Sagittarius"
    elif (month == "12" and date >= 22) or (month == "01" and date <= 19):
      star_sign = "Capricorn"
    
    
    print(star_sign) ##confirms correct answer 
    return (star_sign) ##returns correct answer


get_sign("2026-01-31") #should return "Aquarius".
get_sign("2001-06-10") #should return "Gemini".
get_sign("1985-09-07") #should return "Virgo".
get_sign("2023-03-19") #should return "Pisces".
get_sign("2045-11-05") #should return "Scorpio".
get_sign("1985-12-06") #should return "Sagittarius".
get_sign("2025-12-30") #should return "Capricorn".
get_sign("2018-10-08") #should return "Libra".
get_sign("1958-05-04") #should return "Taurus"