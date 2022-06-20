# iban-checker

This package checks if the given string is valid IBAN.


## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save iban-checker
```

## Usage

You can pass an iban string as first parameter.

You can pass 'true' or 'false' to second parameter to enable Checksum. By default, checksumEnabled is true.
```js
const isIBAN = require('iban-checker');

// Whitout any checksum parameter

console.log(isIBAN('TR81 0001 0011 6582 7773 0750 02')); //=> true
console.log(isIBAN('AT61 1904 3002 3457 3201')); //=> true
console.log(isIBAN('FR14 2004 1010 0505 0001 3')); //=> false


// With checksumEnabled parameter
console.log(isIBAN('XX00 1234 5678 9012 3456 7890 1234 5678 90', false)); //=> true
console.log(isIBAN('XX00 1234 5678 9012 3456 7890 1234 5678 90', true)); //=> false

```
