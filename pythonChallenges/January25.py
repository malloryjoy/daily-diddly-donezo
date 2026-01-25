##Given a string representing the width and height of an image, and a number to scale the image, return the scaled width 
##and height.

##The input string is in the format "WxH". For example, "800x600".
##The scale is a number to multiply the width and height by.
##Return the scaled dimensions in the same "WxH" format. 


def scale_image(size, scale): #creates function that takes size and scale as parameters
    mylist = size.split("x") #creates an array of the values given in the size parameter 
    ##print(mylist[0]) - confirms that array separation completed 
    width = int(mylist[0]) #sets width value to be equal to first item 
    length = int(mylist[1]) #sets length value to be equal to second item
    #print(width) - checks that the width variable is accurate
    #print(length) - checks that the length variable is accurate 
    newWidth = round(width*scale) #creates a new variable that rounds the width multiplied by the provided scale value
    newLength = round(length*scale) #creates a new variable that rounds the length multiplied by the provided scale value
    #print(newWidth) - checks that the newWidth variable is accurate
    #print(newLength) - checks that the newLength variable is accurate 
    sizeConvert = f"{newWidth}x{newLength}" #establishes sizeConvert as the converted variable, as a properly formatted string
    print(sizeConvert) #checks that sizeConvert is the correct answer 
    

    return sizeConvert #returns sizeConvert as correct answer 