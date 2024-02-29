const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const spyObj = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(spyObj.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spyObj.calculateNumber.callCount).to.be.equal(1);
    spyObj.calculateNumber.restore();
  });
});
