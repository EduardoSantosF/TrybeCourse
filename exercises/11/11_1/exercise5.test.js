beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
// my result            // correct result
// 1 - beforeEach       // 1 - beforeEach       V
// 1 - test             // 1 - test             V
// 1 - afterEach        // 1 - afterEach        V
// 1 - beforeEach       // 1 - beforeEach       V
// 2 - beforeEach       // 2 - beforeEach       V
// 2 - test             // 2 - test             v
// 1 - afterEach        // 2 - afterEach        X
// 2 - afterEach        // 1 - afterEach        X
