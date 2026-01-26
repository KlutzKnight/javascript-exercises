const leapYears = function(year) {
    if( year % 4 == 0 && ( year % 100 != 0 || year % 400 == 0 ) )
        return true;
    return false;

    // let isYearDivisibleByFour = (year % 4 == 0);
    // let isCentury = (year % 100 == 0);
    // let isYearDivisibleByFourHundred = (year % 400 == 0);

    // if( isYearDivisibleByFour && ( !isCentury || isYearDivisibleByFourHundred ) )
    //     return true;
    // return false;
};

// Do not edit below this line
module.exports = leapYears;
