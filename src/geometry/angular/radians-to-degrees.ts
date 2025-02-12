/**
 * Function radiansToDegrees transforms radian angle value to degrees value
 * 
 * @remarks
 * Switching in between radians and degrees is very common operation in math and physics.
 * Native JS doesn't provide any built-in functions for such transformations, so we created such one.
 * This function therefore converts radian angle value to degrees angle value.
 *
 * @example
 * Basic usage of `radiansToDegrees` function:
 *
 * ```ts
 * import { radiansToDegrees } from 'simple-mathematic';
 * 
 * radiansToDegrees(Math.PI); // 180
 * 
 * ```
 * 
 * @param radians - Angle values in radians to be converted to degrees
 * @returns Number of degrees equal to passed number of radians
 */
export function radiansToDegrees(radians: number): number {
    return radians * (180 / Math.PI);
} 
