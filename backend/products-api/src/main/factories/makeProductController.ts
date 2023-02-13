import { ProductController } from "../../controllers/ProductController";
import { MongodbProductsRepository } from "../../repositories/mongodb/MongodbProductsRepository";
import { UsecaseProduct } from "../../usecases/UsecaseProduct";

export const makeProductController = () => {
  const productRepository = new MongodbProductsRepository();
  const productUsecase = new UsecaseProduct(productRepository);
  const productController = new ProductController(productUsecase);

  return productController;
};
