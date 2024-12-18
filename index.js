console.log("Simple node.js project using CircleCI");

import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Simple Node.js Project using CircleCI");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
