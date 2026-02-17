const findTheOldest = function(people) {
    let oldestPerson = {};
    let oldestPersonAge = 0;
    let currentYear = new Date().getFullYear();

    for(let i = 0; i < people.length; i++) {
        if(people[i].yearOfDeath == undefined)
            currentPersonAge = currentYear - people[i].yearOfBirth;
        else
            currentPersonAge = people[i].yearOfDeath - people[i].yearOfBirth;
        
        if(currentPersonAge > oldestPersonAge) {
            oldestPersonAge = currentPersonAge;
            oldestPerson = people[i];
        }
    }
    
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
