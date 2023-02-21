import request from "supertest";
import app from "../../../src/main/config/app";

describe("Get all currencies route", () => {
  test("should return all currencies", async () => {
    await request(app).get("/Currency").expect(200);
  });
});
