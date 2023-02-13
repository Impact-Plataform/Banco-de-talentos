import request from "supertest";
import app from "../../../src/main/config/app";

describe("delete product by name route", () => {
  beforeEach(async () => {
    await request(app).post("/Products").send({
      name: "any_product",
      price: 200,
      description: "any description",
    });
  });
  test("it should return a 200 status code when delete a existing product", async () => {
    await request(app)
      .delete("/Products")
      .send({ name: "any_product" })
      .expect(200);
  });
});
