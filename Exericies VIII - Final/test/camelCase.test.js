// camelCase.test.js

import { expect } from 'chai';
import camelCase from '../src/camelCase.js';

/**
 * Tests for the camelCase() function
 */
describe('camelCase', () => {
  /**
   * It should convert a string to camelCase.
   */
  it('should convert a string to camelCase', () => {
    expect(camelCase('Foo Bar')).to.equal(' fooBar');
    expect(camelCase('--foo-bar--')).to.equal(' fooBar');
    expect(camelCase('__FOO_BAR__')).to.equal(' fooBar');
  });

  /**
   * It should handle numbers in the string.
   */
  it('should handle numbers in string', () => {
    expect(camelCase('foo 123 bar')).to.equal(' foo123Bar');
  });
});