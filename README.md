serial-pin-generator
========================

A simple Node.js module that enable developers to generate pin digits and corresponding serial numbers asynchronously in application that require something like scratch card or recharge card services.
it is a promise base library.


Installation
------------
`npm install serial-pin-generator`

And/or install globally for a `serial-pin-generator` shell command:
`[sudo] npm install -g serial-pin-generator`


Usage
-----
install via npm

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

Syntax
------
`pinGen(options[)`
`options | optional` provide a to configure the pin digits and the serial numbers that will be generated.

Setting the optional option argument
```javascript
pinGen({
        pinLength: 5,
        prefixCharacters: 'adfc',
        serialNumLength: 9
    }).then(values =>console.log(values))
      .catch(err => console.log(err));
```

Using async await
-----------------
```javascript
(async () => {
    try {
        const values = await pinGen({
            pinLength: 6,
            prefixCharacters: 'sdp',
            serialNumLength: 8,
            numberRequired: 5
        })
        console.log(values);
    } catch (error) {
        console.log(error);
    }
})()
```

Configuration Options
---------------------
`pinLength`: The number of digits the pin should have. `type: number`
`serialNumLength`: The number of characters (string length) of the serial number. `type: number`
`prefixCharacters`: The prefix characters of the serial number. This should be alphanumeric characters.
If nou provided the serial numbers will be string of numbers only. `type: string`
`numberRequired`: The total number of pins and corresponding serial numbers required to be generated. `type: number`


NOTE: The `serialNumLength` should be `four characters` longer than the length of the `prefixCharacters`.

The default configuration is the equivalent of:
```javascript
{
    pinLength: 12, 
    serialNumLength: 15, 
    prefixCharacters: '', 
    numberRequired: 20
}
```


License
-------
[ISC](https://github.com/uniqueiyke/serial-pin-generator/master/LICENSE)
