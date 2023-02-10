import request from "supertest";
import app from "../../../src/main/config/app";

describe("Register product route", () => {
  test("Should return a product on success", async () => {
    await request(app)
      .post("/Products")
      .send({
        name: "gamer chair",
        price: 699.99,
        description: "Top 1 best seller",
      })
      .expect(201);
  });
  test("Should return 400 code status if create product with same name", async () => {
    await request(app)
      .post("/Products")
      .send({
        name: "gamer chair",
        price: 750,
        description: "Top 3 best seller",
      })
      .expect(400);
  });
});
