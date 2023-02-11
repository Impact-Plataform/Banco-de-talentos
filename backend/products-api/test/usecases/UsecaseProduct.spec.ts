import { Product } from "../../src/entities/Product";
import { InMemoryProductRepo } from "../../src/repositories/InMemoryProductRepo";
import { UsecaseProduct } from "../../src/usecases/createProduct/UsecaseProduct";

describe("Create Product usecase", () => {
  const product = {
    name: "example",
    price: 19.9,
    description: "this is an example",
  };

  test("it should be possible create a product", async () => {
    const products: Product[] = [];
    const repository = new InMemoryProductRepo(products);
    const productUsecase = new UsecaseProduct(repository);
    const createProduct = await productUsecase.create(product);

    expect(createProduct).toEqual(product);
  });

  test("it should not be possible create a product with same name", async () => {
    const products: Product[] = [];
    const repository = new InMemoryProductRepo([]);
    const productUsecase = new UsecaseProduct(repository);

    const product1 = await productUsecase.create(product);
    const product2 = await productUsecase.create(product);

    expect(product2).toBe(false);
  });
});
