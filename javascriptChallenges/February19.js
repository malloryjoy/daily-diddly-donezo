
// Given the snow depth and slope of a mountain, determine if there's an avalanche risk.

// The snow depth values are "Shallow", "Moderate", or "Deep".
// Slope values are "Gentle", "Steep", or "Very Steep".
// Return "Safe" or "Risky" based on this table:

// "Shallow"	"Moderate"	"Deep"
// "Gentle"	"Safe"	"Safe"	"Safe"
// "Steep"	"Safe"	"Risky"	"Risky"
// "Very Steep"	"Safe"	"Risky"	"Risky"


/*Something I struggle with as a developer is "overthinking". I started this problem by completing a series of if/else 
possibilities, before eventually realizing I could put everything into a compound if/else expression... and then re-reading the 
prompt and realizing I could simplify it even further! */

function avalancheRisk(snowDepth, slope) { 
    let avRisk = ""; //set up element to hold the avalanche risk 
    if (slope == "Gentle" || snowDepth == "Shallow" ){ //if statement to confirm the avalanche risk, based on whether or not the slope is gentle or the snow depth is shallow
       avRisk = "Safe"
    } else{
       avRisk = "Risky";
    }
    
    console.log(avRisk) //logs/confirms correct answer
    return avRisk; //returns correct answer
  }
  
  avalancheRisk("Shallow", "Gentle") //should return "Safe".
  avalancheRisk("Shallow", "Steep") //should return "Safe".
  avalancheRisk("Shallow", "Very Steep") //should return "Safe".
  avalancheRisk("Moderate", "Gentle") //should return "Safe".
  avalancheRisk("Moderate", "Steep") //should return "Risky".
  avalancheRisk("Moderate", "Very Steep") //should return "Risky".
  avalancheRisk("Deep", "Gentle") //should return "Safe".
  avalancheRisk("Deep", "Steep") //should return "Risky".
  avalancheRisk("Deep", "Very Steep") //should return "Risky"
  