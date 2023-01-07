import { describe, expect, it } from "vitest";
import { CreateProductUseCase } from "../../../../src/application/use-cases/products/create-product-use-case";
import { AppError } from "../../../../src/errors/app-error";
import { InMemoryProductsRepository } from "../../repositories/in-memory-products-repository";

describe("Create products", () => {
  const product = {
    name: "Teclado - Keychron",
    price: 550.99,
    quantity: 3,
  };

  it("should be able create a new product", async () => {
    const productsRepository = new InMemoryProductsRepository();
    const createProduct = new CreateProductUseCase(productsRepository);

    await createProduct.execute(product);

    const findProduct = await productsRepository.loadByName(
      "Teclado - Keychron"
    );

    expect(findProduct).toHaveProperty("id");
    expect(findProduct).toHaveProperty("createdAt");
  });

  it("should not be able create a product with duplicated name", async () => {
    const productsRepository = new InMemoryProductsRepository();
    const createProduct = new CreateProductUseCase(productsRepository);

    await createProduct.execute(product);
    expect(createProduct.execute(product)).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able create a product without quantity", async () => {
    const productsRepository = new InMemoryProductsRepository();
    const createProduct = new CreateProductUseCase(productsRepository);

    expect(
      createProduct.execute({
        ...product,
        quantity: 0,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
