import app from "../../src/app";
import supertest from "supertest";

jest.mock("../../src/app/models/Product.model.ts", () => {
  return require("../../src/libs/mocks/Product.model.ts");
});

const server = supertest(app);

describe("Product", () => {
  it("Deve obter a lista de produtos", async () => {
    const response = await server.get("/products").expect(200);
    const { body } = response;
    expect(Array.isArray(body)).toBe(true);
  });
});
