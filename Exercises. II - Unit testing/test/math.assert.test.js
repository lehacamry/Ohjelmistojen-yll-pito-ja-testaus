// https://www.chaijs.com/guide/styles/

// Error messages (constants)
const TXT_INPUTS_NUMBERS_ERROR = "Inputs must be numbers";
const TXT_INPUT_NUMBER_ERROR = "Input must be a number";
const TXT_DIV_ZERO_ERROR = "Division by zero is not allowed";

const assert = require("chai").assert;
const { add, subtract, multiply, divide, isEven } = require("../src/mylib");



describe("mylib.js (assert skeleton)", () => {
  // this test suite start before all tests
  before(() => {
    console.log("\nStarting the test suite...\n\n");
  });
  describe("add()", () => {
    it("should add two numbers correctly", () => {
      assert.equal(add(2, 3), 5)
    });

    it("should throw an error if inputs are not numbers", () => {
      assert.throws(() => add(2, "a"), TXT_INPUTS_NUMBERS_ERROR)
      assert.throws(() => add("b", 2), TXT_INPUTS_NUMBERS_ERROR)
    });
  });

    describe("subtract()", () => {
      it("should subtract two numbers correctly", () => {
      assert.equal(subtract(5, 3), 2)
      });

      it("should throw an error if inputs are not numbers", () => {
      assert.throws(() => subtract(5, "a"), TXT_INPUTS_NUMBERS_ERROR)
      assert.throws(() => subtract("b", 3), TXT_INPUTS_NUMBERS_ERROR)
      });
    });

    describe("multiply()", () => {
        it("should multiply two numbers correctly", () => {
          assert.equal(multiply(4, 3), 12)
        });
        it("should throw an error if inputs are not numbers", () => {
          assert.throws(() => multiply(4, "a"), TXT_INPUTS_NUMBERS_ERROR)
          assert.throws(() => multiply("b", 3), TXT_INPUTS_NUMBERS_ERROR)
        });
    });

    describe("divide()", () => {
        it("should divide two numbers correctly", () => {
          assert.equal(divide(6, 3), 2)
        });

        it("should throw an error if inputs are not numbers", () => {
          assert.throws(() => divide(6, "a"), TXT_INPUTS_NUMBERS_ERROR)
          assert.throws(() => divide("b", 3), TXT_INPUTS_NUMBERS_ERROR)
        });
        it("should throw an error when dividing by zero", () => {
          assert.throws(() => divide(6, 0), TXT_DIV_ZERO_ERROR)
        });
    });

    describe("isEven()", () => {
        it("should return true for even numbers", () => {
        assert.equal(isEven(4), true);
        });

        it("should return false for odd numbers", () => {
        assert.isFalse(isEven(3));
        });
        it("should throw an error for input are not number", () => {
        assert.throws(() => isEven("a"), TXT_INPUT_NUMBER_ERROR);
        });
    });

  // this test suite end after all tests
  after(() => {
    console.log("\n\nTest suite has ended.");
  });
});
