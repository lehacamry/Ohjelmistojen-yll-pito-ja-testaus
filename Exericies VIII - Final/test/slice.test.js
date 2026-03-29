// slice.test.js

import { expect } from 'chai';
import slice from '../src/slice.js';

/**
 * Tests for the slice() function
 */
describe('slice', () => {
  /**
   * It should return a portion of an array as specified by end index.
   */
  it('should return a Returns the slice of `array` by end index', () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 2)).to.deep.equal([3, 4]);
  });

  /**
   * It should return a portion of an array as specified by start and end indices.
   */
  it('should return a Returns the slice of `array` by start and end indices', () => {
    const array = [1, 2, 3, 4];
    expect(slice(array, 0, 2)).to.deep.equal([1, 2]);
  });
});
