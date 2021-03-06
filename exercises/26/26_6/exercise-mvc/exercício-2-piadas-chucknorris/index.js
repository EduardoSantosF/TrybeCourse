const express = require("express");
const { showCategories, redirect } = require("./controllers/categories");
const { showJoke, searchJoke } = require("./controllers/jokes");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", redirect);

app.get("/categories", showCategories);

app.get("/jokes", showJoke);

app.get("/jokes/:categories", showJoke);

app.use(express.urlencoded({ extended: true }))

app.get("/search", searchJoke);

app.listen(3000, () => console.log("Vo ve e te aviso"))
