// logger.js

const { createLogger, transports, format } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }), // only log error level messages to error.log
    new transports.File({ filename: 'logs/combined.log' }) // log all levels to combined.log
  ]
});

module.exports = logger;