const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
   let value = email.split("");
   let index = value.lastIndexOf("@");
   return (value.slice(index + 1, value.length)).join("");
}

module.exports = {
  getEmailDomain
};
