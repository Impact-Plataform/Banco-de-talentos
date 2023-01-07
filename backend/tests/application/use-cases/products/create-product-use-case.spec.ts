import { describe, expect, it } from "vitest";
import { CreateProductUseCase } from "../../../../src/application/use-cases/products/create-product-use-case";
import { InMemoryProductsRepository } from "../../repositories/in-memory-products-repository";

describe("Create products", () => {
  it("should be able create a new product", async () => {
    const productsRepository = new InMemoryProductsRepository();
    const createProduct = new CreateProductUseCase(productsRepository);

    await createProduct.execute({
      name: 'Teclado - Keychron',
      price: 550.99,
      quantity: 3
    })

    const car = await productsRepository.findByName('Teclado - Keychron')

    expect(car).toHaveProperty('id')
    expect(car).toHaveProperty('createdAt')
  });
});
