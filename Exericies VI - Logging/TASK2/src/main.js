// main.js

// we are importing the express module to create a simple web server
const express = require('express');
// we are using the logger defined in logger.js to log messages of different levels
const logger = require('./logger');

const routes = require('./routes'); // we are importing the routes defined in routes.js to handle incoming requests

const app = express();
const port = 3000;

app.use('/', routes);

const server = app.listen(port, () => {
  logger.info('[MAIN] Starting'); // we are logging server starting message
});

process.on('SIGINT', () => { 
  logger.info('[MAIN] Stopping'); // loging server kill/stop/ctrl +c  message 
  server.close(() => process.exit(0));
});

module.exports = server;