import { Product } from "../models/product";

export interface ProductsRepository {
  create(product: Product): Promise<void>;
  load(): Promise<Product[]>;
  loadByName(name: string): Promise<Product>;
}
