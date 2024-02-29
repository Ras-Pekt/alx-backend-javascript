const expect = require('chai').expect;
const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let spyObj;

  beforeEach(function () {
    spyObj = sinon.spy(console, 'log');
  });

  afterEach(function () {
    expect(spyObj.calledOnce).to.be.true;
    spyObj.restore();
  });

  it('The total is: 120', function () {
    sendPaymentRequestToApi(100, 20);
    expect(spyObj.calledWith('The total is: 120')).to.be.true;
  });

  it('The total is: 20', function () {
    sendPaymentRequestToApi(10, 10);
    expect(spyObj.calledWith('The total is: 20')).to.be.true;
  });
});
