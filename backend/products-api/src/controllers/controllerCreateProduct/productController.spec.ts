import { Product } from "../../entities/product/Product";
import { InMemoryProductRepo } from "../../repositories/inMemoryProductRepo/InMemoryProductRepo";
import { CreateProduct } from "../../usecases/createProduct/CreateProduct";
import { RequestHTTP } from "../ports/requestHttp";
import { ProductController } from "./ProductController";

describe("Controller Create Product", () => {
  const request: RequestHTTP = {
    body: {
      name: "Headphone",
      price: 300,
      description: "Headphone good to listen to musics",
    },
  };
  const list: Product[] = [];
  const repository = new InMemoryProductRepo(list);
  const productUseCase = new CreateProduct(repository);
  const controllerProduct = new ProductController(productUseCase);

  test("returns a status code 201 when it creates a product", async () => {
    const createProduct = await controllerProduct.create(request);
    expect(createProduct.statusCode).toBe(201);
  });
});
