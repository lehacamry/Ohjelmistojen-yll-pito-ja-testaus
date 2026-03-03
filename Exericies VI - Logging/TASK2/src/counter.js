// counter.js

// This module defines a simple counter with methods to hold, increase, read, and reset the counter value.

const logger = require('./logger'); // we are importing the logger defined in logger.js to log messages related to counter operations

let counter = 0; // this variable holds the current value of the counter

// this function returns the current value of the counter
function readCounter() {
  logger.info(`[COUNTER] read ${counter}`);
  return counter;
}

// this function increases the counter value by 1
function increaseCounter() {
  counter += 1;
  logger.info(`[COUNTER] increase ${counter}`); // after the increase
  return counter;
}

// this function resets the counter value to 0
function resetCounter() {
  counter = 0;
  logger.info(`[COUNTER] zeroed ${counter}`);
  return counter;
}

// we are exporting the functions defined in this module so that they can be used in other modules
module.exports = {
  readCounter,
  increaseCounter,
  resetCounter
};