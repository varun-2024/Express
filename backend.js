const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

port = 8080;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});
