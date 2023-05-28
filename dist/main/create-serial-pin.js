"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serial_number_1 = __importDefault(require("./serial-number"));
const pin_generator_1 = __importDefault(require("./pin-generator"));
const utility_function_1 = require("./utils/utility-function");
/**
 * A generator function for generating scratch card pin and serial number
 * @param pinLength
 * @param serialNumLength
 * @param prefixCharacters
 * @param numberRequired
 */
function* generateValues(pinLength, serialNumLength, prefixCharacters, numberRequired) {
    const padCount = Number(numberRequired.toString().length);
    const SerialNum = new serial_number_1.default(serialNumLength, prefixCharacters, padCount);
    let counter = 0;
    while (counter++ < numberRequired) {
        yield { pin: (0, pin_generator_1.default)(pinLength), serial_num: SerialNum.serialNumber() };
    }
}
const defaultOptions = {
    pinLength: 12,
    serialNumLength: {
        length: 15,
        includePrefixLength: true,
    },
    prefixCharacters: '',
    numberRequired: 20
};
/**
 * create and save scratch card pins and serial numbers;
 * options.prefixCharacters is used for specifying the string part opf the serial number
 * @param options
 * @returns
 */
async function createCardPins(options = defaultOptions) {
    let opts;
    if (options !== defaultOptions) {
        if (options && !(options.constructor === Object && Object.keys(options).length >= 1)) {
            throw TypeError((0, utility_function_1.typeErrorMessage)(options, 'object'));
        }
        if (options.pinLength && typeof (options.pinLength) !== 'number') {
            throw TypeError((0, utility_function_1.typeErrorMessage)(options.pinLength, 'number'));
        }
        if (options.serialNumLength && (typeof (options.serialNumLength) !== 'number' && typeof (options.serialNumLength) !== 'object')) {
            throw TypeError((0, utility_function_1.typeErrorMessage)(options.serialNumLength, 'number or object'));
        }
        if (options.serialNumLength && options.serialNumLength.length && typeof (options.serialNumLength.length) !== 'number') {
            throw TypeError((0, utility_function_1.typeErrorMessage)(options.serialNumLength.length, 'number'));
        }
        if (options.serialNumLength && options.serialNumLength.includePrefixLength && typeof (options.serialNumLength.includePrefixLength) !== 'boolean') {
            throw TypeError((0, utility_function_1.typeErrorMessage)(options.serialNumLength.includePrefixLength, 'boolean'));
        }
        if (options.numberRequired && typeof (options.numberRequired) !== 'number') {
            throw TypeError((0, utility_function_1.typeErrorMessage)(options.numberRequired, 'number'));
        }
        if (options.prefixCharacters && typeof (options.prefixCharacters) !== 'string') {
            throw TypeError((0, utility_function_1.typeErrorMessage)(options.prefixCharacters, 'string'));
            ;
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
        };
    }
    else {
        opts = Object.assign({}, options);
    }
    const { pinLength, serialNumLength, prefixCharacters, numberRequired } = opts;
    const cards = generateValues(pinLength, serialNumLength, prefixCharacters, numberRequired);
    let card;
    let cardArray = [];
    do {
        card = cards.next();
        if (card.value !== undefined)
            cardArray.push(card.value);
    } while (card.done === false);
    if (cardArray === null || cardArray.length === undefined || cardArray.length < 1) {
        throw Error((0, utility_function_1.errorMessage)('No card created'));
    }
    return cardArray;
}
exports.default = createCardPins;
//# sourceMappingURL=create-serial-pin.js.map