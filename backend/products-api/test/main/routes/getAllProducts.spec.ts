import request from "supertest";
import app from "../../../src/main/config/app";
import { MongoHelper } from "../../../src/repositories/mongodb/helper/mongoHelper";

describe("Get products route", () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    MongoHelper.clearCollection("products");
  });

  test("should return a status code 200", async () => {
    await request(app).get("/Products").expect(200);
  });
});
