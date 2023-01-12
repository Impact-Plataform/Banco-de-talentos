import { Request, Response } from 'express'
import { LoadProductByIdUseCase } from '../../../../application/use-cases/products/load-product-by-id-use-case'
import { ProductViewModel } from '../../view-models/product-view-model'

export class LoadProductByIdController {
  constructor (private readonly loadProductByIdUseCase: LoadProductByIdUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { id: productId } = request.params
    try {
      const { product } = await this.loadProductByIdUseCase.execute({ productId })
      const productResponse = await ProductViewModel.toHTTP(product)
      return response.json(productResponse)
    } catch (err) {
      return response.status(err.statusCode || 500).json({ error: err.message })
    }
  }
}
