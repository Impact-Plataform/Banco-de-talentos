import request from "supertest";
import app from "../../../src/main/config/app";

describe("Get products route", () => {
  test("should return a status code 200", async () => {
    await request(app).get("/Products").expect(200);
  });
});
