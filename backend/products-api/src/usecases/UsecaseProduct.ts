import { Product, ProductProps } from "../entities/Product";
import { IProductRepository } from "../repositories/ports/IProductRepository";

interface CreateProductRequest {
  name: string;
  price: number;
  description: string;
}

interface DeleteProductRequest {
  name: string;
}

type ResponseCreateProduct = Promise<ProductProps | false>;
type ResponseGetProducts = Promise<any[]>;

export class UsecaseProduct {
  constructor(private repository: IProductRepository) {}

  async create({
    name,
    price,
    description,
  }: CreateProductRequest): ResponseCreateProduct {
    const productAlreadyExists = await this.repository.findProductByName(name);

    if (!!productAlreadyExists) {
      return false;
    }

    const product = new Product({ name, price, description });
    const productProps = {
      name: product.name,
      price: product.price,
      description: product.description,
    };
    await this.repository.create(productProps);

    return productProps;
  }

  async getAllProducts(): Promise<ResponseGetProducts> {
    const products = await this.repository.getAllProducts();

    return products;
  }

  async deleteByname({ name }: DeleteProductRequest): Promise<boolean> {
    const productExists = await this.repository.findProductByName(name);
    if (!productExists) {
      return false;
    }
    await this.repository.deleteByName(name);
    return true;
  }
}
