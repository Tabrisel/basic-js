const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let chars = ["A", "B", "C", "D", "E", "F"];
  
  function isOK(item) {
    return ((digits.includes(item[0]) || chars.includes(String(item[0])))&&(digits.includes(item[1]) || chars.includes(String(item[1]))));
  }

  let array = n.split("-");
  return array.every(isOK);
  
}


module.exports = {
  isMAC48Address
};
