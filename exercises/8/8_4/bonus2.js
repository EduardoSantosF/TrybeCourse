const assert = require('assert');
// escreva a função removeMiddle para passar nos testes abaixo:
function removeMiddle(words) {
  const index = Math.floor(words.length / 2);
  const result = words[index];
  words.splice(index, 1);
  return [result];
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
