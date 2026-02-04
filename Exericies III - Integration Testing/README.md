# HEX TO RGB CONVERTER with TEST functions

## Description
This project implements a simple REST API using Express for converting HEX color values to RGB format.

## Installation
- Clone the repository or extract the zip

## Initialize the project
- npm init -y

## Dependencies Installation
- npm install express
- npm install --save-dev mocha chai supertest

## Running Tests
Run unit tests and integration tests using Mocha:
- npm test

## Starting Development Server
- npm run dev
server will start at http://localhost:3000

## API Usage
- GET /hex?hex=#ff0000
server responce RGB(255, 0, 0)

## Project Structure
src/
 ├─ server.js         # Express REST API
 └─ converter.js      # Hex to RGB conversion logic

test/
 ├─ server.test.js    # Integration tests
 └─ converter.test.js # Unit tests
