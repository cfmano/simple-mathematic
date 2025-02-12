import { test, describe, expect } from "vitest";
import { torque } from "./torque";

describe("Torque Calculation", () => {
	// biome-ignore format: the array should not be formatted
	const cases = [
		[ 0,              0,   undefined, 0               ],
		[ 5,              3,   undefined, 15              ],
		[ 1.737614791,    1.5, undefined, 2.606422187     ],
		[ 2.630925110762, 2.7, undefined, 7.1034977990574 ],
	]

	test.each(cases)(
		"given force of %p and crown excentricity of %p should return torque of %p",
		(force, distance, angle, result) => {
			expect(torque(force, distance, angle)).toBeCloseTo(result, 8);
		},
	);
});
