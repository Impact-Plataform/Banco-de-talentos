import { describe, it } from "vitest";
import { CreateProductUseCase } from "../../../../src/application/use-cases/products/create-products-use-case";
import { InMemoryProductsRepository } from "../../repositories/in-memory-products-repository";

describe("Create products", () => {
  it("should test", () => {
    const productsRepository = new InMemoryProductsRepository();
    const createProduct = new CreateProductUseCase(productsRepository);
  });
});
