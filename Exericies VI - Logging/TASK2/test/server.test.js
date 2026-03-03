// server.test.js

const request = require("supertest");
const expect = require("chai").expect;

let server;

describe('Counter REST API', () => {

  before(() => {
    // starting the server before running tests
    server = require('../src/main');
  });

  after((done) => {
    // close the server after tests are done
    server.close(done);
  });

  beforeEach(async () => {
    // reset counter before each test to make tests independent
    await request(server).get('/counter-reset');
  });

  it("GET /counter-increase should increase counter", async () => { // testing the counter increase endpoint
    let res = await request(server).get('/counter-increase');
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ count: 1 });

    res = await request(server).get('/counter-increase');
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ count: 2 });
  });

  it("GET /counter-reset should reset to 0", async () => {  // testing the counter reset endpoint
    const res = await request(server).get('/counter-reset');
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ count: 0 });
  });

  it("GET /counter-read should return 0 after reset", async () => { // testing the counter read endpoint after reset
    const res = await request(server).get('/counter-read');
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ count: 0 });
  });

});