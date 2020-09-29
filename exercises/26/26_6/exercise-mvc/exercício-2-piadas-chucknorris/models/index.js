const Axios = require("axios");
const categoriesURL = "https://api.chucknorris.io/jokes/categories";
const jokeURL = "https://api.chucknorris.io/jokes/random";

const listCategories = async () => ({ categories: (await Axios(categoriesURL)).data });

const getJoke = async (category) => (await Axios(`${jokeURL}${category ? `?category=${category}` : ""}`)).data;

module.exports = { listCategories, getJoke };
