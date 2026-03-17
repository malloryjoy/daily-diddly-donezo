## Given an integer representing the number of years a couple has been married, return their most recent anniversary milestone according to this chart:

## Years Married	Milestone
## 1	"Paper"
## 5	"Wood"
## 10	"Tin"
## 25	"Silver"
## 40	"Ruby"
## 50	"Gold"
## 60	"Diamond"
## 70	"Platinum"
## If they haven't reached the first milestone, return "Newlyweds".


def get_milestone(years):
    milestone = ""
    if years < 1:
        milestone = "Newlyweds"
    elif years >= 1 and years < 5:
        milestone = "Paper"
    elif years >= 5 and years < 9:
        milestone = "Wood"
    elif years >= 10 and years < 25:
        milestone = "Tin"
    elif years >=25 and years < 40:
        milestone = "Silver"
    elif years >= 40 and years < 50:
        milestone = "Ruby"
    elif years >=50 and years < 60:
        milestone = "Gold"
    elif years >=60 and years < 70:
        milestone = "Diamond"
    elif years >= 70:
        milestone = "Platinum" 

    print(milestone)
    return milestone





get_milestone(0)  ##should return "Newlyweds".
get_milestone(1)  ##should return "Paper".
get_milestone(8)  ##should return "Wood".
get_milestone(10) ##should return "Tin".
get_milestone(26) ##should return "Silver".
get_milestone(45) ##should return "Ruby".
get_milestone(50) ##should return "Gold".
get_milestone(64) ##should return "Diamond".
get_milestone(71) ##should return "Platinum"