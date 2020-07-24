/**
 * Get a random number; 0 < number < 1
 * @returns number
 */
function randomNumNot0() {
    let rand = Math.random()
    if(rand !== 0)
        return rand;
    randomNumNot0();
}

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
function generatePin(numOfDigits = 10) {
    if(numOfDigits > 16){
        const part1 = Math.floor(numOfDigits / 2);
        const part2 = numOfDigits - part1;
        return `${randomNumber(part1)}${randomNumber(part2)}`;
    }
    return randomNumber(numOfDigits);
}

module.exports = generatePin;