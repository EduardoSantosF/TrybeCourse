const fetch = require('node-fetch');
const URL = 'https://api.github.com/users/tryber/repos';

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}
    
describe('exercise 4', () => {
    test('has repository', async () => {
      expect.assertions(2);
      const repos = await getRepos(URL);
      expect(repos).toContain('sd-01-week4-5-project-todo-list');
      expect(repos).toContain('sd-01-week4-5-project-meme-generator');
    });
});
