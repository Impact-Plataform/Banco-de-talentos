import { Product } from "../../src/entities/Product";
import { InMemoryProductRepo } from "../../src/repositories/InMemoryProductRepo";
import { UsecaseProduct } from "../../src/usecases/UsecaseProduct";
import { RequestHTTP } from "../../src/controllers/ports/requestHttp";
import { ProductController } from "../../src/controllers/ProductController";

describe("Controller Product", () => {
  const request: RequestHTTP = {
    body: {
      name: "Headphone",
      price: 300,
      description: "Headphone good to listen to musics",
    },
  };
  const list: Product[] = [];
  const repository = new InMemoryProductRepo(list);
  const productUseCase = new UsecaseProduct(repository);
  const controllerProduct = new ProductController(productUseCase);

  test("it should returns a status code 201 when creates a product", async () => {
    const createProduct = await controllerProduct.create(request);
    expect(createProduct.statusCode).toBe(201);
  });
  test("it should returns a status code 400 if creates a product with repeated name", async () => {
    const request2: RequestHTTP = {
      body: {
        name: "Headphone",
        price: 400,
        description: "Headphone good to listen to all genders of musics",
      },
    };

    const createProduct = await controllerProduct.create(request);

    const createProductRepeated = await controllerProduct.create(request2);

    expect(createProductRepeated.statusCode).toBe(400);
  });

  test("it should return a status 200 when get products", async () => {
    const createProduct = await controllerProduct.create(request);
    const allProducts = await controllerProduct.getProducts();

    expect(allProducts.statusCode).toBe(200);
    expect(allProducts.body.length > 0).toBeTruthy();
  });
  test("it should return a status 200 when delete a product", async () => {
    const createProduct = await controllerProduct.create({
      body: {
        name: "Mouse and keyboard",
        price: 300,
        description: "Headphone good to listen to musics",
      },
    });
    const idParam = createProduct.body.id;
    const deleteProduct = await controllerProduct.deleteProduct(idParam);
    expect(deleteProduct.statusCode).toBe(200);
  });
  test("when dlete a product should return a status 400 if does not exists a produc with this name", async () => {
    const createProduct = await controllerProduct.create({
      body: {
        name: "Headphone2",
        price: 300,
        description: "Headphone good to listen to musics",
      },
    });
    const wrongIdParam = "1234";
    const deleteProduct = await controllerProduct.deleteProduct(wrongIdParam);
    expect(deleteProduct.statusCode).toBe(400);
  });

  test("it should return a status code 200 if can update on success", async () => {
    const productRequest = {
      body: { name: "bottle", price: 300, description: "good" },
    };
    const createProduct = await controllerProduct.create(productRequest);
    const createProductPrice = createProduct.body.price;
    const idParam = createProduct.body.id;
    const updateRequest = {
      body: {
        price: 19.9,
      },
    };
    const updateProduct = await controllerProduct.updateProduct(
      updateRequest,
      idParam
    );
    expect(createProductPrice).toBe(300);
    expect(updateProduct.statusCode).toBe(200);
    expect(updateProduct.body.price).toBe(19.9);
  });
});
