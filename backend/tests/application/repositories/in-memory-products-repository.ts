import { Product } from "../../../src/application/models/product";
import { ProductsRepository } from "../../../src/application/repositories/products/products-repository"; 

export class InMemoryProductsRepository implements ProductsRepository {
  public product: Product[] = [];

  async create(product: Product) {
    this.product.push(product);
  }
}