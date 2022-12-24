import Product from "../../models/Product.model";
import ProductRepository from "../../repositories/Product/ProductRepository";
const productRepository = new ProductRepository();
class DeleteProductService {
  async delete(id: string): Promise<{} | string> {
    const product: Product | null = await Product.findOne({
      where: {
        id: id,
      },
    });
    if (!product) return "Produto não encontrado";
    return await productRepository.delete(product);
  }
}

export default DeleteProductService;
