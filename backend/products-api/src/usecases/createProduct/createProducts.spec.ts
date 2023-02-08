import { Product } from "../../entities/product/Product";
import { InMemoryProductRepo } from "../../repositories/inMemoryProductRepo/InMemoryProductRepo";
import { CreateProduct } from "./CreateProduct";

describe("Create Product usecase", () => {
  const product = {
    name: "example",
    price: 19.9,
    description: "this is an example",
  };

  test("it should be possible create a product", async () => {
    const repository = new InMemoryProductRepo();
    const productUsecase = new CreateProduct(repository);
    const createProduct = await productUsecase.execute(product);

    expect(createProduct).toBeInstanceOf(Product);
  });
});
