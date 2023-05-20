function typeErrorMessage(param, type='') {
    return `TypeError: ${param} is not ${type === 'object' || type === 'undefined' ? 'an' : 'a'} ${type}. The parameter should a be of type ${type}, but ${typeof(param)} is passesd. See the documentation @ https://github.com/uniqueiyke/serial-pin-generator#readme`
}

function errorMessage(errMsg) {
    return `Error: ${errMsg}. Something migth be wrong. Check your code. See the documentation @ https://github.com/uniqueiyke/serial-pin-generator#readme`
}

/**
 * Get a random number; 0 < number < 1
 * @returns number
 */
function randomNumNot0() {
    let rand; 
    do {
        rand = Math.random();
    } while (rand === 0);
    
    return rand;
}

module.exports = {typeErrorMessage, errorMessage, randomNumNot0}