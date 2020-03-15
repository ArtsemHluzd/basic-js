const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  // if (typeof sampleActivity != "string" || isNaN(sampleActivity) == true) return false;

  if (typeof sampleActivity != "string") return false;
  let sampleActivityNumber = parseFloat(sampleActivity);
  if (isNaN(sampleActivityNumber) == true || sampleActivityNumber <= 0 || sampleActivityNumber > 15) return false;

  let result = (Math.log(MODERN_ACTIVITY/sampleActivityNumber)/0.00012094);
  return Math.ceil(result);
};

// 22392

//3.838
//2.1528404/HALF_LIFE_PERIOD