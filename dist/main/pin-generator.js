"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_function_1 = require("./utils/utility-function");
/**
 * Generate a random scratch card pin number with a specified number of digits
 * @param {number} numOfDigits
 * @returns number
 */
function generatePin(numOfDigits = 12) {
    if (numOfDigits > 16 && numOfDigits <= 32) {
        const part1 = Math.floor(numOfDigits / 2);
        const part2 = numOfDigits - part1;
        return `${(0, utility_function_1.randomNumber)(part1)}${(0, utility_function_1.randomNumber)(part2)}`;
    }
    else if (numOfDigits > 32 && numOfDigits <= 45) {
        const part1 = Math.floor(numOfDigits / 3);
        const part2 = Math.floor((numOfDigits - part1) / 2);
        const part3 = numOfDigits - (part1 + part2);
        return `${(0, utility_function_1.randomNumber)(part1)}${(0, utility_function_1.randomNumber)(part2)}${(0, utility_function_1.randomNumber)(part3)}`;
    }
    else if (numOfDigits > 45) {
        const part1 = Math.floor(numOfDigits / 4);
        const part2 = Math.floor((numOfDigits - part1) / 3);
        const part3 = Math.floor((numOfDigits - (part1 + part2)) / 2);
        const part4 = numOfDigits - (part1 + part2 + part3);
        return `${(0, utility_function_1.randomNumber)(part1)}${(0, utility_function_1.randomNumber)(part2)}${(0, utility_function_1.randomNumber)(part3)}${(0, utility_function_1.randomNumber)(part4)}`;
    }
    return (0, utility_function_1.randomNumber)(numOfDigits);
}
exports.default = generatePin;
//# sourceMappingURL=pin-generator.js.map