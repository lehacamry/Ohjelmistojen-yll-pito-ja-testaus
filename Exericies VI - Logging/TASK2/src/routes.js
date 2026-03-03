// routes.js

const express = require('express'); // we are importing the express module to create a simple web server
const logger = require('./logger'); // we are using the logger defined in logger.js to log messages of different levels
const counter = require('./counter'); // we are importing the counter module to manage the counter state

const router = express.Router();

// we are defining routes to handle incoming requests.

// Counter-increase route increases the counter value by 1 and logs the action
router.get('/counter-increase', (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-increase'");
  const value = counter.increaseCounter();
  res.json({ count: value });
});

// Counter-read route reads the current counter value and logs the action
router.get('/counter-read', (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-read'");
  const value = counter.readCounter();
  res.json({ count: value });
});

// Counter-reset route resets the counter value to 0 and logs the action
router.get('/counter-reset', (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-reset'");
  const value = counter.resetCounter();
  res.json({ count: value });
});

module.exports = router; // we are exporting the router defined in this module so that it can be used in other modules