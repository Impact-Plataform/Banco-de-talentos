import { Product } from '@prisma/client';

declare global {
  namespace Express {
    export interface Request {
      product: Partial<Product>
    }
  }
}