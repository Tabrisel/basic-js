const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */




function repeater(str, options) {

  let result = [];

  for(let i = 0; i < (options.repeatTimes ? options.repeatTimes : 1); i = i + 1) {
    result.push(str);
    for(let j = 0; j < (options.additionRepeatTimes ? options.additionRepeatTimes: 1); j = j + 1) {
    result.push(options.addition ? options.addition: "");
    }
    if (i != options.repeatTimes - 1) {
    result.push(options.separator ? options.separator : '+');
    }
  }
  return result.join("");
}

module.exports = {
  repeater
};
