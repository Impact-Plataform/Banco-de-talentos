import request from "supertest";
import app from "../../../src/main/config/app";

describe("Update product route", () => {
  test("Should return a product on success", async () => {
    const create = await request(app).post("/Products").send({
      name: "gamer chair",
      price: 699.99,
      description: "Top 1 best seller",
    });
    const { id } = create.body;

    await request(app)
      .put(`/Products/${id}`)
      .send({
        name: "gamer chair top 1",
        price: 400,
        description: "this product in liquidation",
      })
      .expect(200);
  });
  // test("Should return 400 code status if create product with same name", async () => {
  //   await request(app)
  //     .post("/Products")
  //     .send({
  //       name: "gamer chair",
  //       price: 750,
  //       description: "Top 3 best seller",
  //     })
  //     .expect(400);
  // });
});
