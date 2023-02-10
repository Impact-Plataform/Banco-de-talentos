import { Product, ProductProps } from "../../entities/Product";
import { IProductRepository } from "../../repositories/ports/IProductRepository";

interface CreateProductRequest {
  name: string;
  price: number;
  description: string;
}

type ResponseCreateProduct = Promise<ProductProps | false>;

export class CreateProduct {
  constructor(private repository: IProductRepository) {}

  async execute({
    name,
    price,
    description,
  }: CreateProductRequest): ResponseCreateProduct {
    const productAlreadyExists = await this.repository.findProductByName(name);

    if (productAlreadyExists) {
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
}
