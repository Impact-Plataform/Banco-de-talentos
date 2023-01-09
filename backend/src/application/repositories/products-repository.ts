import { Product } from "../entities/product";

export interface ProductsRepository {
  create(product: Product): Promise<void>;
  load(): Promise<Product[]>;
  loadByName(name: string): Promise<Product>;
  loadById(id: string): Promise<Product>;
  update({ id, data }: updatedProps): Promise<void>;
  delete(name: string): Promise<void>;
}

export interface updatedProps {
  id: string;
  data: {
    name: string;
    price: number;
    quantity: number;
  };
};
