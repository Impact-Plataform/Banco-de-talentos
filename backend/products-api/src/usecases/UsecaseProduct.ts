import { Product, ProductProps } from "../entities/Product";
import { IProductRepository } from "../repositories/ports/IProductRepository";

interface CreateProductRequest {
  name: string;
  price: number;
  description: string;
}

interface DeleteProductRequestParam {
  name: string;
}

interface UpdateProductProps {
  price?: number;
  description?: string;
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
      id: product.id,
    };
    await this.repository.create(productProps);

    return productProps;
  }

  async getAllProducts(): Promise<ResponseGetProducts> {
    const products = await this.repository.getAllProducts();

    return products;
  }

  async deleteById(id: string): Promise<boolean> {
    const productExists = await this.repository.findProductById(id);
    console.log("product exists ---> ", productExists);
    if (!productExists) {
      return false;
    }
    await this.repository.deleteById(id);
    return true;
  }

  async updateProduct(
    { price, description }: UpdateProductProps,
    name: string
  ): Promise<ProductProps | false> {
    const productExists = await this.repository.findProductByName(name);
    if (!productExists) {
      return false;
    }
    const updatedProduct: ProductProps = await this.repository.updateProduct(
      name,
      price,
      description
    );
    return updatedProduct;
  }
}
