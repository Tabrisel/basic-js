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

  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;

  for (let i = 0; i < repeatTimes; i++) {
    result.push(String(str)); // Преобразование в строку (null и undefined errors)

    for (let j = 0; j < additionRepeatTimes; j++) {
      if (options.addition !== undefined) { // тут тоже на всякий
        result.push(String(options.addition));
      }

      if (j !== additionRepeatTimes - 1) {
        result.push(options.additionSeparator ? options.additionSeparator : '|');
      }
    }

    if (i !== repeatTimes - 1) {
      result.push(options.separator ? options.separator : '+');
    }
  }

  return result.join("");
}

module.exports = {
  repeater
};
