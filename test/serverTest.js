process.env.NODE_ENV = 'test';   

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('Photos', function () {
  it('should list ALL photos on / GET', function (done) {
    this.timeout(60000);
    chai.request(server)
      .get('/')
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.html;

        // ✅ HTML responses come as text
        res.text.should.be.a('string');
        res.text.should.include('<'); // basic HTML check
        res.text.should.include('</html>'); // optional: check end tag

        done();
      });
  });
});
