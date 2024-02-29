const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('tests calculateNumber function', function () {
  it('should return a whole number as result', function () {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
