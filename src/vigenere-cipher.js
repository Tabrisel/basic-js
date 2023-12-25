const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value;
  }

  encrypt(message, key) {
    //ошибки если нет аргументов
    if ((message === undefined) || (key === undefined)) {
      throw new Error("Incorrect arguments!");
    } else {
      //верхний регистр
      message = message.toUpperCase();
      key = key.toUpperCase();

      let ciphering_message = "";
      let index_key = 0;

      for (let char of message) {
        //проверка на букву и шифрование:
        if (char.match(/[A-Z]/)) {
          let newChar = String.fromCharCode(((char.charCodeAt(0) + key.charCodeAt(index_key)) % 26) + 65);
          ciphering_message += newChar;
          index_key = (index_key + 1) % key.length;
        } else {
          // Иначе - просто добавить;
          ciphering_message += char;
        }
      }

      return this.value ? ciphering_message : ciphering_message.split("").reverse().join("");
    }
  }




  decrypt(encryptedMessage, key) {
    //ошибки если нет аргументов
    if ((encryptedMessage === undefined) || (key === undefined)) {
      throw new Error("Incorrect arguments!");
    } else {
      //верхний регистр
      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase();

      let decrypted_message = "";
      let index_key = 0;

      for (let char of encryptedMessage) {
         //проверка на букву и расшифровка:
        if (char.match(/[A-Z]/)) {
          let newChar = String.fromCharCode(((char.charCodeAt(0) - key.charCodeAt(index_key) + 26) % 26) + 65);
          decrypted_message += newChar;
          index_key = (index_key + 1) % key.length;
        } else {
           // Иначе - просто добавить;
          decrypted_message += char;
        }
      }

      return this.value ? decrypted_message : decrypted_message.split("").reverse().join("");
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
