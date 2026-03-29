// capitalize.test.js

import { expect } from 'chai';
import capitalize from '../src/capitalize.js';
/**
 * Tests for the capitalize() function
 */
describe('capitalize', () => {
    /**
     * It should capitalize the first letter of a string.
     */
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('FRED')).to.equal('Fred');
    });

    it('should capitalize the first letter of a string', () => {
      expect(capitalize('fred')).to.equal('Fred');
    });    

    /**
     * It should handle numbers by converting to string.
     */
    it('should handle numbers by converting to string', () => {
      expect(capitalize(123)).to.equal('123');
    });
});