import request from "supertest";
import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to Simple Node.js Project using CircleCI");
});

describe("GET /", () => {
  it("should return a welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe(
      "Welcome to Simple Node.js Project using CircleCI"
    );
  });
});
