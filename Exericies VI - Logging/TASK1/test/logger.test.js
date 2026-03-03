// logger.test.js

const { expect } = require("chai");
const logger = require("../src/logger");

/**
 * Unit tests for logger.js
 *
 * @module test/logger
 */
describe("logger.js", () => {

  /**
   * Tests for logger object
   */
  describe("Logger configuration", () => {

    /**
     * It should export a defined logger instance.
     */
    it("should be defined", () => {
      expect(logger).to.exist;
    });

    /**
     * It should have info method.
     */
    it("should have info method", () => {
      expect(logger.info).to.be.a("function");
    });

    /**
     * It should have warn method.
     */
    it("should have warn method", () => {
      expect(logger.warn).to.be.a("function");
    });

    /**
     * It should have error method.
     */
    it("should have error method", () => {
      expect(logger.error).to.be.a("function");
    });

    /**
     * It should have log method.
     */
    it("should have log method", () => {
      expect(logger.log).to.be.a("function");
    });

  });

});