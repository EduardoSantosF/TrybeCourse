const assert = require('assert');

function validaArray(array) {
  const exclusor = [3, 5, 7, 11];
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < exclusor.length; x++) {
      if (array[i] % exclusor[x] === 0) return false;
    }
  }
  return true;
}
assert.strictEqual(validaArray([1, 2]), true);
assert.strictEqual(validaArray([47, 23]), true);
assert.strictEqual(validaArray([1, 100, 240]), false);
assert.strictEqual(validaArray([1, 6, 15, 22]), false);
