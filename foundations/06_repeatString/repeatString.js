const repeatString = function(string, num) {
    let repeatedStrring = "";
    
    if(num < 0) {
        return "ERROR";
    }

    for(let i = 0; i < num; i++) {
        repeatedStrring += string;
    }

    return repeatedStrring;
};

// Do not edit below this line
module.exports = repeatString;
