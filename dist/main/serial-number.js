"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_function_1 = require("./utils/utility-function");
class SerialNumber {
    /**
     * Generate serial numbers
     * @param {string} prefixCharacters
     * @param {object|number} serialNumLength
     */
    constructor(serialNumLength, prefixCharacters = '', padCount) {
        if (serialNumLength.includePrefixLength === true && serialNumLength.length - prefixCharacters.toString().length <= 0) {
            throw Error(`Error: prefixCharacters, (${prefixCharacters}) length should be less than the serial number length (${serialNumLength.length}), but the length , (${prefixCharacters.length}) of the string passed is ${prefixCharacters.toString().length - serialNumLength.length === 0 ? 'the same as' : 'greater than'} the serial number length (${serialNumLength.length})`);
        }
        const totalNumOfDigits = serialNumLength.includePrefixLength === true
            ? serialNumLength.length - prefixCharacters.length
            : serialNumLength.length;
        this.snTotalLength = serialNumLength.includePrefixLength !== true
            ? serialNumLength.length + prefixCharacters.length
            : serialNumLength.length;
        this.prefixCharacters = prefixCharacters.toUpperCase() || this.generatePrefix();
        this.digitDivisions = this.breakDigits(totalNumOfDigits);
        this.numOfDigitsToGen = this.digitDivisions[0];
        this.padCount = padCount;
        if (totalNumOfDigits <= 0) {
            throw Error(`Error: prefixCharacters, ${prefixCharacters} length is ${this.numOfDigitsToGen === 0 ? 'the same as' : 'greater than'} the required number ${serialNumLength.length} of serial number digits`);
        }
        this.lastNumber = this.randomNumber();
        this.somePath1 = this.generatePrefix(this.digitDivisions[1] || null);
        this.somePath2 = this.generatePrefix(this.digitDivisions[2] || null);
        this.somePath3 = this.generatePrefix(this.digitDivisions[3] || null);
        this.increament = 0;
    }
    breakDigits(numOfDigits) {
        if (numOfDigits > 17 && numOfDigits <= 30) {
            const part1 = Math.floor(numOfDigits / 2);
            const part2 = numOfDigits - part1;
            return [part1, part2];
        }
        else if (numOfDigits > 30 && numOfDigits <= 45) {
            const part1 = Math.floor(numOfDigits / 3);
            const part2 = Math.floor((numOfDigits - part1) / 2);
            const part3 = numOfDigits - (part1 + part2);
            return [part1, part2, part3];
        }
        else if (numOfDigits > 45) {
            const part1 = Math.floor(numOfDigits / 4);
            const part2 = Math.floor((numOfDigits - part1) / 3);
            const part3 = Math.floor((numOfDigits - (part1 + part2)) / 2);
            const part4 = numOfDigits - (part1 + part2 + part3);
            return [part1, part2, part3, part4];
        }
        return [numOfDigits];
    }
    randomNumber() {
        if (this.numOfDigitsToGen > this.padCount) {
            const pow = this.numOfDigitsToGen - this.padCount;
            return `${Math.floor((0, utility_function_1.randomNumNot0)() * Math.pow(10, pow))}`;
        }
        return '';
    }
    generatePrefix(numOfDigits = 0) {
        if (!numOfDigits || numOfDigits === 0)
            return '';
        return `${Math.floor(Math.pow(10, numOfDigits) * (0, utility_function_1.randomNumNot0)())}`;
    }
    getSNString() {
        const sn = `${this.prefixCharacters}${this.somePath1}${this.somePath2}${this.somePath3}${this.lastNumber}`;
        if (sn.length + this.padCount === this.snTotalLength) {
            return sn;
        }
        const deltaN = this.snTotalLength - (sn.length + this.padCount);
        return sn.padEnd(sn.length + deltaN, '0');
    }
    /**
     * return a serial number
     * @return number
     */
    serialNumber() {
        return `${this.getSNString()}${(this.increament++).toString().padStart(this.padCount, '0')}`;
    }
}
exports.default = SerialNumber;
//# sourceMappingURL=serial-number.js.map