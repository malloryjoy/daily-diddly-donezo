// Given an integer representing the number of years a couple has been married, return their most recent anniversary milestone according to this chart:

// Years Married	Milestone
// 1	"Paper"
// 5	"Wood"
// 10	"Tin"
// 25	"Silver"
// 40	"Ruby"
// 50	"Gold"
// 60	"Diamond"
// 70	"Platinum"
// If they haven't reached the first milestone, return "Newlyweds".


function getMilestone(years) { 
    let milestone = ""; //create empty variable to hold milestone value
    if (years < 1){ //create if else statements for each milestone 
      milestone = "Newlyweds"
    } else if (years >= 1 && years < 5){
      milestone = "Paper"
    } else if (years >= 5 && years < 9){
      milestone = "Wood"
    } else if (years >= 10 && years < 25){
      milestone = "Tin"
    } else if (years >=25 && years < 40){
      milestone = "Silver"
    } else if (years >= 40 && years < 50){
      milestone = "Ruby"
    } else if (years >=50 && years < 60){
      milestone = "Gold"
    } else if (years >=60 && years < 70){
      milestone = "Diamond"
    } else if (years >= 70){
      milestone ="Platinum"
    }
    console.log(milestone) //log correct answer 
    return milestone; //return correct answer 
  }
  
  
  getMilestone(0) //should return "Newlyweds".
  getMilestone(1) //should return "Paper".
  getMilestone(8) //should return "Wood".
  getMilestone(10) //should return "Tin".
  getMilestone(26) //should return "Silver".
  getMilestone(45) //should return "Ruby".
  getMilestone(50) //should return "Gold".
  getMilestone(64) //should return "Diamond".
  getMilestone(71) //should return "Platinum"