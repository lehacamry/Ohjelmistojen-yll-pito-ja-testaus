# Task 2 -- Tally Counter REST API

## Purpose of the Task

In this task, I implemented a simple REST API using Express and added logging with Winston.

The main goals were:

-   Create a REST API using Express
-   Separate the code into modules (main, routes, controller)
-   Add structured logging
-   Follow the required log syntax
-   Write automated tests using Mocha, Chai and Supertest

------------------------------------------------------------------------

## Installation & Setup

### 1. Initialize the project

``` bash
git init
npm init -y
```

### 2. Install required dependencies

``` bash
npm install express@4.18.2
npm install winston@3.11.0
```

### 3. Install testing libraries

``` bash
npm install --save-dev mocha chai supertest
```

------------------------------------------------------------------------

## Running the Application

Start the server with:

``` bash
node src/main.js
```

When the application starts, the counter value is initialized to **0**.

When the server is running, log messages are generated depending on what
happens in the application.

Logging is separated using simple tags:

-   `[MAIN]` -- server start and stop events\
-   `[ENDPOINT]` -- when an HTTP route is called\
-   `[COUNTER]` -- when the counter value changes

These tags help to see which part of the application produced the log
message.\
All logs can be observed in the console, which makes it easier to notice
problems, errors, or unexpected behaviour.

------------------------------------------------------------------------

## REST API Endpoints

The application provides three GET endpoints:

``` bash
GET /counter-increase   → { "count": 1 }
GET /counter-read       → { "count": 0 }
GET /counter-reset      → { "count": 0 }
```

-   `/counter-increase` increases the counter value by 1 and returns the
    updated value\
-   `/counter-read` returns the current counter value\
-   `/counter-reset` resets the counter to 0 and returns the reset value

------------------------------------------------------------------------

## Logging Output

Logs are written to:

-   **Console** -- shows all log messages\
-   **logs/error.log** -- contains only error-level logs\
-   **logs/combined.log** -- contains all log levels

------------------------------------------------------------------------

## Running Tests

Tests were implemented using:

-   **Mocha** as the test runner\
-   **Chai** for assertions\
-   **Supertest** for HTTP endpoint testing

Run tests with:

``` bash
npm test
```

The tests verify:

-   Counter increase functionality\
-   Counter reset functionality\
-   Counter read functionality

------------------------------------------------------------------------

## Tested Environment

This project was tested with:

-   Node.js v24.x.x\
-   Express 4.18.2\
-   Winston 3.11.0\
-   Mocha 11.7.5\
-   Chai 6.2.2\
-   Supertest 7.2.2

Installed versions can be checked with:

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
    ├── rest.http
    ├── src
    │   ├── logger.js
    │   ├── main.js
    │   ├── counter.js
    │   └── routes.js
    └── test
        └── server.test.js

------------------------------------------------------------------------

## Summary

In this task, I built a modular REST API in Node.js, added structured logging with Winston, and verified functionality using automated tests.

I also implemented custom log tags to clearly separate different types of events, which makes debugging and understanding application behaviour faster and easier.
