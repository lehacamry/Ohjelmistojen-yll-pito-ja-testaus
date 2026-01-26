// mylib.js

// Error messages (constants)
const TXT_INPUTS_NUMBERS_ERROR = "Inputs must be numbers";
const TXT_INPUT_NUMBER_ERROR = "Input must be a number";
const TXT_DIV_ZERO_ERROR = "Division by zero is not allowed";

// Basic math operations with error handling

function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error(TXT_INPUTS_NUMBERS_ERROR);
  }

  return a + b;
}

function subtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error(TXT_INPUTS_NUMBERS_ERROR);
  }

  return a - b;
}

function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error(TXT_INPUTS_NUMBERS_ERROR);
  }

  return a * b;
}

function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error(TXT_INPUTS_NUMBERS_ERROR);
  }
  if (b === 0) {
    throw new Error(TXT_DIV_ZERO_ERROR);
  }

  return a / b;
}

function isEven(n) {
  if (typeof n !== "number") {
    throw new Error(TXT_INPUT_NUMBER_ERROR);
  }
  return n % 2 === 0;
}

module.exports = { add, subtract, multiply, divide, isEven };