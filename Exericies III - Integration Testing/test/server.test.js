const request = require("supertest");
const expect = require("chai").expect;

process.env.NODE_ENV = "test"; // ensure server exports app
const app = require("../src/server"); // import the Express app for testing

/**
 * Integration tests for the Converter API.
 * Uses Supertest for HTTP requests and Chai for assertions.
 */
describe("Converter API", () => {
	/**
	 * Test the root route.
	 * Expects a 200 status and "Hello" response text.
	 */
	it("responds to the root route", async () => {
		const res = await request(app).get("/");
		expect(res.status).to.equal(200);
		expect(res.text).to.equal("Hello");
	});

	/**
	 * Test the /hex route with query parameters.
	 * Expects HTTP status 200.
	 */
	it("returns status 200 for /hex", async () => {
		const res = await request(app).get("/hex?hex=%23ff0000");
		expect(res.status).to.equal(200);
	});

	/**
	 * Test the /hex route for correct hex to rgb conversion.
	 * Expects rgb color numbers in response text.
	 */
	it("returns rgb color", async () => {
		const res = await request(app).get("/hex?hex=%23ff0000");
		expect(res.text).to.equal("RGB(255, 0, 0)");
	});
	
});