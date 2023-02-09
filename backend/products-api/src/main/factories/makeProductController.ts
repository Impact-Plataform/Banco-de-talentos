import { ProductController } from "../../controllers/ProductController";
import { Product } from "../../entities/Product";
import { InMemoryProductRepo } from "../../repositories/InMemoryProductRepo";
import { CreateProduct } from "../../usecases/createProduct/CreateProduct";

export const makeProductController = () => {
  const list: Product[] = [];
  const productRepository = new InMemoryProductRepo(list);
  const productUsecase = new CreateProduct(productRepository);
  const productController = new ProductController(productUsecase);

  return productController;
};
