import { ProductProps } from "../../entities/Product";

export interface IProductRepository {
  create(product: ProductProps): Promise<void>;
  findProductByName(name: string): Promise<any | false>;
  findProductById(id: string): Promise<any | false>;
  getAllProducts(): Promise<any>;
  deleteById(id: string): Promise<void>;
  updateProduct(
    name: string,
    price?: number,
    description?: string
  ): Promise<any>;
}
