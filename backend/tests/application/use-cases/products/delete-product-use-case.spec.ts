import { describe, expect, it } from "vitest";
import { CreateProductUseCase } from "../../../../src/application/use-cases/products/create-product-use-case";
import { DeleteProductUseCase } from "../../../../src/application/use-cases/products/delete-product-use-case";
import { AppError } from "../../../../src/shared/errors/app-error";
import { InMemoryProductsRepository } from "../../repositories/in-memory-products-repository";

describe("Delete products", () => {
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
  ];

  it("should be able delete a product", async () => {
    const productsRepository = new InMemoryProductsRepository();
    const createProduct = new CreateProductUseCase(productsRepository);
    const deleteProducts = new DeleteProductUseCase(productsRepository);

    for (const product of products) {
      await createProduct.execute(product);
    }

    const productDeleted = await productsRepository.loadByName(
      "Mouse - Red Dragon"
    );

    await deleteProducts.execute({ productId: productDeleted.id });

    const allProducts = await productsRepository.load();

    expect(allProducts).toHaveLength(1);
    expect(allProducts[0].name).toBe("Teclado - Keychron");
  });

  it("should not be able to delete a non-existent product", async () => {
    const productsRepository = new InMemoryProductsRepository();
    const createProduct = new CreateProductUseCase(productsRepository);
    const deleteProducts = new DeleteProductUseCase(productsRepository);

    for (const product of products) {
      await createProduct.execute(product);
    }

    expect(
      deleteProducts.execute({ productId: "any_id" })
    ).rejects.toBeInstanceOf(AppError);
  });
});
