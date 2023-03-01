import { ProductController } from "../../controllers/ProductController";
import { MongodbProductsRepository } from "../../repositories/mongodb/MongodbProductsRepository";
import { QuotationApi } from "../../services/QuotationApi";
import { UsecaseProduct } from "../../usecases/UsecaseProduct";

export const makeProductController = () => {
  const productRepository = new MongodbProductsRepository();
  const quotationService = new QuotationApi()
  const productUsecase = new UsecaseProduct(productRepository, quotationService);
  const productController = new ProductController(productUsecase);

  return productController;
};
