import { serialNumLengthInterface } from './interfaces/interfaces';
declare class SerialNumber {
    totalNumOfDigits: any;
    prefixCharacters: string;
    digitDivisions: any[];
    numOfDigitsToGen: number;
    padCount: number;
    lastNumber: any;
    somePath1: string;
    somePath2: string;
    somePath3: string;
    increament: number;
    snTotalLength: number;
    /**
     * Generate serial numbers
     * @param {string} prefixCharacters
     * @param {object|number} serialNumLength
     */
    constructor(serialNumLength: serialNumLengthInterface, prefixCharacters: string | undefined, padCount: number);
    breakDigits(numOfDigits: number): number[];
    randomNumber(): string;
    generatePrefix(numOfDigits?: number): string;
    getSNString(): string;
    /**
     * return a serial number
     * @return number
     */
    serialNumber(): string;
}
export default SerialNumber;
//# sourceMappingURL=serial-number.d.ts.map