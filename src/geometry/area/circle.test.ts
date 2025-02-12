import { test, describe, expect } from 'vitest';
import { circleArea } from './circle';

describe("Circle area should be calculated correctly", () => {
	const cases = [
		[0,  0              ],
		[1,  Math.PI        ],
		[2,  4 * Math.PI    ],
		[3,  9 * Math.PI    ],
		[53, 2809 * Math.PI ],
	]

	test.each(cases)("given radius of %p should return area of %p", (radius, result) => {
		expect(circleArea(radius)).toBe(result)
	})
})
