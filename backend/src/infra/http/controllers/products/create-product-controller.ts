import { Request, Response } from 'express'
import { CreateProductUseCase } from '../../../../application/use-cases/products/create-product-use-case'
import { validateRequest } from '../../../../shared/validations/validation-create-product-request'
import { ProductViewModel } from '../../view-models/product-view-model'

export class CreateProductController {
  constructor (private readonly createProductUseCase: CreateProductUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { name, price, quantity } = validateRequest.parse(request.body)
      const { product } = await this.createProductUseCase.execute({
        name,
        price,
        quantity
      })
      return response.status(201).json(ProductViewModel.toHTTP(product))
    } catch (err) {
      if (err.issues) {
        return response.status(400).json({ error: 'Check your input' })
      }
      return response.status(err.statusCode || 500).json({ error: err.message })
    }
  }
}
