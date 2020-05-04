//exercise 1

const fatorial = (num) => num===0 ? 1 : num * fatorial(num - 1);
console.log(fatorial(5));
