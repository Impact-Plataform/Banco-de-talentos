import { Request, Response } from 'express'
import { DeleteProductUseCase } from '../../../application/use-cases/products/delete-product-use-case'
import { PrismaProductsRepository } from '../../../infra/database/prisma/repositories/prisma-products-repository'
import { DeleteProductController } from '../../../infra/http/controllers/products/delete-products-controller'

export async function makeDeleteProductController (request: Request, response: Response): Promise<Response> {
  const productsRepository = new PrismaProductsRepository()
  const deleteProductUseCase = new DeleteProductUseCase(productsRepository)
  const deleteProductController = new DeleteProductController(deleteProductUseCase)
  return deleteProductController.handle(request, response)
}
