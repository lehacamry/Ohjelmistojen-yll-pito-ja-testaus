// get.test.js

import { expect } from 'chai';
import get from '../src/get.js';

/**
 * Tests for the get() function
 */
describe('get', () => {

  /**
   * It should return value using string path.
   */
  it('should return value using string path', () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(get(object, 'a[0].b.c')).to.equal(3);
  });

  /**
   * It should return value using array path.
   */
  it('should return value using array path', () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3);
  });

  /**
   * It should return default value when path does not exist.
   */
  it('should return default value when path does not exist', () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(get(object, 'a.b.c', 'default')).to.equal('default');
  });

});