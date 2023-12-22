const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(directionRight = true, alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
    this.directionRight = directionRight;
    this.alphabet = alphabet;
  }

  /**
   * @param {String} char letter in alphabet
   * @param {String} key letter from keywords
   * @param {Boolean} encrypt check encrypt or decrypt char
   * @returns encrypted/decrypted char
   */
  charСryptography(char, key, encrypt) {
    const charIdx = this.alphabet.indexOf(char);
    const keyIdx = this.alphabet.indexOf(key);
    const alphaLength = this.alphabet.length;

    if (charIdx === -1) {
      return char;
    }
    const encriptedChar = (charIdx + (encrypt ? 1 : -1) * keyIdx + alphaLength) % alphaLength;
    return this.alphabet[encriptedChar];
  }

  /**
   * @param {String} message message which we would cryptography
   * @param {String} keyPhrase key phrase by which the message is subject to cryptography
   * @param {Boolean} encryption check encrypt or decrypt message
   * @returns {String} cryptography answer
   */
  messageCryptography(message, keyPhrase, encryption) {
    let cryptographyAnswer = "";
    let keyIdx = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i].toUpperCase();
      const keyChar = keyPhrase[keyIdx % keyPhrase.length].toUpperCase();
      const cryptoChar = this.charСryptography(char, keyChar, encryption);
      cryptographyAnswer += cryptoChar;
      
      if (this.alphabet.includes(char)) {
        keyIdx += 1;
      }
    }
    return cryptographyAnswer;
  }

  /**
   * @param {String} phrase message which we shoud encode
   * @param {String} key phrase by which the shoud message is cryptography
   * @returns encoded message
   */
  encrypt(phrase, key) {
    try {
      const encrypted = this.messageCryptography(phrase, key, true);
      return this.directionRight
        ? encrypted
        : encrypted.split("").reverse().join("");
    } catch (e) {
      throw new Error("Incorrect arguments!");
    }
  }

  /**
   * @param {String} phrase message which we shoud decode
   * @param {String} key phrase by which the shoud message is decode
   * @returns decrypted phrase
   */
  decrypt(phrase, key) {
    try {
      const dencrypted = this.messageCryptography(phrase, key, false);
      return this.directionRight
        ? dencrypted
        : dencrypted.split("").reverse().join("");
    } catch (e) {
      throw new Error("Incorrect arguments!");
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
