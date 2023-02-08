import { Product } from "../../src/entities/Product";
import { InMemoryProductRepo } from "../../src/repositories/InMemoryProductRepo";
import { CreateProduct } from "../../src/usecases/createProduct/CreateProduct";

describe("Create Product usecase", () => {
  const product = {
    name: "example",
    price: 19.9,
    description: "this is an example",
  };

  test("it should be possible create a product", async () => {
    const products: Product[] = [];
    const repository = new InMemoryProductRepo(products);
    const productUsecase = new CreateProduct(repository);
    const createProduct = await productUsecase.execute(product);

    expect(createProduct).toBeInstanceOf(Product);
  });

  test("it should not be possible create a product with same name", async () => {
    const products: Product[] = [];
    const repository = new InMemoryProductRepo([]);
    const productUsecase = new CreateProduct(repository);

    const product1 = await productUsecase.execute(product);
    const product2 = await productUsecase.execute(product);

    expect(product2).toBe(false);
  });
});
