import { describe, expect, it } from "vitest";
import { CreateProductUseCase } from "../../../../src/application/use-cases/products/create-product-use-case";
import { UpdateProductUseCase } from "../../../../src/application/use-cases/products/update-product-use-case";
import { AppError } from "../../../../src/shared/errors/app-error";
import { randomUUID } from "node:crypto";
import { InMemoryProductsRepository } from "../../repositories/in-memory-products-repository";

describe("Delete products", () => {
  it("should be able update a product", async () => {
    const productsRepository = new InMemoryProductsRepository();
    const createProduct = new CreateProductUseCase(productsRepository);
    const updateProducts = new UpdateProductUseCase(productsRepository);

    await createProduct.execute({
      name: "Mouse - Red Dragon",
      price: 550.99,
      quantity: 3,
    });

    const { id } = await productsRepository.loadByName("Mouse - Red Dragon");
    await updateProducts.execute({
      id,
      data: {
        name: "Mouse - Red Dragon",
        price: 50,
        quantity: 10,
      },
    });

    const [product] = await productsRepository.load();

    expect(product.id).toBe(id);
    expect(product.price).toBe(50);
    expect(product.quantity).toBe(10);
  });

  it("should not be able to update a non-existent product", async () => {
    const productsRepository = new InMemoryProductsRepository();
    const createProduct = new CreateProductUseCase(productsRepository);
    const updateProducts = new UpdateProductUseCase(productsRepository);

    await createProduct.execute({
      name: "Mouse - Red Dragon",
      price: 550.99,
      quantity: 3,
    });

    expect(
      updateProducts.execute({
        id: randomUUID(),
        data: {
          name: "Mouse - Red Dragon",
          price: 50,
          quantity: 10,
        },
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
