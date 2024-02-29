const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function () {
  it('async tests with done', function (done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.include({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => done(error));
  });
});
