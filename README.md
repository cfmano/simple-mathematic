# Simple Mathematic library

This library consists of common mathematic functions unavailable in Math module. Main focus is on simplicity & efficient implementation.

## List of available functions:

- [Sum](https://cfmano.github.io/simple-mathematic/functions/sum.html)
- [Product](https://cfmano.github.io/simple-mathematic/functions/product.html)
- Parity check
  - [Even](https://cfmano.github.io/simple-mathematic/functions/isEven.html)
  - [Odd](https://cfmano.github.io/simple-mathematic/functions/isOdd.html)
- [Triangle number](https://cfmano.github.io/simple-mathematic/functions/sum.html)
- [Factorial](https://cfmano.github.io/simple-mathematic/functions/factorial.html)

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

To see the full documentation of usage of functions, plese refer to the [list of functions section](https://cfmano.github.io/simple-mathematic/modules.html) and refer to specific function
