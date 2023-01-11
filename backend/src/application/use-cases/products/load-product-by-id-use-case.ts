import { AppError } from '../../../shared/errors/app-error'
import { Product } from '../../entities/product'
import { ProductsRepository } from '../../repositories/products-repository'

interface LoadProductByIdRequest {
  productId: string
}

interface LoadProductByIdResponse {
  product: Product
}

export class LoadProductByIdUseCase {
  constructor (private readonly productsRepository: ProductsRepository) {}

  async execute ({ productId }: LoadProductByIdRequest): Promise<LoadProductByIdResponse> {
    const product = await this.productsRepository.loadById(productId)

    if (!product) {
      throw new AppError('Product not found', 404)
    }

    return { product }
  }
}
