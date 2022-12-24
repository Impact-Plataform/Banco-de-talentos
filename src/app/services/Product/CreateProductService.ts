import ProductRepository from "../../repositories/Product/ProductRepository";
import Product from "../../models/Product.model";
const productRepository = new ProductRepository();
import { v4 } from "uuid";
class CreateProductService {
  async create(name: string, price: number): Promise<Product> {
    const product = { id: v4(), name, price };
    return await productRepository.create(product);
  }
}

export default CreateProductService;
