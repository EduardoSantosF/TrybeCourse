const { getJoke } = require("../models");

const showJoke = async (req, res) => res.render("joke", (await getJoke(req.params.categories)));

module.exports = showJoke
