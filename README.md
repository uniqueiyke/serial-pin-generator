# serial-pin-generator

A simple JavaScript script that enable developers to generate pin digits and corresponding serial numbers in application that require something like scratch card or recharge card services.
it is a promise base script.


## Installation

`npm install serial-pin-generator`

## Usage
##### install via npm

`npm i serial-pin-generator`

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
    numberRequired: 5
}).then(values =>console.log(values))
  .catch(err => console.log(err));
```

**Which generates** 
```
[
  { pin: 22295, serial_num: '865564053911000' },
  { pin: 84302, serial_num: '865564053911001' },
  { pin: 93019, serial_num: '865564053911002' },
  { pin: 38359, serial_num: '865564053911003' },
  { pin: 45322, serial_num: '865564053911004' }
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
| **`options.serialNumLength`** | **number** | The number of characters (string length) of the serial number. |
| **`options.prefixCharacters`** | **string** | The prefix characters of the serial number. This should be alphanumeric characters. If you did not provide this option, the serial numbers will be string of numbers only. *The `options.serialNumLength` should be at least **_four characters_** longer than the length of the `options.prefixCharacters`.* string |
| **`options.numberRequired`** | **number** | The total number of pins and corresponding serial numbers required to be generated. |

### NOTE: 
The `options.serialNumLength` should be at least **_four characters_** longer than the length of the `options.prefixCharacters`.

### The default configuration is the equivalent of:
```
{
    pinLength: 12, 
    serialNumLength: 15, 
    prefixCharacters: '', 
    numberRequired: 20
}
```

## License
License under the
[ISC](https://github.com/uniqueiyke/serial-pin-generator/blob/master/LICENSE)
