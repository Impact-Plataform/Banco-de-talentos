import { Request, Response } from 'express'
import { CreateProductUseCase } from '../../../application/use-cases/products/create-product-use-case'

export class CreateProductController {
  constructor (private readonly createProductUseCase: CreateProductUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    // validate request ...
    const { name, price, quantity } = request.body
    try {
      const product = await this.createProductUseCase.execute({
        name,
        price,
        quantity
      })

      return response.status(201).json(product)
    } catch (err) {
      return response.status(err.statusCode).json({ error: err.message })
    }
  }
}
