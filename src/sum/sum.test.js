import { assert, describe, it } from 'vitest';
import { sum } from './sum';

describe('Sum function ', () => {
  it ('checks correct summation over empty set of params', () => {
    assert.equal(sum(), 0);
  });

  it ('checks correct summation over single set parameter', () => {
    assert.equal(sum(0), 0);
    assert.equal(sum(1), 1);
    assert.isNaN(sum(NaN));
    assert.equal(sum(Infinity), Infinity);
  });

  it('checks correct summation over set of multiple params', () => {
    assert.equal(sum(0,0,0,0,0), 0);
    assert.equal(sum(0,1,2,3,4,5), 15);
    assert.equal(sum(-1,-1,-1), -3);
    assert.equal(sum(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER), 1.8014398509481982e+16);
    assert.equal(sum(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER), 0);
    assert.equal(sum(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER), -1.8014398509481982e+16);
    assert.equal(sum(Infinity, Infinity), Infinity);
    assert.isNaN(sum(Infinity, -Infinity));
  });
});
