const randomNumb = () => Math.round(Math.random() * 101);

const toUpperCase = str => str.toUpperCase();

const firstLetter = str => str.charAt(0);

const stringConcat = (a, b) => a + b;

module.exports = {
  randomNumb,
  toUpperCase,
  firstLetter,
  stringConcat,
}
