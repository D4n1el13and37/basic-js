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
  const origingalRepeat = options.repeatTimes;
  const origingalSeparator = options.separator;
  const addString = options.addition;
  const addStringRepeatTime = options.additionRepeatTimes;
  const addSeparator = options.additionSeparator;

  let answer = str; //в ответ записали строку
  let addition = addString; //по анналогии создаем добавку
  
  /**
   * считаем добавку(её вид)
   */
  for (let i = 1; i < addStringRepeatTime; i++) {
    if (addSeparator) {
      addition += `${addSeparator}${addString}`
    } else {
      addition += `|${addString}`;
    }
  }
  
  //если добавка есть сразу ее добавляем
  if (addition) {
    answer += addition
  }

  //высчитываем итог строки добавляя разделители и добавку по необходимости
  for (let i = 1; i < origingalRepeat; i++) {
    if (origingalSeparator) {
      answer += `${origingalSeparator}${str}`
    } else {
      answer += `+${str}`;
    }

    if (addition) {
      answer += addition
    }
  }

  return answer;
}

module.exports = {
  repeater
};
