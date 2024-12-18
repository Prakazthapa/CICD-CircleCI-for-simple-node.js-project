import request from "supertest";
import app from "../index.js";

describe("GET /", () => {
  it("should return a welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe(
      "Welcome to Simple Node.js Project using CircleCI"
    );
  });
});
