const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let original_array = [...arr];
  let sorted_array = arr.sort(function (a,b) {
    return (a - b);
  });
  for(let i = 0; i < original_array.length - 1; i ++) {
    if (original_array[i] === -1) {
      let index = sorted_array.indexOf(-1);
      sorted_array.splice(index, 1);
    }
  }
  for(let j = 0; j < original_array.length - 1; j ++) {
    if (original_array[j] === -1) {
      sorted_array.splice(j, 0, -1);
    }
  }
  return sorted_array;
}

module.exports = {
  sortByHeight
};
