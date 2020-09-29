const getJokes = require("../models/joke");

const listJokes = async (_req, res) => res.render("jokeView", (await getJokes()));

module.exports = listJokes;
