import { test, describe, expect } from 'vitest';
import { ellipseArea } from './ellipse';

describe("Circle area should be calculated correctly", () => {
	const cases = [
		[0,   0,   0               ],
		[1,   1,   Math.PI / 4     ],
		[2,   2,   Math.PI         ],
		[3,   3,   9 * Math.PI / 4 ],
		[106, 106, 2809 * Math.PI  ],
	]

	test.each(cases)("given diameters of %p, %p should return area of %p", (a, b, result) => {
		expect(ellipseArea(a, b)).toBe(result)
	})
})
