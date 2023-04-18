# Simple Mathematic library

This package consists of common mathematic functions unavailable in Math module. Main focus is on simplicity & efficient implementation.

## List of available functions:

- Sum
- Product
- Parity check
  - Even
  - Odd
- Triangle number
- Factorial

## Usage

`simple-mathematic` package can be used in both NodeJs and in browser.

Installing `simple-mathematic` as [npm package](https://www.npmjs.com/package/simple-mathematic):

    npm install simple-mathematic

The aim of the package is to use functions in the same manner as we would do with native built-in JavaScript's Math module:

```js
import { sum, isOdd, isEven } from 'simple-mathematic';

sum(1,2,3,4,5); // 15
isOdd(123);     // true
isEven(123);    // false
```
