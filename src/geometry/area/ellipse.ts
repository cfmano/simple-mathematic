/**
 * Function calculates area of an ellipse based on its diameters in both axis
 *
 * @remarks The formula for the area of an ellipse is $ A = π * a * b $,
 * where `a` and `b` are the radii on the major and the minor axes, respectively.
 * This function however calculates area of ellipse based on its diameters in both
 * axis.
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
 * @param majorAxisDiameter - Positive value of the first radius of the ellipse 
 * @param minorAxisDiameter - Positive value of the second radius of the ellipse
 * @returns Value of square area of ellipse
 */
export function ellipseArea(majorAxisDiameter: number, minorAxisDiameter: number): number {
    return Math.PI * (majorAxisDiameter / 2) * (minorAxisDiameter / 2);
}
