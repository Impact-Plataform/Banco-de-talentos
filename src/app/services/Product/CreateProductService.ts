import ProductRepository from "../../repositories/Product/ProductRepository";
import Product from "../../models/Product.model";
const productRepository = new ProductRepository();

class CreateProductService {
  async create(name: string, price: number): Promise<Product> {
    const product = { name, price };
    return await productRepository.create(product);
  }
}

export default CreateProductService;
