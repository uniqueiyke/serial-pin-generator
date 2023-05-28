'use strict';
try {
    const serialPinGenerator  = require('./dist/index');
    module.exports = serialPinGenerator.default;
} catch (error) {
    throw Error(`${error.message}.\ndist directory not found. You need to build the library for you to use it in your JS files cd to the root directory of the project and run the command 'npm run build'`)
}
