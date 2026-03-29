// words.test.js

import { expect } from 'chai';
import words from '../src/words.js';

/**
 * Tests for the words() function
 */
describe('words', () => {


  /**
   * It should include special characters when custom pattern is used.
   */
  it('should use custom pattern when provided', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
  });

    /**
   * It should include special characters when custom pattern is used.
   */
  it('should use custom pattern when provided', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).to.deep.equal(['fred', 'barney', '&', 'pebbles']);
  });

  /**
   * It should return an empty array for an empty string.
   */
  it('should return an empty array for an empty string', () => {
    expect(words('')).to.deep.equal([]);
  });

  /**
   * It should split words with numbers.
   */
  it('should split words with numbers', () => {
    expect(words('abc123 def456')).to.deep.equal(['abc', '123', 'def', '456']);
});

});