const { NotImplementedError } = require('../extensions/index.js');

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
  let value = String(n);
  let result = [];

  for(let i = 0; i < value.length; i ++) {
    let newNumb = Number(value.slice(0, i) + value.slice(i + 1));
    result.push(newNumb);
  }
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
