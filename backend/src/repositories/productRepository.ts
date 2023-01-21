import { Product } from '@prisma/client';

export abstract class ProductRepository {
  abstract create(product: Omit<Product, 'id'>): Promise<Product>;
  abstract findById(productId: number): Promise<Product | null>;
  abstract findByName(productName: string): Promise<Product | null>;
  abstract find(): Promise<Product[] | null>;
  abstract update(productId: number, product: Omit<Product, 'id'>): Promise<Product>;
  abstract delete(productId: number): Promise<Product>;
}