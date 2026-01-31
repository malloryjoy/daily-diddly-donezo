/*Given a date string in the format "YYYY-MM-DD", return the zodiac sign for that date using the following chart:

Date Range	Zodiac Sign
March 21 - April 19	"Aries"
April 20 - May 20	"Taurus"
May 21 - June 20	"Gemini"
June 21 - July 22	"Cancer"
July 23 - August 22	"Leo"
August 23 - September 22	"Virgo"
September 23 - October 22	"Libra"
October 23 - November 21	"Scorpio"
November 22 - December 21	"Sagittarius"
December 22 - January 19	"Capricorn"
January 20 - February 18	"Aquarius"
February 19 - March 20	"Pisces"
Zodiac signs are based only on the month and day, you can ignore the year. */




function getSign(dateStr) {
    let dateStrArr = dateStr.split("-");
    let date = parseInt(dateStrArr[2]);
    let month = dateStrArr[1];
    //console.log(month)
    //console.log(dateStrArr)
    //console.log(date);
    //console.log(month);
    let starSign = "";
    if ((month === "01" && date >= 20) || (month === "02" && date <= 18)){
      starSign = "Aquarius";
    } else if ((month === "02" && date >= 19) || (month === "03" && date <= 20)){
      starSign = "Pisces";
    } else if ((month === "03" && date >= 21) || (month === "04" && date <= 19)){
      starSign = "Aries";
    } else if ((month === "04" && date >= 20) || (month === "05" && date <= 20)){
      starSign = "Taurus";
    } else if ((month === "05" && date >= 21) || (month === "06" && date <= 20)){
      starSign = "Gemini";
    } else if ((month === "06" && date >= 21) || (month === "07" && date <= 22)){
      starSign = "Cancer";
    } else if ((month === "07" && date >= 23) || (month === "08" && date <= 22)){
      starSign = "Leo";
    } else if ((month === "08" && date >= 23) || (month === "09" && date <= 22)){
      starSign = "Virgo";
    } else if ((month === "09" && date >= 23) || (month === "10" && date <= 22)){
      starSign = "Libra";
    } else if ((month === "10" && date >= 23) || (month === "11" && date <= 21)){
      starSign = "Scorpio";
    } else if ((month === "11" && date >= 22) || (month === "12" && date <= 21)){
      starSign = "Sagittarius";
    } else if ((month === "12" && date >= 22) || (month === "01" && date <= 19)){
      starSign = "Capricorn";
    } else{
      starSign = "Something is a miss here!"
    }
    console.log(starSign);
    return starSign;
  }
  
  getSign("2026-01-31") //should return "Aquarius"
  getSign("2001-06-10") //should return "Gemini"
  getSign("2023-03-19") //should return "Pisces"
  getSign("1985-12-06") //should return "Sagittarius"
  
  getSign("2025-12-30") //should return "Capricorn".
  getSign("2018-10-08") //should return "Libra".
  getSign("1958-05-04") //should return "Taurus".