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
    await productRepository.deleteByName("any_product");
    const product = await productRepository.findProductByName("any_product");

    expect(product).toBeFalsy();
  });
});
