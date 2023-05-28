interface serialNumLengthInterface {
    length: number,
    includePrefixLength: boolean,
}

interface optionInterface {
    pinLength: number, 
    serialNumLength: serialNumLengthInterface, 
    prefixCharacters: string, 
    numberRequired: number
};

interface pinAndSNInterface { 
    pin: string | number; 
    serial_num: string; 
};

type PinSNOrVoid = pinAndSNInterface | void;


export {
    optionInterface,
    pinAndSNInterface,
    PinSNOrVoid,
    serialNumLengthInterface,
}