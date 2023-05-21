/**
 * Function product multiplies all numbers passed as standalone arguments and returns their product.
 * 
 * @remarks
 * The product function is mathematically defined as the multiplication of sequence of any kind of numbers
 * and in practise is very often used.
 * 
 * Usage of the function is heavily inspired by ECMAScript's native Math module functions,
 * like [Math.min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
 * and [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max).
 * Therefore it takes optional amount of numerical arguments passed
 * and tries to efficiently proceed with computation of multiplication. Be aware that passing any
 * non-numerical argument may cause unexpected results, as JS internally tries to convert all arguments
 * into numbers. Therefore incorrectly formatted strings could cause returning `NaN` values.
 * 
 * @example
 * Simple usage of direct use of values or variables:
 * ```ts
 * import { product } from 'simple-mathematic';
 * 
 * product();                    // 1
 * product(1, 2, 3);             // 6
 * product(1, 2, 3, -4);         // -24
 * product(Infinity, -Infinity); // -Infinity
 * ```
 * 
 * Usage with already existing array of values:
 * ```ts
 * import { product } from 'simple-mathematic';
 * 
 * const listOfValues = [1, 2, 3, -4];
 * const result = product(...listOfValues);  // result == -24
 * ```
 * 
 * @param {number[]} set - A list of numbers
 * @returns Numerical multiplication of all passed arguments or 1 for empty argument list
 */
export function product(...set: number[]): number {
  let result = 1;
  for (let i=0; i<set.length; i++) {
    result *= set[i];
  }
  return result;
}
