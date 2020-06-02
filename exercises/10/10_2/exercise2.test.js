const funcs = require('./functions');



test('mock Test', () => {
  
  funcs.randomNumb = jest.fn().mockImplementation((a, b) => a / b);

  funcs.randomNumb()
  expect(funcs.randomNumb).toHaveBeenCalled();
  expect(funcs.randomNumb).toHaveBeenCalledTimes(1);
  expect(funcs.randomNumb(10, 5)).toBe(2);
});
