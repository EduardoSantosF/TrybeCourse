const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }
    return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

// 2

describe('exercise 2', () => {
  test('user found', () => {
    expect.assertions(1);
    return getUserName(5).then(name => { // or resolves
      expect(name).toBe('Paul');
    })
  });
  test('user not found', () => {
    expect.assertions(1);
    return getUserName(6).catch(erro => {  // or rejects
      expect(erro).toEqual({ error: 'User with 6 not found.' });
    })
  });
});

// 3

describe('exercise 3', () => {
  test('user found', async () => {
    expect.assertions(1);
    const name = await getUserName(5);
    expect(name).toBe('Paul');
  });
  test('user not found', async () => {
    expect.assertions(1);
    try {
      await getUserName(6);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 6 not found.' });
    }
  });
});
