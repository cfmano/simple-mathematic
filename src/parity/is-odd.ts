/**
 * Function isOdd checks passed number's parity and returns true, if number is odd.
 * 
 * @remarks
 * Applications to check number's parity are very common. This function therefore helps
 * to correctly check for all possible situations happening in JS world and returns true,
 * when passed number is really Odd.
 *
 * @example
 * Basic usage of checking parinty by `isOdd` function:
 *
 * ```ts
 * import { isOdd } from 'simple-mathematic';
 *
 * isOdd(1);        // true
 * isOdd(7);        // true
 * idOdd(-11);      // true
 * isOdd(Number.MAX_SAFE_INTEGER); // true
 * 
 * isOdd(0);        // false
 * isOdd(2);        // false
 * isOdd(-10);      // false
 * isOdd(2.5);      // false
 * isOdd(Infinity); // false
 * isOdd(NaN);      // false
 * ```
 * 
 * @param number - Integer number to be checked if is Odd
 * @returns `true` value if passed argument is odd integer number, `false` otherwise
 */
export function isOdd(number: number): boolean {
  return Math.abs(number % 2) === 1;
}
