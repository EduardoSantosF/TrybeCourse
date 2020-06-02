const funcs = require('./functions');


test('mock Test', () => {

  funcs.toUpperCase = jest.fn().mockImplementation(str => str.toLowerCase());

  funcs.toUpperCase('');
  expect(funcs.toUpperCase).toHaveBeenCalled();
  expect(funcs.toUpperCase).toHaveBeenCalledTimes(1);
  expect(funcs.toUpperCase('XABLAU')).toBe('xablau');

  funcs.firstLetter = jest.fn().mockImplementation(str => str.substr(-1));

  funcs.firstLetter('');
  expect(funcs.firstLetter).toHaveBeenCalled();
  expect(funcs.firstLetter).toHaveBeenCalledTimes(1);
  expect(funcs.firstLetter('XABLAU')).toBe('U');

  funcs.stringConcat = jest.fn().mockImplementation((a, b, c) => a + b + c);

  funcs.stringConcat();
  expect(funcs.stringConcat).toHaveBeenCalled();
  expect(funcs.stringConcat).toHaveBeenCalledTimes(1);
  expect(funcs.stringConcat('XA','BLA','U')).toBe('XABLAU');

});


