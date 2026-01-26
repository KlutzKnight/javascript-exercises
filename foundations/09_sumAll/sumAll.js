const sumAll = function(num1, num2) {
    let sum = 0;

    let areIntegers = Number.isInteger(num1) && Number.isInteger(num2);
    let arePositiveIntegers = (areIntegers) && (num1 > 0) && (num2 > 0);

    if(!arePositiveIntegers)
        return "ERROR";

    //Start with the smaller of the two up until the bigger of the two
    let i = Math.min(num1, num2);
    while(i <= Math.max(num1, num2)) {
        sum += i;
        i++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
