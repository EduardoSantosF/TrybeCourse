const squaredRandomNumb = () => {
  const numb = Math.round(Math.random() * 51);
  return numb * numb
}

const divided = (numb) => new Promise((resolve, reject) => {
  const result = [2, 3, 5, 10].map(elem => numb / elem);
  resolve(result);
});

const somaArr = arr => arr.reduce((acc, curr) => acc + curr);

const promise = new Promise((resolve, reject) => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(squaredRandomNumb());
  }
  const soma = somaArr(arr);
  soma < 8000 ? resolve(soma) : reject();
});

const onError = () => console.log('É mais de oito mil! Essa promise deve estar quebrada!”');

// promise
//   .then(divided)
//   .then((result) => console.log(somaArr(result)))
//   .catch(onError;

async function asyncFunc() {
  try {
    const soma = await promise;
    const dividedNumb = await divided(soma);
    await console.log(somaArr(dividedNumb));
  } catch (error) {
    onError();
  }
}
asyncFunc();
