/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Product } from '../../../application/entities/product'

interface ProductViewModelResponse {
  id: string
  name: string
  price: number
  quantity: number
  createdAt: Date
}

export class ProductViewModel {
  static toHTTP (product: Product): ProductViewModelResponse {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      createdAt: product.createdAt
    }
  }

  // private get exchanges
}
