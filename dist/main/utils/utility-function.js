"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumber = exports.randomNumNot0 = exports.errorMessage = exports.typeErrorMessage = void 0;
function typeErrorMessage(param, type = '') {
    return `TypeError: ${param} is not ${type === 'object' || type === 'undefined' ? 'an' : 'a'} ${type}. The parameter should a be of type ${type}, but ${typeof (param)} is passesd. See the documentation @ https://github.com/uniqueiyke/serial-pin-generator#readme`;
}
exports.typeErrorMessage = typeErrorMessage;
function errorMessage(errMsg) {
    return `Error: ${errMsg}. Something migth be wrong. Check your code. See the documentation @ https://github.com/uniqueiyke/serial-pin-generator#readme`;
}
exports.errorMessage = errorMessage;
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
exports.randomNumNot0 = randomNumNot0;
/**
 * Generate a random number with a specified number of digits
 * @param {number} numOfDigits
 * @returns number
 */
function randomNumber(numOfDigits) {
    let num = `${Math.floor(randomNumNot0() * Math.pow(10, numOfDigits))}`;
    if (num.length < numOfDigits) {
        num = num.padEnd(numOfDigits, Math.floor(Math.random() * 10).toString());
    }
    return Number(num);
}
exports.randomNumber = randomNumber;
//# sourceMappingURL=utility-function.js.map