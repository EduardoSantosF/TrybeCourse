const funcs = require('./functions');



test('mock Test', () => {

  funcs.randomNumb = jest.fn().mockImplementation((a, b, c) => a * b * c);
  
  funcs.randomNumb()
  expect(funcs.randomNumb).toHaveBeenCalled();
  expect(funcs.randomNumb).toHaveBeenCalledTimes(1);
  expect(funcs.randomNumb(10, 5, 5)).toBe(250);

  funcs.randomNumb.mockReset();

  funcs.randomNumb = jest.fn().mockImplementation(a => a * 2);

  funcs.randomNumb()
  expect(funcs.randomNumb).toHaveBeenCalled();
  expect(funcs.randomNumb).toHaveBeenCalledTimes(1);
  expect(funcs.randomNumb(10)).toBe(20);
});
