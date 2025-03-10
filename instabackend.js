const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, (req, res) => {
  console.log(`Listening on ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.get("/ig/:username", (req, res) => {
  const instaData = require("./data.json");
  console.log(instaData);
  res.render("instagram.ejs", { data: instaData });
});
