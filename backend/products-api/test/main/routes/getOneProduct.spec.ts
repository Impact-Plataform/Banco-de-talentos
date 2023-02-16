import request from "supertest";
import app from "../../../src/main/config/app";

describe("Get products route", () => {
  test("should return a status code 200", async () => {
    const createProduct = await request(app)
      .post("/Products")
      .send({ name: "any", price: 50, description: "any" });

    const { id } = createProduct.body;

    await request(app).get(`/Products/${id}`).expect(200);
  });
});
