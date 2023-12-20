const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const a = String(n);
  const answerArr = [];

  for (let i = 0; i < a.length; i++) {
    let head = a.slice(0, i);
    let tail = a.slice(i + 1, a.length);
    let answ = head + tail;
    answerArr.push(answ);
  }
  return Math.max(...answerArr);
}

module.exports = {
  deleteDigit,
};
