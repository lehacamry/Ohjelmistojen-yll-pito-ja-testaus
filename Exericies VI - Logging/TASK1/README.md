# Task 1 -- Implement Logging Library

## Purpose of the Task

The purpose of this task was to become familiar with the Winston logging
library and integrate it into a Node.js application.

The objectives were:

-   Initialize a Node.js project\
-   Install and configure the Winston logging library\
-   Integrate logging into the application\
-   Capture different log levels (info, warn, error)\
-   Implement automated tests using Mocha and Chai

------------------------------------------------------------------------

## Installation & Setup

### 1. Initialize a new Node.js project

``` bash
git init
npm init -y
```

### 2. Install Winston as dependency

``` bash
npm install winston@3.11.0
```

### 3. Install testing libraries

``` bash
npm install --save-dev mocha chai
```

------------------------------------------------------------------------

## Running the Application

Start the application with:

``` bash
node src/main.js
```

------------------------------------------------------------------------

## Logging Configuration

The logger is configured in `src/logger.js`.

The following transports are used:

-   **Console transport** -- displays all log messages in the terminal\
-   **File transport (`error.log`)** -- stores only `error` level
    messages\
-   **File transport (`combined.log`)** -- stores all log levels
    (`info`, `warn`, `error`, etc.)

Log files are stored in the `logs/` directory.

------------------------------------------------------------------------

## Running Tests

Automated tests were implemented using:

-   **Mocha** (test runner)\
-   **Chai** (assertion library)

Run tests with:

``` bash
npm test
```

All tests completed succesfully \
The tests verify that:

-   The logger instance is properly created\
-   Required logging methods are available (`info`, `warn`, `error`,
    `log`)

------------------------------------------------------------------------

## Tested Environment

This project was tested with:

-   Node.js v24.x.x\
-   Winston 3.11.0\
-   Mocha 11.7.5\
-   Chai 6.2.2

You can check installed versions on your enviroment  with next command:

``` bash
npm list --depth=0
```

------------------------------------------------------------------------

## Project Structure

    .
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── src
    │   ├── logger.js
    │   └── main.js
    └── test
        └── logger.test.js

------------------------------------------------------------------------

## Summary

This task demonstrates how to integrate structured logging into a
Node.js application using Winston and validate its configuration through
automated testing.
