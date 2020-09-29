const Axios = require("axios");
const categoriesURL = "https://api.chucknorris.io/jokes/categories";
const jokeURL = "https://api.chucknorris.io/jokes/random";

const listCategories = async () => ({ categories: (await Axios(categoriesURL)).data });

const getJoke = async (category) => (await Axios(`${jokeURL}${category ? `?category=${category}` : ""}`)).data;

const search = async (query) => (await Axios(`https://api.chucknorris.io/jokes/search?query=${query}`)).data;

module.exports = { listCategories, getJoke, search };
