const express = require("express");
const app = express();
//console.log(app);
let port = 3000;
app.listen(port, () => {
  console.log(`App Listening on port : ${port}`);
});
/* app.use((req, res) => {
  console.log("Request Recieved");
  //console.log(req);
  res.send(
    "<h1>Fruits</h1><ul>List<li>Orange</li><li>Apple</li><li>Banana</li></ul>"
  );
}); */
app.get("/", (req, res) => {
  console.log("response sent");
  res.send("This is App.Get Request Root Path");
});
app.get("/search", (req, res) => {
  console.log("response sent");
  let { q } = req.query;
  if (!q) {
    res.send("No search results found");
  } else {
    console.log(req.query);
    res.send(`Your Search results ${q}`);
  }
});
app.get("/orange", (req, res) => {
  console.log("response sent");
  res.send("This is App.Get Request Orange Path");
});
app.get("/apple", (req, res) => {
  console.log("response sent");
  res.send("This is App.Get Request Apple Path");
});
app.get("/banana", (req, res) => {
  console.log("response sent");
  res.send("This is App.Get Request Banana Path");
});
/* app.get("*", (req, res) => {
  console.log("response sent");
  res.send("<h1>404 Error</h1> This Page Does not Exists");
}); */
app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  console.log(req.params);
  res.send(`<h1>Varun</h1> This Page Exists ${username} and ${id}`);
});
app.post("/", (req, res) => {
  console.log("This is a post Request");
  res.send("You sent a post Request");
});
