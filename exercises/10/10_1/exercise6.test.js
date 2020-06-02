const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

// 6.1

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.find(e => e.name === name)
      if (result) resolve(result);
      reject('Nenhum animal com esse nome!');
    }, 200);
  })
)

const getAnimal = (name) => (
  // Adicione o código aqui.
  findAnimalByName(name)
)
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

// 6.2

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Animals.reduce((acc, curr) => {
        if (curr.age === age) acc.push(curr);
        return acc
      }, [])
      if (result.length > 0) resolve(result);
      reject("Nenhum animal encontrado");
    }, 200);
  })
)


describe('Teste função findAnimalByAge', () => {
  describe('quando existe a idade procurada', () => {
    test('retorna um array de objetos', async () => {
      expect.assertions(1);
      const result = await findAnimalByAge(5);
      const expected = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
      expect(result).toEqual(expected);
    });
  });
  describe('quando não existe a idade procurada', () => {
    test('Retonar erro', async () => {
      expect.assertions(1);
      try {
        await findAnimalByAge(8);
      } catch (error) {
        expect(error).toEqual('Nenhum animal encontrado');
      }
    });
  });
});
