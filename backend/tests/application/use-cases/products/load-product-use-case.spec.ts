import { describe, expect, it } from "vitest";
import { CreateProductUseCase } from "../../../../src/application/use-cases/products/create-product-use-case";
import { LoadProductsUseCase } from "../../../../src/application/use-cases/products/load-products-use-case";
import { InMemoryProductsRepository } from "../../repositories/in-memory-products-repository";

describe("Load products", () => {
  const products = [
    {
      name: "Teclado - Keychron",
      price: 50.99,
      quantity: 13,
    },
    {
      name: "Mouse - Red Dragon",
      price: 550.99,
      quantity: 3,
    },
    {
      name: "Monitor - AOC",
      price: 1550.99,
      quantity: 23,
    },
  ];

  it("should be able list all products", async () => {
    const productsRepository = new InMemoryProductsRepository();
    const createProduct = new CreateProductUseCase(productsRepository);
    const loadProducts = new LoadProductsUseCase(productsRepository);

    products.forEach(async (product) => {
      await createProduct.execute(product);
    });
    
    const { products: allProducts } = await loadProducts.execute();

    expect(allProducts).toHaveLength(3);
  });
});
