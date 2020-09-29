const express = require("express");
const listJokes = require("./controller/jokesController");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", listJokes);

app.listen(3000, ()=> console.log("Fala que te escuto"));
