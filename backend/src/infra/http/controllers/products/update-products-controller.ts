import { Request, Response } from 'express'
import { UpdateProductUseCase } from '../../../../application/use-cases/products/update-product-use-case'
import { validateRequest } from '../../../../shared/validations/validation-create-product-request'

export class UpdateProductController {
  constructor (private readonly updateProductUseCase: UpdateProductUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { name, price, quantity } = validateRequest.parse(request.body)
      const { id: productId } = request.params
      await this.updateProductUseCase.execute({
        productId,
        data: {
          name,
          price,
          quantity
        }
      })
      return response.json({ message: 'Successfully updated product' })
    } catch (err) {
      if (err.issues) {
        return response.status(400).json({ error: 'Check your input' })
      }
      return response.status(err.statusCode || 500).json({ error: err.message })
    }
  }
}
