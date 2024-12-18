import jestConfig from "./jest.config";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Simple Node.js Project using CircleCI");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

export default app;
