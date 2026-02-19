#Given the snow depth and slope of a mountain, determine if there's an avalanche risk.

#The snow depth values are "Shallow", "Moderate", or "Deep".
#Slope values are "Gentle", "Steep", or "Very Steep".
#Return "Safe" or "Risky" based on this table:

#"Shallow"	"Moderate"	"Deep"
#"Gentle"	"Safe"	"Safe"	"Safe"
#"Steep"	"Safe"	"Risky"	"Risky"
#"Very Steep"	"Safe"	"Risky"	"Risky"



def avalanche_risk(snow_depth, slope):
    avRisk ="";
    if slope =="Gentle" or snow_depth == "Shallow":
        avRisk = "Safe"
    else: 
        avRisk = "Risky"
    print(avRisk)
    return avRisk


avalanche_risk("Shallow", "Gentle") ##should return "Safe".
avalanche_risk("Shallow", "Steep") ##should return "Safe".
avalanche_risk("Shallow", "Very Steep") ##should return "Safe".
avalanche_risk("Moderate", "Gentle") ##should return "Safe".
avalanche_risk("Moderate", "Steep") ##should return "Risky".
avalanche_risk("Moderate", "Very Steep") ##should return "Risky".
avalanche_risk("Deep", "Gentle") ##should return "Safe".
avalanche_risk("Deep", "Steep") ##should return "Risky".
avalanche_risk("Deep", "Very Steep") ##should return "Risky"
