const palindromes = function (str) {
    let strNormalise = 
    str.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
    let str1 = strNormalise.split('').reverse().join('');
    return str1 === strNormalise
}
// Do not edit below this line
module.exports = palindromes;
