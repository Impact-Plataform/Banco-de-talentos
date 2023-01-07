import { describe, expect, it } from "vitest";
import { CreateProductUseCase } from "../../../../src/application/use-cases/products/create-product-use-case";
import { AppError } from "../../../../src/errors/app-error";
import { InMemoryProductsRepository } from "../../repositories/in-memory-products-repository";

describe("Create products", () => {
  it("should be able create a new product", async () => {
    const productsRepository = new InMemoryProductsRepository();
    const createProduct = new CreateProductUseCase(productsRepository);

    const newProduct = {
      name: "Teclado - Keychron",
      price: 550.99,
      quantity: 3,
    };

    await createProduct.execute(newProduct);

    const product = await productsRepository.findByName("Teclado - Keychron");

    expect(product).toHaveProperty("id");
    expect(product).toHaveProperty("createdAt");
  });

  it("should not be able create a product with duplicated name", async () => {
    const productsRepository = new InMemoryProductsRepository();
    const createProduct = new CreateProductUseCase(productsRepository);

    const newProduct = {
      name: "Teclado - Keychron",
      price: 550.99,
      quantity: 3,
    };
    await createProduct.execute(newProduct);

    expect(createProduct.execute(newProduct)).rejects.toBeInstanceOf(AppError);
  });
});
