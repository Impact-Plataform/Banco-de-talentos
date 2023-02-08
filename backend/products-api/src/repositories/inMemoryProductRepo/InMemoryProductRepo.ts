import { Product } from "../../entities/product/Product";
import { IProductRepository } from "../ports/IProductRepository";

export class InMemoryProductRepo implements IProductRepository {
  constructor(private list: Product[]) {}

  async create(product: Product): Promise<void> {
    this.list.push(product);
  }

  async findProductByName(name: string): Promise<boolean> {
    const productAlreadyExists = this.list.filter(product => product.name === name)

    return productAlreadyExists.length > 0 ? true : false
  }
}
