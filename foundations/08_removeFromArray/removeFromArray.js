const removeFromArray = function(array, ...elementsToRemove) {
    //iterate through elementsToRemove to remove each elements
    for(let elem of elementsToRemove) {
        //While array contains elem, Remove it
        while(array.includes(elem)) {
            array.splice(
                array.findIndex( item => (item == elem) ),
                1
            );
        }
    }
    
    return array


    // let newArray = [];

    // array.forEach(
    //     (item) => {
    //         if(!elementsToRemove.includes(item))
    //             newArray.push(item);
    //     }
    // )

    // return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
