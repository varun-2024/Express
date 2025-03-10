const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const port = 8080;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/ig/:username", (req, res) => {
  const followers = ["John", "Steve", "Mike", "Doe"];
  let { username } = req.params;
  res.render("home.ejs", { username, followers });
});
app.get("/rolldice", (req, res) => {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { diceValue });
});
