##Given an array of exam scores (numbers), return the average score in form of a letter grade according to 
##the following chart:

##      Average Score	Letter Grade
##      97-100	        "A+"
##      93-96	        "A"
##      90-92	        "A−"
##      87-89	        "B+"
##      83-86	        "B"
##      80-82	        "B-"
##      77-79	        "C+"
##      73–76	        "C"
##      70-72	        "C-"
##      67-69	        "D+"
##      63-66	        "D"
##      60–62	        "D-"
##      below 60       	"F"

## Calculate the average by adding all scores in the array and dividing by the total number of scores.


##      1. getAverageGrade([92, 91, 90, 94, 89, 93]) should return "A-".
##      2. getAverageGrade([84, 89, 85, 100, 91, 88, 79]) should return "B+".
##      3. getAverageGrade([63, 69, 65, 66, 71, 64, 65]) should return "D".
##      4. getAverageGrade([97, 98, 99, 100, 96, 97, 98, 99, 100]) should return "A+".
##      5. getAverageGrade([75, 100, 88, 79, 80, 78, 64, 60]) should return "C+".
##      6. getAverageGrade([45, 48, 50, 52, 100, 54, 56, 58, 59]) should return "F".



import math ##import math module 


def get_average_grade(scores):
    meanScore = math.floor(sum(scores) / len(scores)); ## declare value for average of scores, rounded down to nearest whole number
    print (meanScore) ## check that the value is correct
    letterGrade =""; ## declare letterGrade as an empty string value
    if meanScore >= 97 and meanScore <= 100: ## create if/elif statement for all values/corresponding letter grades
        letterGrade="A+";
        print("A+") ## check to ensure selected letterGrade is correct
    elif meanScore >= 93 and meanScore <= 96:
        letterGrade="A";
        print("A");
    elif meanScore >= 90 and meanScore <= 92:
        letterGrade="A-";
        print("A-");
    elif meanScore >= 87 and meanScore <= 89:
        letterGrade="B+";
        print("B+");
    elif meanScore >= 83 and meanScore <= 86:
        letterGrade="B";
        print("B");
    elif meanScore >= 80 and meanScore <= 82:
        letterGrade="B-";
        print("B-");
    elif meanScore >= 77 and meanScore <= 79:
        letterGrade="C+";
        print("C+");
    elif meanScore >= 73 and meanScore <= 76:
        letterGrade="C";
        print("C");
    elif meanScore >= 70 and meanScore <= 72:
        letterGrade="C-";
        print("C-");  
    elif meanScore >= 67 and meanScore <= 69:
        letterGrade="D+";
        print("D+");  
    elif meanScore >= 63 and meanScore <= 66:
        letterGrade="D";
        print("D"); 
    elif meanScore >= 60 and meanScore <= 62:
        letterGrade="D-";
        print("D-"); 
    elif meanScore <= 59:
        letterGrade="F";
        print("F");         
    return letterGrade; ## return letterGrade


get_average_grade([92, 91, 90, 94, 89, 93])
get_average_grade([84, 89, 85, 100, 91, 88, 79])
get_average_grade([63, 69, 65, 66, 71, 64, 65])
get_average_grade([97, 98, 99, 100, 96, 97, 98, 99, 100])
get_average_grade([75, 100, 88, 79, 80, 78, 64, 60])
get_average_grade([45, 48, 50, 52, 100, 54, 56, 58, 59])