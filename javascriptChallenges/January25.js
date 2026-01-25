/*Given a string representing the width and height of an image, and a number to scale the image, return the scaled width 
and height.

The input string is in the format "WxH". For example, "800x600".
The scale is a number to multiply the width and height by.
Return the scaled dimensions in the same "WxH" format. */

function scaleImage(size, scale) { //establish function that takes size and scale as parameters
    let iArray = size.split("x"); //creates an array using the values provided in the size  
    let width = iArray[0] * scale; //creates a variable using the first item in the array (width)
    let length = iArray[1] * scale; //creates a variable using the second item in the array (length)
    //console.log(iArray); to test array line works 
    //console.log(width); to test that the width value works 
    //console.log(length); to test that the length value works 
    let sizeConvert = width + "x" + length; //creates variable that establishes the answer as the width "multiplied" by the length
    console.log(sizeConvert); //console.log that checks function works 
    return sizeConvert; //return correct answer 
  }
  
  scaleImage("800x600", 2) //should return "1600x1200".
  scaleImage("100x100", 10) //should return "1000x1000".
  scaleImage("1024x768", 0.5) //should return "512x384".
  scaleImage("300x200", 1.5) //should return "450x300".