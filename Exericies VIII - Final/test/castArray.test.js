// castArray.test.js

import { expect } from 'chai';
import castArray from '../src/castArray.js';

/**
 * Tests for the castArray() function
 */
describe('castArray', () => {

  /**
   * It should wrap a number into an array.
   */
  it('should wrap a number into an array', () => {
    expect(castArray(1)).to.deep.equal([1]);
  });

  /**
   * It should wrap an object into an array.
   */
  it('should wrap an object into an array', () => {
    expect(castArray({ a: 1 })).to.deep.equal([{ a: 1 }]);
  });

  /**
   * It should wrap a string into an array.
   */
  it('should wrap a string into an array', () => {
    expect(castArray('abc')).to.deep.equal(['abc']);
  });

  /**
   * It should handle null values.
   */
  it('should handle null', () => {
    expect(castArray(null)).to.deep.equal([null]);
  });

  /**
   * It should handle undefined values.
   */
  it('should handle undefined', () => {
    expect(castArray(undefined)).to.deep.equal([undefined]);
  });

  /**
   * It should return the same array if input is already an array.
   */
  it('should return the same array if input is already an array', () => {
    const arr = [1, 2, 3];
    expect(castArray(arr)).to.equal(arr);
  });

});