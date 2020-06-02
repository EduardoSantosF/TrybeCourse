const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = (text) => {
  const container = document.getElementById('jokeContainer');
  const joke = document.createElement('p');
  joke.innerText = text;
  container.appendChild(joke);
}

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => appendJoke(data.joke));

};

window.onload = () => fetchJoke();

