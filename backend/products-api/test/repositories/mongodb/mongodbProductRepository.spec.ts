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
    expect(
      await productRepository.findProductByName("any_product")
    ).toBeTruthy();
  });
});
