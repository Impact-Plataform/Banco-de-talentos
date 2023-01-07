import { Product } from "../../../src/application/models/product";
import { ProductsRepository } from "../../../src/application/repositories/products-repository";

export class InMemoryProductsRepository implements ProductsRepository {
  public products: Product[] = [];

  async create(product: Product) {
    this.products.push(product);
  }

  async findByName(name: string): Promise<Product> {
    const product = this.products.find((product) => product.name === name);
    return product;
  }
}
