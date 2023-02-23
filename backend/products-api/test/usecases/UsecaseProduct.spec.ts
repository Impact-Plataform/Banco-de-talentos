import { Product, ProductProps } from "../../src/entities/Product";
import { InMemoryProductRepo } from "../../src/repositories/inMemory/InMemoryProductRepo";
import { UsecaseProduct } from "../../src/usecases/UsecaseProduct";

describe("Create Product usecase", () => {
  const product: ProductProps = {
    name: "example",
    price: 19.9,
    description: "this is an example",
  };

  test("it should be possible create a product", async () => {
    const products: Product[] = [];
    const repository = new InMemoryProductRepo(products);
    const productUsecase = new UsecaseProduct(repository);

    const createProduct = await productUsecase.create(product);
    expect(createProduct).toBeTruthy();
  });

  test("it should not be possible create a product with same name", async () => {
    const products: Product[] = [];
    const repository = new InMemoryProductRepo(products);
    const productUsecase = new UsecaseProduct(repository);

    const product1 = await productUsecase.create(product);
    const product2 = await productUsecase.create(product);

    expect(product2).toBe(false);
  });

  test("it should return all products", async () => {
    const products: Product[] = [];
    const repository = new InMemoryProductRepo(products);
    const productUsecase = new UsecaseProduct(repository);

    const product1 = await productUsecase.create(product);
    const product2 = await productUsecase.create({
      ...product,
      name: "product 2",
    });

    const allProducts = await productUsecase.getAllProducts();

    expect(allProducts.length > 0).toBeTruthy();
  });

  test("Should not be any product after delete", async () => {
    const products: Product[] = [];
    const repository = new InMemoryProductRepo(products);
    const productUsecase = new UsecaseProduct(repository);

    const createProduct = await productUsecase.create(product);
    const id = createProduct && createProduct.id;
    const deleteProduct = await productUsecase.deleteById(id);
    const allProducts = await productUsecase.getAllProducts();

    expect(allProducts.length === 0).toBeTruthy();
    expect(deleteProduct).toBeTruthy();
  });

  test("should return false if try to delete a unexisting product", async () => {
    const products: Product[] = [];
    const repository = new InMemoryProductRepo(products);
    const productUsecase = new UsecaseProduct(repository);

    const createProduct = await productUsecase.create(product);
    const id = "1234";

    const deleteProduct = await productUsecase.deleteById(id);
    const allProducts = await productUsecase.getAllProducts();

    expect(allProducts.length > 0).toBeTruthy();
    expect(deleteProduct).toBeFalsy();
  });

  test("Should return updated product if can update product", async () => {
    const products: ProductProps[] = [];
    const repository = new InMemoryProductRepo(products);
    const productUsecase = new UsecaseProduct(repository);

    const createProduct = await productUsecase.create({
      name: "product",
      price: 200,
      description: "description",
    });
    console.log("created product id", createProduct.id);
    const productId = createProduct && createProduct.id;
    const findByName = await repository.findProductByName("product");
    const updateProduct = await productUsecase.updateProduct(
      {
        price: 20,
      },
      productId
    );
    expect(updateProduct).toBeTruthy();
  });

  test("Should return false if try to update unexisting product", async () => {
    const products: Product[] = [];
    const repositorie = new InMemoryProductRepo(products);
    const productUsecase = new UsecaseProduct(repositorie);

    const createProduct = await productUsecase.create(product);
    const updateProduct = await productUsecase.updateProduct(
      { price: 2 },
      "wrond id"
    );

    expect(updateProduct).toBe(false);
  });

  test("Should return false if try to update name to same name of some existing product", async () => {
    const products: Product[] = [];
    const repositorie = new InMemoryProductRepo(products);
    const productUsecase = new UsecaseProduct(repositorie);

    const createProduct = await productUsecase.create(product);
    const createProduct2 = await productUsecase.create({
      ...product,
      name: "other product",
    });
    const { id } = createProduct && createProduct;

    const updateProduct = await productUsecase.updateProduct(
      {
        name: "other product",
        price: 2,
      },
      id
    );

    expect(updateProduct).toBe(false);
  });

  test("Should return product when get product by id", async () => {
    const products: ProductProps[] = [];
    const repository = new InMemoryProductRepo(products);
    const productUsecase = new UsecaseProduct(repository);

    const createProduct = await productUsecase.create({
      name: "product",
      price: 200,
      description: "description",
    });

    const getProductById = await productUsecase.getProductById(
      createProduct.id
    );

    expect(getProductById.name).toBe("product");
  });

  test("Should return false when get unexistent product", async () => {
    const products: ProductProps[] = [];
    const repository = new InMemoryProductRepo(products);
    const productUsecase = new UsecaseProduct(repository);

    const createProduct = await productUsecase.create({
      name: "product",
      price: 200,
      description: "description",
    });

    const getProductById = await productUsecase.getProductById(
      "wrongidohmygod"
    );

    expect(getProductById).toBe(false);
  });

  test("Should convert correctly", () => {
    const products: ProductProps[] = [];
    const repository = new InMemoryProductRepo(products);
    const productUsecase = new UsecaseProduct(repository);

    expect(productUsecase.convertCurrency(20, 5)).toBe(4)
  })
});
