import { test, describe, expect } from 'vitest';
import { degreesToRadians } from "./degrees-to-radians";
import { radiansToDegrees } from './radians-to-degrees';

describe("Degrees to Radians should be converted correctly", () => {
	const cases = [
		[ 0,   0           ],
		[ 45,  Math.PI / 4 ],
		[ 60,  Math.PI / 3 ],
		[ 90,  Math.PI / 2 ],
		[ 180, Math.PI     ],
		[ 360, 2 * Math.PI ],

		[ -45,  -Math.PI / 4       ],
		[ -60,  -Math.PI / 3       ],
		[ -90,  -Math.PI / 2       ],
		[ -180, -Math.PI           ],
		[ -270, (-3 * Math.PI) / 2 ],
		[ -360,  -2 * Math.PI      ],
	]

	test.each(cases)("given %p degrees should return %p", (degrees, result) => {
		expect(degreesToRadians(degrees)).toBe(result)
	})
})


describe("Radians to Degrees should be converted correctly", () => {
	const cases = [
		[ 0,           0   ],
		[ Math.PI / 6, 30  ],
		[ Math.PI / 4, 45  ],
		[ Math.PI / 3, 60  ],
		[ Math.PI / 2, 90  ],
		[ Math.PI,     180 ],
		[ 2 * Math.PI, 360 ],

		[ -Math.PI / 6,       -30  ],
		[ -Math.PI / 4,       -45  ],
		[ -Math.PI / 3,       -60  ],
		[ -Math.PI / 2,       -90  ],
		[ -Math.PI,           -180 ],
		[ (-3 * Math.PI) / 2, -270 ],
		[ -2 * Math.PI,       -360 ],
	]

	test.each(cases)("given %p radians should return %p", (radians, result) => {
		expect(radiansToDegrees(radians)).toBeCloseTo(result)
	})
})
