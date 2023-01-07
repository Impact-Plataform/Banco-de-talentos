import { Product } from "../../models/product";

export interface ProductsRepository {
  create(product: Product): Promise<void>;
}
