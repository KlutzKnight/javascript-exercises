function isAlphaNumeric(str) {
  return str.match(/^[a-zA-Z0-9]+$/i) !== null;
}


const palindromes = function (str) {
    let reverse = "";
    for(let i = str.length - 1; i >= 0; i--) {            
        reverse += str[i];
    }
    
    const strAlNum = str.replace(/[^a-zA-Z0-9]/g, '')
    const reverseAlNum = reverse.replace(/[^a-zA-Z0-9]/g, '')
    return reverseAlNum.toLowerCase() == strAlNum.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;