/**
 * Function returns triangular number of passed size 
 * 
 * @remarks
 * Triangular number equals to the sum of sequence of natural numbers from 1 to size n:
 * $$ T_{n}=1+2+3+\dotsb +(n-1)+n $$
 * 
 * This function computes the triangular number of specified size by using very efficient
 * implementation. It comes from basic mathematical definition of counting such sequences,
 * as mathematically speaking, it is defined as binomial coefficient choosing
 * number of distinct pairs from $ n+1 $ objects: 
 * $$  T_{n}=1+2+3+\dotsb +(n-1)+n={\frac {n(n+1)}{2}}={\frac {n^{2}+n}{2}}{\overset {\underset {\mathrm {def} }{}}{=}}{n+1 \choose 2} $$
 * 
 * @example
 * 
 * Simple use of finding triangular number:
 * ```ts
 * import { triangleNumber } from 'simple-mathematic';
 * 
 * triangleNumber(1);        // 1
 * triangleNumber(2);        // 3
 * triangleNumber(5);        // 15
 * triangleNumber(1000);     // 500500
 * triangleNumber(Infinity); // Infinity
 * triangleNumber();         // NaN
 * triangleNumber(0);        // NaN
 * triangleNumber(-2);       // NaN
 * ```
 * 
 * 
 * @param size - Natural number n indicating size of triangular number 
 * @returns Sum of natural numbers from 1 to passed number `n` 
 *          or `NaN` in cases of incorrect values passed to function
 */
export function triangleNumber(size: number): number {
  return (size > 0 && size % 1 === 0)
          ? size * (size + 1) * 0.5
          : Number.NaN;
}
