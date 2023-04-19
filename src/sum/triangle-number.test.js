import { assert, describe, expect, it } from 'vitest';
import { triangleNumber } from './triangle-number';

describe('Triangle numbers function ', () => {
  it ('checks incorrect call with empty set of params', () => {
    assert.isNaN(triangleNumber());
  });

  it('checks incorrect input numbers', () => {
    assert.isNaN(triangleNumber(0));
    assert.isNaN(triangleNumber(-2));
    assert.isNaN(triangleNumber(20.52));
    assert.isNaN(triangleNumber(Infinity));
  });

  it('checks correct summation of correctly input numbers', () => {
    assert.equal(triangleNumber(1), 1);
    assert.equal(triangleNumber(2), 3);
    assert.equal(triangleNumber(5), 15);
    assert.equal(triangleNumber(1000), 500500);
    assert.equal(triangleNumber(Number.MAX_SAFE_INTEGER), 4.0564819207303336e+31);
  });
});
