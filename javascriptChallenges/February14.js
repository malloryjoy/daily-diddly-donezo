// Given a string representing the curves on a skeleton track, determine the difficulty of the track.

// The given string will only consist of the letters:

// "L" for a left turn
// "R" for a right turn
// "S" for a straight segment
// Each direction change adds 15 points (an "L" followed by an "R" or vice versa).

// All other curves add 5 points each (all other "L" or "R" characters).

// Straight segments add 0 points.

// The difficulty of the track is based on the total score. Return:

// "Easy" if the total is 0 - 100
// "Medium" if the total is 101-200
// "Hard" if the total is over 200

function getDifficulty(track) {
    let totalPoints = 0;
  
    for (let i = 0; i < track.length; i++) {
      const char = track[i];
  
      if (char === 'L' || char === 'R') {
        totalPoints += 5; // all L/Rs get 5 points
      }
      // straight 'S' is 0 points, do nothing
    }
  
    // now count direction changes and add extra 10 per change
    for (let i = 0; i < track.length - 1; i++) {
      const first = track[i];
      const second = track[i + 1];
  
      if ((first === 'L' && second === 'R') || (first === 'R' && second === 'L')) {
        totalPoints += 10; // add extra to make it 15 total per change
      }
    }
  
    if (totalPoints <= 100) return 'Easy';
    if (totalPoints <= 200) return 'Medium';
    return 'Hard';
  }
  
  
  getDifficulty("SLSLLSRRLSRLRL") //should return "Easy".
  getDifficulty("LLRSLRLRSLLRLRSLRRLRSRLLS") //should return "Hard".
  getDifficulty("SRRRRLSLLRLRSSRLSRL") //should return "Medium".
  getDifficulty("LSRLRLSRLRLSLRSLRLLRLSRLRLRSL") //should return "Hard".
  getDifficulty("SLLSSLRLSLSLRSLSSLRL") //should return "Medium".
  getDifficulty("SRSLSRSLSRRSLSRSRSLSRLSRSR") //should return "Easy".