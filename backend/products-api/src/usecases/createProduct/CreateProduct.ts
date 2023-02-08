import { Product } from "../../entities/product/Product";
import { IProductRepository } from "../../repositories/ports/IProductRepository";

interface CreateProductRequest {
  name: string;
  price: number;
  description: string;
}

type ResponseCreateProduct = Promise<Product | boolean>;

export class CreateProduct {
  constructor(private repository: IProductRepository) {}

  async execute({
    name,
    price,
    description,
  }: CreateProductRequest): ResponseCreateProduct {
    const product = new Product({ name, price, description });

    return product;
  }
}
