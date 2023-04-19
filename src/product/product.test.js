import { assert, describe, it } from 'vitest';
import { product } from './product';

describe('Product function ', () => {
  it ('checks correct multiplication over empty set of params', () => {
    assert.equal(product(), 1);
  });

  it ('checks correct multiplication over single set parameter', () => {
    assert.equal(product(0), 0);
    assert.equal(product(1), 1);
    assert.isNaN(product(NaN));
    assert.equal(product(Infinity), Infinity);
  });

  it('checks correct multiplication over set of multiple params', () => {
    assert.equal(product(0,0,0,0,0), 0);
    assert.equal(product(0,1,2,3,4,5), 0);
    assert.equal(product(1,2,3,4,5), 120);
    assert.equal(product(-1,-1,-1), -1);
    assert.equal(product(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER), 8.112963841460666e+31);
    assert.equal(product(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER), -8.112963841460666e+31);
    assert.equal(product(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER), 8.112963841460666e+31);
    assert.equal(product(Infinity, -Infinity), -Infinity);
  });
});
