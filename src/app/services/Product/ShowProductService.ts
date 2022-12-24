import Product from "../../models/Product.model";
import ProductRepository from "../../repositories/Product/ProductRepository";
const productRepository = new ProductRepository();
class ShowProductService {
  async show(id: string): Promise<Product | string> {
    const product: Product | null = await productRepository.show(id);
    if (!product) return "Produto não encontrado";
    return product;
  }
}

export default ShowProductService;
