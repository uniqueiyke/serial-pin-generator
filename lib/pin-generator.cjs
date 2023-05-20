const { randomNumNot0 } = require("./util-funcs.cjs");

/**
 * Generate a random number with a specified number of digits
 * @param {number} numOfDigits 
 * @returns number
 */
function randomNumber(numOfDigits) {
    let num = `${Math.floor(randomNumNot0() * Math.pow(10, numOfDigits))}`;
    if(num.length < numOfDigits){
        num = num.padEnd(numOfDigits, Math.floor(Math.random() * 10));
    }
    return Number(num);
}

/**
 * Generate a random scratch card pin number with a specified number of digits
 * @param {number} numOfDigits 
 * @returns number
 */
function generatePin(numOfDigits = 12) {
    if(numOfDigits > 16 && numOfDigits  <= 32){
        const part1 = Math.floor(numOfDigits / 2);
        const part2 = numOfDigits - part1;
        return `${randomNumber(part1)}${randomNumber(part2)}`;
    }
    else if(numOfDigits > 32 && numOfDigits <= 45) {
        const part1 = Math.floor(numOfDigits / 3);
        const part2 = Math.floor((numOfDigits - part1) / 2);
        const part3 = numOfDigits - (part1 + part2);
        return `${randomNumber(part1)}${randomNumber(part2)}${randomNumber(part3)}`;
    }else if(numOfDigits > 45) {
        const part1 = Math.floor(numOfDigits / 4);
        const part2 = Math.floor((numOfDigits - part1) / 3);
        const part3 = Math.floor((numOfDigits - (part1 + part2)) / 2 );
        const part4 = numOfDigits - (part1 + part2 + part3);
        return `${randomNumber(part1)}${randomNumber(part2)}${randomNumber(part3)}${randomNumber(part4)}`;
    }
    return randomNumber(numOfDigits);
}

module.exports = generatePin;