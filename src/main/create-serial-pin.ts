import SerialNumber from './serial-number';
import generatePin from './pin-generator';

import { optionInterface, PinSNOrVoid, serialNumLengthInterface } from "./interfaces/interfaces"
import { typeErrorMessage, errorMessage } from './utils/utility-function';
/**
 * A generator function for generating scratch card pin and serial number
 * @param pinLength 
 * @param serialNumLength 
 * @param prefixCharacters 
 * @param numberRequired 
 */

function* generateValues(pinLength: number, serialNumLength: serialNumLengthInterface, prefixCharacters: string, numberRequired: number) {
    const padCount = Number(numberRequired.toString().length);
    const SerialNum = new SerialNumber(serialNumLength, prefixCharacters, padCount);
    let counter = 0;
    while (counter++ < numberRequired) {
        yield { pin: generatePin(pinLength), serial_num: SerialNum.serialNumber() };
    }
}

const defaultOptions: optionInterface = {
    pinLength: 12,
    serialNumLength: {
        length: 15,
        includePrefixLength: true,
    },
    prefixCharacters: '',
    numberRequired: 20
}

/**
 * create and save scratch card pins and serial numbers;
 * options.prefixCharacters is used for specifying the string part opf the serial number
 * @param options 
 * @returns 
 */
async function createCardPins(options: optionInterface = defaultOptions) {
    let opts: optionInterface;
    if (options !== defaultOptions) {
        if (options && !(options.constructor === Object && Object.keys(options).length >= 1)) {
            throw TypeError(typeErrorMessage(options, 'object'));
        }
        if (options.pinLength && typeof (options.pinLength) !== 'number') {
            throw TypeError(typeErrorMessage(options.pinLength, 'number'));
        }
        if (options.serialNumLength && (typeof (options.serialNumLength) !== 'number' && typeof (options.serialNumLength) !== 'object')) {
            throw TypeError(typeErrorMessage(options.serialNumLength, 'number or object'));
        }
        if (options.serialNumLength && options.serialNumLength.length && typeof (options.serialNumLength.length) !== 'number') {
            throw TypeError(typeErrorMessage(options.serialNumLength.length, 'number'));
        }
        if (options.serialNumLength && options.serialNumLength.includePrefixLength && typeof (options.serialNumLength.includePrefixLength) !== 'boolean') {
            throw TypeError(typeErrorMessage(options.serialNumLength.includePrefixLength, 'boolean'));
        }
        if (options.numberRequired && typeof (options.numberRequired) !== 'number') {
            throw TypeError(typeErrorMessage(options.numberRequired, 'number'));
        }
        if (options.prefixCharacters && typeof (options.prefixCharacters) !== 'string') {
            throw TypeError(typeErrorMessage(options.prefixCharacters, 'string'));;
        }

        opts = {
            pinLength: options.pinLength ? options.pinLength : defaultOptions.pinLength,
            prefixCharacters: options.prefixCharacters ? options.prefixCharacters : defaultOptions.prefixCharacters,
            numberRequired: options.numberRequired ? options.numberRequired : defaultOptions.numberRequired,
            serialNumLength: (options.serialNumLength && typeof options.serialNumLength === 'number') ? {
                length: options.serialNumLength,
                includePrefixLength: defaultOptions.serialNumLength.includePrefixLength,
            } : {
                length: options.serialNumLength.length || defaultOptions.serialNumLength.length,
                includePrefixLength: options.serialNumLength.includePrefixLength === false
                    ? options.serialNumLength.includePrefixLength
                    : defaultOptions.serialNumLength.includePrefixLength,
            }
        }
    }
    else {
        opts = { ...options };
    }

    const { pinLength, serialNumLength, prefixCharacters, numberRequired } = opts;


    const cards = generateValues(pinLength, serialNumLength, prefixCharacters, numberRequired);
    let card: IteratorResult<{ pin: string | number; serial_num: string; }, void>
    let cardArray: PinSNOrVoid[] = [];

    do {
        card = cards.next();
        if (card.value !== undefined)
            cardArray.push(card.value);
    }
    while (card.done === false);

    if (cardArray === null || cardArray.length === undefined || cardArray.length < 1) {
        throw Error(errorMessage('No card created'));
    }
    return cardArray;
}

export default createCardPins; 