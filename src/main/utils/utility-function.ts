import { optionInterface } from "../interfaces/interfaces";

export function typeErrorMessage(param: optionInterface, type='') {
    return `TypeError: ${param} is not ${type === 'object' || type === 'undefined' ? 'an' : 'a'} ${type}. The parameter should a be of type ${type}, but ${typeof(param)} is passesd. See the documentation @ https://github.com/uniqueiyke/serial-pin-generator#readme`
}

export function errorMessage(errMsg: string) {
    return `Error: ${errMsg}. Something migth be wrong. Check your code. See the documentation @ https://github.com/uniqueiyke/serial-pin-generator#readme`
}

/**
 * Get a random number; 0 < number < 1
 * @returns number
 */
export function randomNumNot0() {
    let rand: number; 
    do {
        rand = Math.random();
    } while (rand === 0);
    
    return rand;
}

/**
 * Generate a random number with a specified number of digits
 * @param {number} numOfDigits 
 * @returns number
 */
export function randomNumber(numOfDigits: number) {
    let num = `${Math.floor(randomNumNot0() * Math.pow(10, numOfDigits))}`;
    if(num.length < numOfDigits){
        num = num.padEnd(numOfDigits, Math.floor(Math.random() * 10).toString());
    }
    return Number(num);
}