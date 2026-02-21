// Given a trick name consisting of two words, determine if it is a valid freestyle skiing trick name.

// A trick is valid if the first word is in the list of valid first words, and the second word is in the list of valid second words.

// The two words will be separated by a single space.
// Valid first words:

// "Misty"
// "Ghost"
// "Thunder"
// "Solar"
// "Sky"
// "Phantom"
// "Frozen"
// "Polar"
// Valid second words:

// "Twister"
// "Icequake"
// "Avalanche"
// "Vortex"
// "Snowstorm"
// "Frostbite"
// "Blizzard"
// "Shadow"


function isValidTrick(trickName) {
    let trickNameArray = trickName.split(' ');
    //console.log(trickNameArray)
    let firstValid = true;
    let secondValid = true;
    if (trickNameArray[0] == "Ghost" || trickNameArray[0] == "Thunder" || trickNameArray[0] == "Solar" || trickNameArray[0] == "Sky" || trickNameArray[0] == "Phantom" || trickNameArray[0] == "Frozen" || trickNameArray[0] == "Polar"){
      firstValid = true;
    } else{
      firstValid = false;
    }
    //console.log(firstValid);
    if (trickNameArray[1] == "Icequake" || trickNameArray[1] == "Avalanche" || trickNameArray[1] == "Vortex" || trickNameArray[1] == "Snowstorm" || trickNameArray[1] == "Frostbite" || trickNameArray[1] == "Blizzard" || trickNameArray[1] == "Shadow"){
      secondValid = true;
    } else{
      secondValid = false;
    }
    //console.log(firstValid);
    //console.log(secondValid);
    let trickStatus = true; 
    if (firstValid == true && secondValid == true){
      trickStatus = true;
    }else{
      trickStatus = false;
    }
    console.log(trickStatus)
    return trickStatus;
  }
  
  isValidTrick("Polar Vortex") //should return true.
  isValidTrick("Solar Icequake") //should return true.
  isValidTrick("Thunder Blizzard") //should return true.
  isValidTrick("Phantom Frostbite") //should return true.
  isValidTrick("Ghost Avalanche") //should return true.
  isValidTrick("Snowstorm Shadow") //should return false.
  isValidTrick("Solar Sky") //should return false.
