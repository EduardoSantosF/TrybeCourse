const { listCategories } = require("../models");

const showCategories = async (_req, res) => res.render("categories/index", (await listCategories()));
const redirect = (_req, res) => res.redirect("/categories");

module.exports = { showCategories, redirect };
