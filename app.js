const choseLetter = require('./choseLetter')
const isVowelRegex = new RegExp('[AEIOU]');
const isConsonantRegex = new RegExp('[^AEIOU]');

const banana = function (str) {
  const isWord = new RegExp('[^a-zA-Z]');
  if (isWord.test(str))
    return 'Le mot ne doit être composé que de lettres'
  if (str.length < 0) {
    return 'Vous devez mettre un mot'
  }
  const strUpper = str.toUpperCase();
  let letter = choseLetter.choseLetter(strUpper)
  const [finalStr, count] = isVowelRegex.test(letter) ? newStr(strUpper, letter, isVowelRegex) : newStr(strUpper, letter, isConsonantRegex);
  console.log(count)
  return finalStr
};

const newStr = function (str, letter, regex) {
  let newStr = ''
  let count = 0;
  for (let i = 0; str.length > i; i++) {
    if (str[i] !== letter) {
      if (regex.test(str[i])) {
        count += 2;
      } else {
        count++;
      }
    }
    newStr += letter
  }
  return [newStr, count]
}

console.log(banana("SUFIANE"));