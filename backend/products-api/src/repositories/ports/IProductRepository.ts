import { Product } from "../../entities/product/Product";

export interface IProductRepository {
  create(product: Product): Promise<void>;
  findProductByName(name: string): Promise<boolean>;
}
