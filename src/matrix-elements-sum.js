const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [        row  column
 *  [0, 1, 1, 2],    [0] [0] -> "0"
 *  [0, 5, 0, 0],    [1] [0] -> "0"
 *  [2, 0, 3, 3]     [2] [0] -> "2"
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let count = 0;
    //columns:
  for(let i = 0; i < matrix[0].length; i ++) {
    //and rows in columns:
    for(let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) {
        break
      } else {
      count = count + matrix[j][i];
      }
    }
  }
  return count;
}

module.exports = {
  getMatrixElementsSum
};
