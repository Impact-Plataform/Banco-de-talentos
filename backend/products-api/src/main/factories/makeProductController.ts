import { ProductController } from "../../controllers/ProductController";
import { MongodbProductsRepository } from "../../repositories/mongodb/MongodbProductsRepository";
import { CreateProduct } from "../../usecases/createProduct/CreateProduct";

export const makeProductController = () => {
  const productRepository = new MongodbProductsRepository();
  const productUsecase = new CreateProduct(productRepository);
  const productController = new ProductController(productUsecase);

  return productController;
};
