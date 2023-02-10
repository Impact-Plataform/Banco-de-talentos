import { Product, ProductProps } from "../../entities/Product";

export interface IProductRepository {
  create(product: ProductProps): Promise<void>;
  findProductByName(name: string): Promise<boolean>;
}