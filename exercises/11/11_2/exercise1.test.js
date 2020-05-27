const funcs = require('./functions');



test('mock Test', () => {
  
  funcs.randomNumb = jest.fn().mockReturnValue(10);

  funcs.randomNumb()
  expect(funcs.randomNumb).toHaveBeenCalled();
  expect(funcs.randomNumb).toHaveBeenCalledTimes(1);
  expect(funcs.randomNumb()).toBe(10);
});
