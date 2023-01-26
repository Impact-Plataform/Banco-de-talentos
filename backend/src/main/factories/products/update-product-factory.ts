import { Request, Response } from 'express'
import { UpdateProductUseCase } from '../../../application/use-cases/products/update-product-use-case'
import { PrismaProductsRepository } from '../../../infra/database/prisma/repositories/prisma-products-repository'
import { UpdateProductController } from '../../../infra/http/controllers/products/update-products-controller'

export async function makeUpdateProductController (request: Request, response: Response): Promise<Response> {
  const productsRepository = new PrismaProductsRepository()
  const updateProductUseCase = new UpdateProductUseCase(productsRepository)
  const updateProductController = new UpdateProductController(updateProductUseCase)
  return updateProductController.handle(request, response)
}
