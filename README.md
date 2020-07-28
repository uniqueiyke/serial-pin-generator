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

`options` is optional and is provided to configure the pin digits and the serial numbers that will be generated.

#### Setting the optional option argument
```javascript
pinGen({
        pinLength: 5,
        prefixCharacters: 'adfc',
        serialNumLength: 15
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

option | datatype | description
------ | -------- | -----------
**`pinLength`** | **number** | The number of digits the pin should have.
**`serialNumLength`** | **number** | The number of characters (string length) of the serial number.
**`prefixCharacters`** | **string** | The prefix characters of the serial number. This should be alphanumeric characters.
If nou provided the serial numbers will be string of numbers only.
NOTE: The `serialNumLength` should be **_four characters_** longer than the length of the `prefixCharacters`.
**`numberRequired`** | **number** | The total number of pins and corresponding serial numbers required to be generated.

#### The default configuration is the equivalent of:
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
