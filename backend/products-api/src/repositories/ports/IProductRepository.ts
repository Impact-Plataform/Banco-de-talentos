import { Product } from "../../entities/Product";

export interface IProductRepository {
  create(product: Product): Promise<void>;
  findProductByName(name: string): Promise<boolean>;
}
