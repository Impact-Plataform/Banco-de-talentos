import { ProductProps } from "../entities/Product";
import { IProductRepository } from "./ports/IProductRepository";

export class InMemoryProductRepo implements IProductRepository {
  constructor(private list: ProductProps[]) {}

  async create(product: ProductProps): Promise<void> {
    this.list.push(product);
  }

  async findProductByName(name: string): Promise<any | boolean> {
    const productAlreadyExists = this.list.find(
      (product) => product.name === name
    );

    return productAlreadyExists || false;
  }

  async getAllProducts(): Promise<ProductProps[]> {
    const allProducts = this.list;
    return allProducts;
  }

  async deleteByName(name: string): Promise<void> {
    const listWithoutProduct = this.list.filter(
      (product) => product.name !== name
    );
    this.list = listWithoutProduct;
  }

  async updateProduct(
    name: string,
    price?: number,
    description?: string
  ): Promise<any> {
    const product = this.list.find((item) => item.name === name);
    const updateProduct = {
      ...product,
      price: price || product.price,
      description: description || product.description,
    };
    const updateList = this.list.map((item) => {
      if (item === product) {
        item = updateProduct;
      }
      return item;
    });
    return updateProduct;
  }
}
// 1. pegar o product
// 2. alterar ele
// 3. tirar o original e inserir o novo
