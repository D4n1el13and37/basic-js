const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");
  const discardNext = "--discard-next";
  const discardPrev = "--discard-prev";
  const doubleNext = "--double-next";
  const doublePrev = "--double-prev";
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item === discardNext) {
      i += 2;
      continue;
    }
    if (item === discardPrev) {
      if (i - 1 >= 0) {
        answer.pop();
      }
      continue;
    }
    if (item === doubleNext) {
      if (i + 1 < arr.length) {
        answer.push(arr[i + 1]);
      }
      continue;
    }
    if (item === doublePrev) {
      if (i - 1 >= 0) {
        answer.push(arr[i - 1]);
      }
      continue;
    }
    answer.push(item);
  }
  return answer;
}

module.exports = {
  transform,
};
