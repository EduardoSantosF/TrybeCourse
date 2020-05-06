const assert = require('assert');

function numPrimos(n) {
  const arr = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let x = 2; x < i; x++) {
      if (i % x === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) arr.push(i);
  }
  return arr;
}

assert.deepStrictEqual(numPrimos(5), [2, 3, 5]);
assert.deepStrictEqual(numPrimos('aaa'), []);
assert.deepStrictEqual(numPrimos(2), [2]);
assert.deepStrictEqual(numPrimos(4), [2, 3]);
assert.deepStrictEqual(numPrimos(6), [2, 3, 5]);
assert.deepStrictEqual(numPrimos(35), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
assert.deepStrictEqual(numPrimos(), []);


