import { AppError } from '../../../shared/errors/app-error'
import { ProductsRepository } from '../../repositories/products-repository'

interface DeleteProductRequest {
  productId: string
}

export class DeleteProductUseCase {
  constructor (private readonly productsRepository: ProductsRepository) {}

  async execute ({ productId }: DeleteProductRequest): Promise<void> {
    const productAlreadyExists = await this.productsRepository.loadById(productId)

    if (!productAlreadyExists) {
      throw new AppError('Product not found', 404)
    }

    await this.productsRepository.delete(productId)
  }
}
