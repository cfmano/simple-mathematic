import { assert, describe, it } from 'vitest';
import { isEven } from './is-even';
import { isOdd } from './is-odd';

describe('Parity check functions', () => {
  it ('checks correct assertions over empty parameters', () => {
    assert.isFalse(isEven());
    assert.isFalse(isOdd());
  });

  it ('checks correctly evaluated parity over set of even numbers', () => {
    assert.isTrue(isEven(0));
    assert.isTrue(isEven(2));
    assert.isTrue(isEven(-10));

    assert.isFalse(isOdd(0));
    assert.isFalse(isOdd(2));
    assert.isFalse(isOdd(-10));
    assert.isFalse(isOdd(2.5));
  });

  it ('checks correctly evaluated parity over set of odd numbers', () => {
    assert.isTrue(isOdd(1));
    assert.isTrue(isOdd(7));
    assert.isTrue(isOdd(-11));
    assert.isTrue(isOdd(Number.MAX_SAFE_INTEGER));

    assert.isFalse(isEven(1));
    assert.isFalse(isEven(2.5));
    assert.isFalse(isEven(Number.MAX_SAFE_INTEGER));
  });

  it ('checks correct assertions of non-integer numbers', () => {
    assert.isFalse(isEven(Infinity));
    assert.isFalse(isEven(NaN));

    assert.isFalse(isOdd(Infinity));
    assert.isFalse(isOdd(NaN));
  });
});
