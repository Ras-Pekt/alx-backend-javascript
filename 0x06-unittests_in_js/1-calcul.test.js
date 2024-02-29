const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('SUM', () => {
  it('should add two integers correctly', () => {
    assert.strictEqual(calculateNumber('SUM', 3, 5), 8);
  });

  it('should add two floating-point numbers correctly', () => {
    assert.strictEqual(calculateNumber('SUM', 3.5, 2.5), 7);
  });

  it('should round numbers before adding', () => {
    assert.strictEqual(calculateNumber('SUM', 3.2, 2.8), 6);
  });

});

describe('SUBTRACT', () => {
  it('should subtract two integers correctly', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 10, 3), 7);
  });

  it('should subtract two floating-point numbers correctly', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.5), 3);
  });

  it('should round numbers before subtracting', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 6.5, 2.8), 4);
  });

});

describe('DIVISION', () => {
  it('should divide two integers correctly', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
  });

  it('should divide two floating-point numbers correctly', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2.5), 2);
  });

  it('should round numbers before dividing', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 7.5, 2.2), 4);
  });

  it('should handle division by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
  });

});
