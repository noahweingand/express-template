const app = require("../server.js");
const expect = require('chai').expect
const request = require('supertest');
const mlog = require('mocha-logger');

describe('Is server up?', function() {

  it('should return 200 status & message string', function() {
    return request(app)
      .get('/api/_health')
      .then( function(response, err) {
        if(err) { console.log("Server is down!") }
          expect(response.status).to.equal(200);
      })
  });
});