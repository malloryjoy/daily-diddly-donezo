
// Given the snow depth and slope of a mountain, determine if there's an avalanche risk.

// The snow depth values are "Shallow", "Moderate", or "Deep".
// Slope values are "Gentle", "Steep", or "Very Steep".
// Return "Safe" or "Risky" based on this table:

// "Shallow"	"Moderate"	"Deep"
// "Gentle"	"Safe"	"Safe"	"Safe"
// "Steep"	"Safe"	"Risky"	"Risky"
// "Very Steep"	"Safe"	"Risky"	"Risky"




function avalancheRisk(snowDepth, slope) {
    let avRisk = "";
    if (slope == "Gentle" || snowDepth == "Shallow" ){
       avRisk = "Safe"
    } else{
       avRisk = "Risky";
    }
    
    console.log(avRisk)
    return avRisk;
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
  