const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber() with type SUM', function () {
  it('return 4 when adding 1 and 3', function () {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
  it('return 5 when adding 1 and 3.7', function () {
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('return 5 when adding 1.2 and 3.7', function () {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
  });
  it('return 6 when adding 1.5 and 3.7', function () {
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('return 0 when adding 0.1 and 0.3', function () {
    assert.equal(calculateNumber('SUM', 0.1, 0.3), 0);
  });
  it('return 0 when adding -0.7 and 0.7', function () {
    assert.equal(calculateNumber('SUM', -0.7, 0.7), 0);
  });
  it('return -2 when adding -0.8 and -0.7', function () {
    assert.equal(calculateNumber('SUM', -0.8, -0.7), -2);
  });
});

describe('#calculateNumber() with type SUBTRACT', function () {
  it('return -2 when subtracting 1 and 3', function () {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('return -4 when subtracting 1.4 and 4.5', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('return -3 when subtracting 1.2 and 3.7', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
  });
  it('return -2 when subtracting 1.5 and 3.7', function () {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  it('return 0 when subtracting 0.1 and 0.3', function () {
    assert.equal(calculateNumber('SUBTRACT', 0.1, 0.3), 0);
  });
  it('return -2 when subtracting -0.7 and 0.7', function () {
    assert.equal(calculateNumber('SUBTRACT', -0.7, 0.7), -2);
  });
  it('return 0 when subtracting -0.8 and -0.7', function () {
    assert.equal(calculateNumber('SUBTRACT', -0.8, -0.7), 0);
  });
  it('return 1 when subtracting 0.8 and -0.4', function () {
    assert.equal(calculateNumber('SUBTRACT', 0.8, -0.4), 1);
  });
});

describe('#calculateNumber() with type DIVIDE', function () {
  it('return 0.25 when dividing 1 and 4', function () {
    assert.equal(calculateNumber('DIVIDE', 1, 4), 0.25);
  });
  it('return 0.25 when dividing 1 and 3.7', function () {
    assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
  });
  it('return 0.2 when dividing 1.4 and 4.5', function () {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('return 1 when dividing 1.6 and 2.4', function () {
    assert.equal(calculateNumber('DIVIDE', 1.6, 2.4), 1);
  });
  it('return 2 when dividing 4.2 and 1.5', function () {
    assert.equal(calculateNumber('DIVIDE', 4.2, 1.5), 2);
  });
  it("return 'Error' when dividing 1.3 and 0.3", function () {
    assert.equal(calculateNumber('DIVIDE', 1.3, 0.3), 'Error');
  });
  it('return -1 when dividing -0.7 and 0.7', function () {
    assert.equal(calculateNumber('DIVIDE', -0.7, 0.7), -1);
  });
  it('return 1 when dividing -0.8 and -0.7', function () {
    assert.equal(calculateNumber('DIVIDE', -0.8, -0.7), 1);
  });
  it('return -22 when dividing -44.5 and 2.4', function () {
    assert.equal(calculateNumber('DIVIDE', -44.5, 2.4), -22);
  });
  it('return 22 when dividing -88.5 and -3.6', function () {
    assert.equal(calculateNumber('DIVIDE', -88.5, -3.6), 22);
  });
});