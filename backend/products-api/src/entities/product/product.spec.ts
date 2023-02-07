import { Product } from "./Product";

describe("Product Model", () => {
  const product = new Product({
    name: "example",
    price: 19.9,
    description: "this is an example",
  });

  test("create product", () => {
    expect(product).toBeInstanceOf(Product);
  });

  test("it returns props with get methods", () => {
    const [name, price, description] = [
      product.name,
      product.price,
      product.description,
    ];

    expect([name, price, description]).toEqual([
      "example",
      19.9,
      "this is an example",
    ]);
  });
});
