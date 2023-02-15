import { MongoHelper } from "../../../src/repositories/mongodb/helper/mongoHelper";
import { MongodbProductsRepository } from "../../../src/repositories/mongodb/MongodbProductsRepository";

describe("Mongodb user repository", () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    MongoHelper.clearCollection("products");
  });

  test("When product is added, it should exist", async () => {
    const productRepository = new MongodbProductsRepository();
    await productRepository.create({
      name: "any_product",
      price: 200,
      description: "any description",
    });
    const productExists = await productRepository.findProductByName(
      "any_product"
    );
    expect(!!productExists).toBeTruthy();
  });

  test("When get products, result should exist", async () => {
    const productRepository = new MongodbProductsRepository();
    await productRepository.create({
      name: "any_product",
      price: 200,
      description: "any description",
    });
    await productRepository.create({
      name: "any_product2",
      price: 200,
      description: "any description",
    });
    expect(await productRepository.getAllProducts()).toBeTruthy();
  });
  test("it Should delete by name a existing product successfully", async () => {
    const productRepository = new MongodbProductsRepository();
    await productRepository.create({
      name: "any_product",
      price: 200,
      description: "any description",
    });
    const findProduct = await productRepository.findProductByName(
      "any_product"
    );
    await productRepository.deleteById(findProduct.id);
    const findProductAgain = await productRepository.findProductByName(
      "any_product"
    );

    expect(findProductAgain).toBeFalsy();
  });

  test("It should update product on success", async () => {
    const productRepository = new MongodbProductsRepository();
    const productProps = {
      name: "any_product",
      price: 200,
      description: "any description",
      id: "123456",
    };
    const product = await productRepository.create(productProps);
    const { id } = productProps;
    await productRepository.updateProduct(
      id,
      "other_product",
      100,
      "other description"
    );
    const findUpdatedProduct = await productRepository.findProductById(id);

    expect(findUpdatedProduct.name).toBe("other_product");
  });
});
