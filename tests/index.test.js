import request from "supertest";
import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Welcome to Simple Node.js Project using CircleCI");
});

describe("GET /", () => {
  it("should return a welcome message", async () => {
    const response = await request(app).get("/");

    // Log the response for debugging purposes
    console.log("Response status:", response.status);
    console.log("Response text:", response.text);

    // Assert that the status and text are correct
    expect(response.status).toBe(200);
    expect(response.text).toBe(
      "Welcome to Simple Node.js Project using CircleCI"
    );
  });
});
