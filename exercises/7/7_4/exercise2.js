const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
function wordLengths(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].length);
  }
  return result;
}
//

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
