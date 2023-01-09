import { AppError } from '../../../shared/errors/app-error'
import { Product } from '../../entities/product'
import { ProductsRepository } from '../../repositories/products-repository'

interface CreateProductRequest {
  name: string
  price: number
  quantity: number
}

interface CreateProductResponse {
  product: Product
}

export class CreateProductUseCase {
  constructor (private readonly productsRepository: ProductsRepository) {}

  async execute ({ name, price, quantity }: CreateProductRequest): Promise<CreateProductResponse> {
    const productAlreadyExists = await this.productsRepository.loadByName(name)

    if (productAlreadyExists) {
      throw new AppError('Product already exists', 409)
    }

    const product = new Product({
      name,
      price,
      quantity
    })
    await this.productsRepository.create(product)

    return { product }
  }
}
