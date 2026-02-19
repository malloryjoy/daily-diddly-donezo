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
  