import { describe, expect, it } from 'vitest'
import { Product } from '../../../../src/application/entities/product'
import { CreateProductUseCase } from '../../../../src/application/use-cases/products/create-product-use-case'
import { LoadProductByIdUseCase } from '../../../../src/application/use-cases/products/load-product-by-id-use-case'
import { AppError } from '../../../../src/shared/errors/app-error'
import { InMemoryProductsRepository } from '../../repositories/in-memory-products-repository'

describe('Load products by id', () => {
  const products = [
    {
      name: 'Teclado - Keychron',
      price: 50.99,
      quantity: 13
    },
    {
      name: 'Mouse - Red Dragon',
      price: 550.99,
      quantity: 3
    },
    {
      name: 'Monitor - AOC',
      price: 1550.99,
      quantity: 23
    }
  ]

  it('should be able list product by id', async () => {
    const productsRepository = new InMemoryProductsRepository()
    const createProduct = new CreateProductUseCase(productsRepository)
    const loadProductbyId = new LoadProductByIdUseCase(productsRepository)

    for (const product of products) {
      await createProduct.execute(product)
    }

    const { id: productId } = await productsRepository.loadByName(
      'Monitor - AOC'
    )
    const { product } = await loadProductbyId.execute({ productId })

    expect(product).toBeInstanceOf(Product)
    expect(product.name).toBe('Monitor - AOC')
    expect(product.price).toBe(1550.99)
  })

  it('should not be able list product with invalid id', async () => {
    const productsRepository = new InMemoryProductsRepository()
    const createProduct = new CreateProductUseCase(productsRepository)
    const loadProductbyId = new LoadProductByIdUseCase(productsRepository)

    for (const product of products) {
      await createProduct.execute(product)
    }

    expect(
      loadProductbyId.execute({ productId: 'invalid_id' })
    ).rejects.toBeInstanceOf(AppError)
  })
})
