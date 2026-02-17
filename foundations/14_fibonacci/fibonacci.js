const fibonacci = function(n) {
    if(n < 0)
        return "OOPS"

    if(n < 2)
        return parseInt(n);
    
    let firstFib = 0;
    let secondFib = 1;
    let nextFib;
    for(let i = 2; i <= n; i++) {
        nextFib = firstFib + secondFib;
        firstFib = secondFib;
        secondFib = nextFib;
    }

    return nextFib;
};

// Do not edit below this line
module.exports = fibonacci;
