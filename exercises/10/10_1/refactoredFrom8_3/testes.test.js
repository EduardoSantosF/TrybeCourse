const ex1 = require('./exercise1');
const ex2 = require('./exercise2');
const ex3 = require('./exercise3');
const ex4 = require('./exercise4');
const ex5 = require('./exercise5');
const ex6 = require('./exercise6');



describe('exercise 1', () => {
  test('testa soma de valores', () => {
    expect(ex1(4, 5)).toBe(9);
    expect(ex1(0, 0)).toBe(0);
  });

  test('testa erros com Not numbers', () => {
    expect(() => ex1(4, '5')).toThrow(/parameters must be numbers/);
  });
});

describe('exercise 2', () => {
  test('testa retorno esperado', () => {
    const array = [1, 2, 3, 4];
    expect(ex2(array, 3)).toBe(2);
    expect(ex2(array, 5)).toBe(-1);
  });
});

describe('exercise 3', () => {
  test('testa retorno esperado', () => {
    expect(ex3([1, 2, 3, 4])).toBe(10);
    expect(ex3([1, -2, -3, 4])).toBe(0);
  });
});

describe('exercise 4', () => {
  test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const array = [1, 2, 3, 4];
    expect(ex4(array, 3)).toEqual([1, 2, 4]);
    expect(ex4(array, 5)).toEqual([1, 2, 3, 4]);
    expect(ex4(array, 3)).not.toEqual([1, 2, 3, 4]);
    expect(array).toEqual([1, 2, 3, 4]);
  });
});

describe('exercise 5', () => {
  test('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(ex5([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Verifica se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(ex5([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifica se o array passado por parâmetro sofreu alterações', () => {
    const array = [1, 2, 3, 4];
    ex5(array, 3);
    expect(array).not.toEqual([1, 2, 3, 4]);
  });

  test('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(ex5([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('exercise 6', () => {
  test('Verifica se o retorno é o esperado', () => {
    expect(ex6(15)).toBe('fizzbuzz');
    expect(ex6(6)).toBe('fizz');
    expect(ex6(5)).toBe('buzz');
    expect(ex6(16)).toBe(16);
    expect(ex6('lul')).toBe(false);
  });
});
