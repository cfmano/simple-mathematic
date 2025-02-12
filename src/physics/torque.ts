/**
 * Function computes torque of aplied force in specified position vector and angle
 *
 * @example
 *
 * ```ts
 * import { torque } from 'simple-mathematic';
 *
 * torque(5, 3); // 15
 * torque(1.737614791, 1.5); // 2.606422187
 * torque(2.630925110762, 2.7, Math.PI); // 0
 * ```
 *
 * ```ts
 * import { degreesToRadians. torque } from 'simple-mathematic';
 *
 * torque(6, 2, degreesToRadians(45)); // 8.485281374
 * ```
 *
 * @param forceVectorMagnitude
 * @param positionVectorMagnitude
 * @param angle
 * @returns number
 */
export function torque(
	forceVectorMagnitude: number,
	positionVectorMagnitude: number,
	angle: number = Math.PI / 2,
): number {
	return forceVectorMagnitude * positionVectorMagnitude * Math.sin(angle);
}
