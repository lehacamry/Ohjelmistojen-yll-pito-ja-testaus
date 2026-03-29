// add.test.js

import { expect } from 'chai';
import add from '../src/add.js';

   /**
   * Tests for the add() function
   */
describe('add', () => {
    /**
     * It should correctly add two positivenumbers.
     */
  it('should add two positive numbers', () => {
    expect(add(6, 4)).to.equal(10);
  });
    /**
     * It should correctly add two negative numbers.
     */
  it('should add negative numbers', () => {
    expect(add(-2, -3)).to.equal(-5);
  });
    /**
     * It should return a string when one argument is a string.
     */
  it('should return a string when one argument is a string', () => {
    expect(add(2, 'a')).to.be.a('string');
  });
});