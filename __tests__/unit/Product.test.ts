import app from "../../src/app";
import supertest from "supertest";

jest.mock("../../src/app/models/Product.model.ts", () => {
  return require("../../src/libs/mocks/Product.model.ts");
});

const server = supertest(app);

describe("Get Products", () => {
  it("Should  get the list of products", async () => {
    const response = await server.get("/products").expect(200);
    const { body } = response;
    expect(Array.isArray(body)).toBe(true);
  });
  it("Should  get the list of products with query params", async () => {
    const response = await server
      .get("/products")
      .query({
        name: "Product",
        price: 500.1,
        createdBefore: "2022-05-05",
        createdAfter: "1998-05-05",
        updatedBefore: "2022-05-05",
        updatedAfter: "1998-05-05",
        sort: "name",
      })
      .expect(200);
    const { body } = response;
    expect(Array.isArray(body)).toBe(true);
  });

  it("Should get the list of products with valid quotation of EUR and USD", async () => {
    const response = await server.get("/products").expect(200);
    const { body } = response;
    const product = body[0];
    expect(Array.isArray(body)).toBe(true);
    expect(product).toHaveProperty("priceUSD");
    expect(product).toHaveProperty("priceEUR");
    expect(product.priceUSD).not.toBeNull();
    expect(product.priceEUR).not.toBeNull();
  });
});

describe("Create Product", () => {
  const data = {
    name: "Produto 2",
    price: "554.99",
  };

  it("Should create a product with valid info", async () => {
    const response = await server.post("/products").send(data).expect(201);
    const { body } = response;
    const { name, price } = body;
    expect(body).toHaveProperty("id");
    expect(name).toEqual(data.name);
    expect(price).toEqual(data.price);
  });
  it("Not should able to create a product with invalid name", async () => {
    const response = await server
      .post("/products")
      .send({ price: 5 })
      .expect(400);
    const { body } = response;
    const { name, price } = body;
    expect(body).not.toHaveProperty("id");
    expect(name).not.toEqual(data.name);
    expect(price).not.toEqual(data.price);
  });
  it("Not should able to create a product with invalid price", async () => {
    const response = await server
      .post("/products")
      .send({ name: "Produto 005" })
      .expect(400);
    const { body } = response;
    const { name, price } = body;
    expect(body).not.toHaveProperty("id");
    expect(name).not.toEqual(data.name);
    expect(price).not.toEqual(data.price);
  });
});
