/**
 * Function sum returns summation of all numbers passed as standalone arguments
 * 
 * @remarks
 * The sum function is mathematically defined as the addition of sequence of any kind of numbers
 * and in practise is used very often.
 * 
 * Usage of the function is heavily inspired by ECMAScript's native Math module functions,
 * like Math.min and Math.max. Therefore it takes optional amount of numerical arguments passed
 * and tries to efficiently proceed with computation of summation. Be aware that passing any
 * non-numerical argument may cause unexpected results, as JS "plus" operator works as both -
 * addition operator as well as string concatenation operator with virtually any type of variables.
 * 
 * @example
 * Simple usage of direct use of values or variables:
 * ```ts
 * import { sum } from 'simple-mathematic';
 * 
 * sum();                    // 0
 * sum(1, 2, 3);             // 6
 * sum(1, 2, 3, -4);         // 2
 * sum(Infinity, -Infinity); // NaN
 * ```
 * 
 * Usage with already existing array of values:
 * ```ts
 * import { sum } from 'simple-mathematic';
 * 
 * const listOfValues = [1, 2, 3, -4];
 * const result = sum(...listOfValues);  // result == 2
 * ```
 * 
 * @param {number[]} set - A list of numbers
 * @returns Numerical summation of all passed arguments
 */
export function sum(...set: number[]): number {
  let result = 0;
  for (let i=0; i<set.length; i++) {
    result += set[i];
  }
  return result;
}
