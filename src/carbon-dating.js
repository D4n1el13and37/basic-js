const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;//
const HALF_LIFE_PERIOD = 5730;//период полураспада

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let parsed = parseFloat(sampleActivity);
  if(typeof sampleActivity !== "string" || Number.isNaN(parsed) || parsed <= 0 || !isFinite(parsed) || sampleActivity > MODERN_ACTIVITY) {
    return false;
  }
  //solve with: https://www.kapitza.ras.ru/~glazkov/students/isotope-dating.pdf
  return Math.ceil(HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY / parsed));
}

module.exports = {
  dateSample,
};
