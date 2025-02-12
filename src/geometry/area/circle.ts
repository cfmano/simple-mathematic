/**
 * Function calculates area of a circle based on its radius
 *
 * @remarks The formula for the area of a circle is $ A = π * r^2 $,
 * where r is the radius of the circle. We already provide an ellipseArea function,
 * that can take care of computation, but it won't be as efficient for simpler
 * cases such as circles. Furthermore it takes advantage of native exponentiation 
 * operator and its calculation speed
 *
 * @example
 * 
 * ```ts
 * import { circleArea } from 'simple-mathematic';
 * 
 * circleArea(5); // 78.53981633974483
 * 
 * ```
 * 
 * @param radius - The radius of the circle
 * @returns Value of square area of circle
 */
export function circleArea(radius: number): number {
    return Math.PI * radius ** 2;
}

