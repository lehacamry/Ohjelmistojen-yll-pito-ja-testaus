// at.test.js

import { expect } from 'chai';
import at from '../src/at.js';

   /**
   * Tests for the at() function
   */
describe('at', () => {
    /**
     * It сhould return values from given paths.
     */    
  it('should return values from given paths', () => {
    const object = { a: [{ b: { c: 3 } }, 4] };
    expect(at(object, ['a[0].b.c', 'a[1]'])).to.deep.equal([3, 4]);
  });
    /**
     * It сhould  return undefined for missing path.
     */    
  it('should return undefined for missing path', () => {
    const object = { a: [{ b: { c: 3 } }, 4] };
    expect(at(object, ['a[0].b.x'])).to.deep.equal([undefined]);
  });
    /**
     * It сhould return empty array when no paths are provided.
     */    
  it('should return empty array when no paths are provided', () => {
    const object = { a: 1 };
    expect(at(object)).to.deep.equal([]);
    });
});