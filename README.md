# serial-pin-generator

A simple JavaScript script that enable developers to generate pin digits and corresponding serial numbers in application that require something like scratch card or recharge card services.
it is a promise base script.
Although pin and serial numbers are not each expected to be more than 25 characters long, but this script can generate up to 64 character long for each (pin or serial number).


## Installation

`npm install serial-pin-generator`

## Usage
##### install via npm

`npm i serial-pin-generator`

#### or via yarn

`yarn add serial-pin-generator`

require it in your file
```javascript
const pinGen = require('serial-pin-generator');
```
Calling the `pinGen` function will return a promise which will resove with an array of objects.

```javascript
pinGen()
.then(values => console.log(values))
.catch(err => console.log(err));
```

### Syntax

`pinGen([options])`  

The function accept object as argument. The argument is optional. it is provided to configure the output of the pin digits and the serial numbers that will be generated.

#### Setting the optional option argument
```javascript
pinGen({
    pinLength: 5,
    serialNumLength: 15,
    prefixCharacters: 'sdp',
    numberRequired: 7,
    numberRequired: 5
}).then(values =>console.log(values))
  .catch(err => console.log(err));
```
### is equivalent to this

```javascript
pinGen({
    serialNumLength : {
        length: 15,
        includePrefixLength: true
    },
    prefixCharacters: 'sdp',
    numberRequired: 7,
    pinLength: 8
})
.then(values => console.log(values))
.catch(err => console.log(err.message));
```

**Which generates** 
```
[
  { pin: 62511243, serial_num: 'SDP9988375879270' },
  { pin: 22128956, serial_num: 'SDP9988375879271' },
  { pin: 36864087, serial_num: 'SDP9988375879272' },
  { pin: 49280942, serial_num: 'SDP9988375879273' },
  { pin: 47421936, serial_num: 'SDP9988375879274' },
  { pin: 34639053, serial_num: 'SDP9988375879275' },
  { pin: 52842289, serial_num: 'SDP9988375879276' }
]
```
### If serialNumLength.includePrefixLength === false,
it will add prefixCharacter length to the serialNumLength.length

## Example

```javascript
pinGen({
    serialNumLength : {
        length: 15,
        includePrefixLength: false
    },
    prefixCharacters: 'sdp',
    numberRequired: 7,
    pinLength: 8
})
.then(values => console.log(values))
.catch(err => console.log(err.message));
```

**Which generates** 
```
[
  { pin: 62131779, serial_num: 'SDP5434814428618890' },
  { pin: 86781427, serial_num: 'SDP5434814428618891' },
  { pin: 57071838, serial_num: 'SDP5434814428618892' },
  { pin: 42043437, serial_num: 'SDP5434814428618893' },
  { pin: 82469489, serial_num: 'SDP5434814428618894' },
  { pin: 38335381, serial_num: 'SDP5434814428618895' },
  { pin: 97639287, serial_num: 'SDP5434814428618896' }
]
```

## Using async await

```javascript
(async () => {
    try {
        const values = await pinGen({
            pinLength: 12,
            prefixCharacters: 'sdp',
            serialNumLength: 8,
            numberRequired: 3
        })
        console.log(values);
    } catch (error) {
        console.log(error);
    }
})()
```

**Which generates**
```
[
  { pin: 203420843675, serial_num: 'SDP40700' },
  { pin: 603474470957, serial_num: 'SDP40701' },
  { pin: 725294039567, serial_num: 'SDP40702' }
]
```

## Configuration Options

| options keys | datatype | description |
------ | -------- | -----------
| **`options.pinLength`** | **number** | The number of digits the pin should have. |
| **`options.serialNumLength`** | **object|number** | **`options.serialNumLength.length`** type **number** The number of characters (string length) of the serial number. **`options.serialNumLength.includePrefixLength`** type **boolean** if true, the serial number prefix character length will be included in the serial number total length. Otherwise the serial number total length will **`options.prefixCharacters`** length +  **`options.serialNumLength.length`. If **`options.serialNumLength` is a number it will be use for **`options.serialNumLength.length`. |
| **`options.prefixCharacters`** | **string** | The prefix characters of the serial number. This should be alphanumeric characters. If you did not provide this option, the serial numbers will be string of numbers only. *The `options.serialNumLength` should be at least **_four characters_** longer than the length of the `options.prefixCharacters`.* string |
| **`options.numberRequired.`** | **number** | The total number of pins and corresponding serial numbers required to be generated. |

### NOTE: 
The `options.serialNumLength` should be at least **_four characters_** longer than the length of the `options.prefixCharacters`.

### The default configuration is the equivalent of:
```
{
    pinLength: 12, 
    serialNumLength: {
        length: 15,
        includePrefixLength: false,
    }, 
    prefixCharacters: '', 
    numberRequired: 20
}
```

## License
License under the
[ISC](https://github.com/uniqueiyke/serial-pin-generator/blob/master/LICENSE)
