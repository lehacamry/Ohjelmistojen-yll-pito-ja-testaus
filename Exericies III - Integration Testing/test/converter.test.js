// converter.test.js

// Error messages (constants)
// math.test.js

const { expect } = require("chai");
const { hexToRgb } = require("../src/converter");

/**
 * Unit tests for converter.js
 *
 * @module test/converter
 */
describe("convertor.js", () => {
  /**
   * Tests for the hex() function
   */
  describe("hex()", () => {
    /**
     * It should correctly convert hex to RGB code.
     */
    it("should convert hex colors to rgb correctly", () => {
      expect(hexToRgb("#ff0000")).to.deep.equal({ r: 255, g: 0, b: 0 });
    });

    /**
     * It should throw an error if inputs are less or more digits than 6.
     */
    it("should throw an error if inputs are not numbers", () => {
      expect(() => hexToRgb("12345")).to.throw("Invalid hex color format");
      expect(() => hexToRgb("#1234")).to.throw("Invalid hex color format");
      expect(() => hexToRgb("#1234567")).to.throw("Invalid hex color format");
    });
  });


});






/* const TXT_WRONG_HEX_COLOR = "Invalid hex color format";

const assert = require("chai").assert;
const { hexToRgb } = require("../src/converter");
describe("converter.js (assert skeleton)", () => {
  // this test suite start before all tests
  before(() => {
    console.log("\nStarting the test suite...\n\n");
  });

  describe("hexToRgb()", () => {
    it("should convert hex color to RGB correctly", () => {
      const rgb = hexToRgb("#ff0000");
      assert.deepEqual(rgb, { r: 255, g: 0, b: 0 });
      });

    it("should throw an error for invalid hex color format", () => {
      assert.throws(() => hexToRgb("12345"), TXT_WRONG_HEX_COLOR);
      assert.throws(() => hexToRgb("#1234"), TXT_WRONG_HEX_COLOR);
      assert.throws(() => hexToRgb("#1234567"), TXT_WRONG_HEX_COLOR);
    });
  });

  // this test suite end after all tests
  after(() => {
    console.log("\n\nTest suite has ended.");
  });
}); */



/* describe("converter.js (assert skeleton)", () => {
  // this test suite start before all tests
  before(() => {
    console.log("\nStarting the test suite...\n\n");
  });
  describe("converter()", () => {
    it("should add two numbers correctly", () => {
      assert.equal(add(2, 3), 5)
    });

    it("should throw an error if inputs are not numbers", () => {
      assert.throws(() => add(2, "a"), TXT_INPUTS_NUMBERS_ERROR)
      assert.throws(() => add("b", 2), TXT_INPUTS_NUMBERS_ERROR)
    });
  }); */


