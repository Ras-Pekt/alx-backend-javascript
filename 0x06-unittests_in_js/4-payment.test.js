const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('Utils function', function () {
  it('usage of the Utils function', function () {
    const sinonStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const sinonSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(sinonStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(sinonSpy.calledOnceWithExactly('The total is: 10'));
    sinonStub.restore();
    sinonSpy.restore();
  });
});
