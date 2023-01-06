import Product from "../../models/Product.model";
import ProductRepository from "../../repositories/Product/ProductRepository";
const productRepository = new ProductRepository();
class UpdateProductService {
  async update(id: string, name: string, price: number) {
    const product: Product | null = await productRepository.show(id);
    if (!product) return "Produto não encontrado";
    return await productRepository.update(product, name, price);
  }
}

export default UpdateProductService;
