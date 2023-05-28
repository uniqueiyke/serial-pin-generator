import { optionInterface, PinSNOrVoid } from "./interfaces/interfaces";
/**
 * create and save scratch card pins and serial numbers;
 * options.prefixCharacters is used for specifying the string part opf the serial number
 * @param options
 * @returns
 */
declare function createCardPins(options?: optionInterface): Promise<PinSNOrVoid[]>;
export default createCardPins;
//# sourceMappingURL=create-serial-pin.d.ts.map