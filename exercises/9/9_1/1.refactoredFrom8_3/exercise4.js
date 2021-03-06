// const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
module.exports = myRemove;
// // implemente seus testes aqui
// const array = [1, 2, 3, 4];
// // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// assert.deepStrictEqual(myRemove(array, 3), [1, 2, 4]);

// // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// assert.notDeepStrictEqual(myRemove(array, 3), array);

// // Verifique se o array passado por parâmetro não sofreu alterações
// assert.deepStrictEqual(array, [1, 2, 3, 4]);

// // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
// assert.deepStrictEqual(myRemove(array, 5), [1, 2, 3, 4]);
