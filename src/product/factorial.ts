/**
 * Function returns factorial of passed number value 
 * 
 * @remarks
 * Factorial function equals to the product of sequence of natural numbers from 1 to size n:
 * $$  n! = n \times (n-1) \times (n-2) \times \dotsb \times 3 \times 2 \times 1 = n \times (n-1)! $$
 * 
 * This function computes the factorial number of specified natural number by using very efficient
 * implementation. Implementation, however, omits use of memoization in favor of pure function call.
 * From the perspective of IEEE 754 specification, maximal possible factorial number countable in JavaScript
 * is for \\( n=170! \\), while for any number larger than that (i.e. $ n \geq 171 $), JS engine counts Inifinity.
 * Therefore, `factorial` function returns `Infinity` value immediately for any such number. Likewise, for any 
 * negative integer or any non-natural number immediately returns `NaN` value. 
 *
 * @example
 * 
 * Simple use of finding triangular number:
 * ```ts
 * import { triangleNumber } from 'simple-mathematic';
 * 
 * factorial(0);        // 1
 * factorial(1);        // 1
 * factorial(2);        // 2
 * factorial(5);        // 120
 * factorial(100);      // 9.33262154439441e+157
 * factorial(170);      // 7.257415615307994e+306
 * factorial(171);      // Infinity
 * factorial();         // NaN
 * factorial(-2);       // NaN
 * factorial(20.52);    // NaN
 * factorial(Infinity); // NaN
 * ```
 *
 * @param n - Natural number n including zero indicating size of factorial number 
 * @returns factorial of passed natural number `n`
 *          or `NaN` in cases of incorrect values passed to function
 *          or `Infinity` in cases of natural numbers higher than 170
 */
export function factorial(n: number): number {
  if (n < 0 || n % 1 !== 0) {
    return Number.NaN;
  }
  else if (n > 170) {
    return Infinity;
  }
  else {
    let result = 1;
    for (let i=1; i<=n;i++) 
        result *= i;
    return result;
  }
}
