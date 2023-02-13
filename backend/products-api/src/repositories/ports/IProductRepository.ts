import { ProductProps } from "../../entities/Product";

export interface IProductRepository {
  create(product: ProductProps): Promise<void>;
  findProductByName(name: string): Promise<any | false>;
  getAllProducts(): Promise<any>;
  deleteByName(name: string): Promise<void>;
}
