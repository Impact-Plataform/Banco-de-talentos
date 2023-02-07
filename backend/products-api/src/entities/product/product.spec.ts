import { Product } from "./Product";

describe("Product Model", () => {
  test("create product", () => {
    const product = new Product({
      name: "example",
      price: 19.9,
      description: "this is an example",
    });

    expect(product).toBeInstanceOf(Product);
  });
});
