/**
 * Function degreesToRadians transforms degrees angle value to radian value
 * 
 * @remarks
 * Switching in between degrees and radians is very common operation in math and physics.
 * Native JS doesn't provide any built-in functions for such transformations, so we created such one.
 * This function therefore converts radian angle value to degrees angle value.
 *
 * @example
 * Basic usage of `degreesToRadians` function:
 *
 * ```ts
 * import { degreesToRadians } from 'simple-mathematic';
 * 
 * degreesToRadians(180); // 3.14159 ~ Math.PI
 * 
 * ```
 *
 * @param degrees - Angle value in degrees to be converted to radians
 * @returns Number of radians equal to passed number of radians
 */
export function degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180.0);
}
