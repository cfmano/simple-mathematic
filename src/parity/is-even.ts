/**
 * Function isEven checks passed number's parity and returns true, if number is even.
 * 
 * @remarks
 * Applications to check number's parity are very common. This function therefore helps
 * to correctly check for all possible situations happening in JS world and returns true,
 * when passed number is really Even.
 *
 * @example
 * Basic usage of checking parinty by `isEven` function:
 *
 * ```ts
 * import { isEven } from 'simple-mathematic';
 *
 * isEven(0);        // true
 * isEven(2);        // true
 * isEven(-10);      // true
 *
 * isEven(1);        // false
 * isEven(2.5);      // false
 * isEven(Infinity); // false
 * isEven(NaN);      // false
 * isEven(Number.MAX_SAFE_INTEGER); // false
 * ```
 * 
 * @param number - Integer number to be checked if is Even
 * @returns `true` value if passed argument is even integer number, `false` otherwise
 */
export function isEven(number: number): boolean {
  return number % 2 === 0;
}
