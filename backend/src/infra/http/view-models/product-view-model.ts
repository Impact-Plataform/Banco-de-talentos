/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Product } from '../../../application/entities/product'
import { getCurrenciesData } from '../../../shared/utils/economia-awesome-api'

interface ProductViewModelResponse {
  id: string
  name: string
  price: number
  quantity: number
  createdAt: Date
  priceUSD: number
  priceEUR: number
}

export class ProductViewModel {
  private static async convertExchangePrice (priceInBRL: number, coinExchange: string): Promise<number> {
    const allCurrencies = await getCurrenciesData()
    const quote = allCurrencies[coinExchange.toUpperCase()].bid
    const price = +(priceInBRL / +quote).toFixed(2)
    return price
  }

  static async toHTTP (product: Product): Promise<ProductViewModelResponse> {
    const priceUSD = await this.convertExchangePrice(product.price, 'USD')
    const priceEUR = await this.convertExchangePrice(product.price, 'EUR')

    return {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      createdAt: product.createdAt,
      priceUSD,
      priceEUR
    }
  }
}
