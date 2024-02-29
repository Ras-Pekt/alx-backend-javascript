const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber function', function () {
  it('should correctly add two numbers', function () {
    assert.equal(calculateNumber(1, 2), 3);
  });

  it('should correctly add a number and a decimal', function () {
    assert.equal(calculateNumber(1, 0.5), 2);
  });

  it('should correctly add two negative numbers', function () {
    assert.equal(calculateNumber(-1, -2), -3);
  });

  it('should correctly add a positive and a negative number', function () {
    assert.equal(calculateNumber(1, -2), -1);
  });

  it('should correctly add two large numbers', function () {
    assert.equal(calculateNumber(1000000, 2000000), 3000000);
  });

  it('should return the other number if one is zero', function () {
    assert.equal(calculateNumber(0, 5), 5);
  });
});
