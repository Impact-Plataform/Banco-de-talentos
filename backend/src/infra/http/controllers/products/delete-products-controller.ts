import { Request, Response } from 'express'
import { DeleteProductUseCase } from '../../../../application/use-cases/products/delete-product-use-case'

export class DeleteProductController {
  constructor (private readonly deleteProductUseCase: DeleteProductUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { id: productId } = request.query
      if (typeof productId !== 'string') {
        return response.status(404).json({ error: 'Invalid params' })
      }
      await this.deleteProductUseCase.execute({ productId })
      return response.status(204).json({ message: 'Successfully deleted product' })
    } catch (err) {
      return response.status(err.statusCode).json({ error: err.message })
    }
  }
}
