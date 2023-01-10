/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Product as RawProducts } from '@prisma/client'
import { Product } from '../../../../application/entities/product'

export class PrismaProductsMapper {
  static toDomain (raw: RawProducts): Product {
    return new Product({
      name: raw.name,
      price: raw.price,
      quantity: raw.quantity,
      createdAt: raw.createdAt
    }, raw.id)
  }

  static toPrisma (product: Product) {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      createdAt: product.createdAt
    }
  }
}
