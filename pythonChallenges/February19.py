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
