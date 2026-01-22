import math


def get_average_grade(scores):
    meanScore = math.floor(sum(scores) / len(scores));
    print (meanScore)
    letterGrade ="";
    if meanScore >= 97 and meanScore <= 100:
        letterGrade="A+";
        print("A+")
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
    return letterGrade;


get_average_grade([92, 91, 90, 94, 89, 93])
get_average_grade([84, 89, 85, 100, 91, 88, 79])
get_average_grade([63, 69, 65, 66, 71, 64, 65])
get_average_grade([97, 98, 99, 100, 96, 97, 98, 99, 100])
get_average_grade([75, 100, 88, 79, 80, 78, 64, 60])
get_average_grade([45, 48, 50, 52, 100, 54, 56, 58, 59])