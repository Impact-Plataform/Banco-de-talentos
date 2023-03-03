import { Product } from '../../entities/product'
import { ProductsRepository } from '../../repositories/products-repository'

interface LoadProductsResponse {
  products: Product[]
}

export class LoadProductsUseCase {
  constructor (private readonly productsRepository: ProductsRepository) {}

  async execute (): Promise<LoadProductsResponse> {
    const products = await this.productsRepository.load()
    return { products }
  }
}
