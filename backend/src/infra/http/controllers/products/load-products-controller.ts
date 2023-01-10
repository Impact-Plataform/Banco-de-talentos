import { Request, Response } from 'express'
import { LoadProductsUseCase } from '../../../../application/use-cases/products/load-products-use-case'
import { ProductViewModel } from '../../view-models/product-view-model'

export class LoadProductsController {
  constructor (private readonly loadProductsUseCase: LoadProductsUseCase) {}

  async handle (_request: Request, response: Response): Promise<Response> {
    const { products } = await this.loadProductsUseCase.execute()
    const productsViewModel = products.map(product => ProductViewModel.toHTTP(product))
    return response.json(productsViewModel)
  }
}
