// Require needed modules
require("dotenv").config();
const express = require("express");

//initialize the app project
const app = express();
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("*", (req, res) => {
  res.send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);
