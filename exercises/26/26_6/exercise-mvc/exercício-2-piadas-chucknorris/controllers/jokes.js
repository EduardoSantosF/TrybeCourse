const { getJoke, search } = require("../models");

const showJoke = async (req, res) => res.render("joke", { result: [(await getJoke(req.params.categories))] });

const searchJoke = async (req, res) => res.render("joke", {
  result: (await search(req.query.query)).result.slice(0, 10)
})

module.exports = { showJoke, searchJoke };
