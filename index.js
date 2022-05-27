// Require needed modules
require("dotenv").config();
const express = require("express");

//initialize the app project
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.send("<h1>404 Page Error</h1>");
});

app.listen(process.env.PORT);
