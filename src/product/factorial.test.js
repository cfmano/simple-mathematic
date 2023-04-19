import { assert, describe, expect, it } from 'vitest';
import { factorial } from './factorial';

describe('Factorial function ', () => {
  it ('checks call with empty set of params', () => {
    assert.isNaN(factorial());
  });

  it('checks incorrect input numbers', () => {
    assert.isNaN(factorial(-2));
    assert.isNaN(factorial(20.52));
    assert.equal(factorial(Infinity), Infinity);
  });

  it('checks correct summation of correctly input numbers', () => {
    assert.equal(factorial(0), 1);
    assert.equal(factorial(1), 1);
    assert.equal(factorial(2), 2);
    assert.equal(factorial(5), 120);
    assert.equal(factorial(100), 9.33262154439441e+157);
    assert.equal(factorial(170), 7.257415615307994e+306);
    assert.equal(factorial(171), Infinity);
    assert.equal(factorial(Number.MAX_SAFE_INTEGER), Infinity);
  });
});
