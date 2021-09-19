const isVowelRegex = new RegExp('[AEIOU]');
const choseLetter = function (str) {
    let letter = ''
    let consonantMax = 0
    let vowelMax = 0
    let consonantNumber = 0
    let vowelNumber = 0
    let vowel = ''
    let consonant = ''
    const data = {}
    for (let i = 0; str.length > i; i++) {
        if (data[str[i]])
            data[str[i]]++
        else
            data[str[i]] = 1
        if (isVowelRegex.test(str[i])) {
            if (vowelMax < data[str[i]]) {
                vowelMax = data[str[i]]
                vowel = str[i]
            }
            vowelNumber++;
        } else {
            if (consonantMax < data[str[i]]) {
                consonantMax = data[str[i]]
                consonant = str[i]
            }
            consonantNumber++;
        }
    }
    if (vowelMax === consonantMax) {
        if (vowelNumber < consonantNumber) {
            letter = vowel
        } else {
            letter = consonant
        }
    } else {
        letter = vowelNumber < consonantNumber ? consonant : vowel
    }
    return letter;
}

module.exports = {
    choseLetter
}