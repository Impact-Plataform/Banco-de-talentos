import { Product } from "../../models/product";
import { ProductsRepository } from "../../repositories/products-repository";

export class LoadProductsUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.load();
    return products;
  }
}
