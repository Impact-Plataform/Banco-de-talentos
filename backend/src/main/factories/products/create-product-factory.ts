import { Request, Response } from 'express'
import { CreateProductUseCase } from '../../../application/use-cases/products/create-product-use-case'
import { PrismaProductsRepository } from '../../../infra/database/prisma/repositories/prisma-products-repository'
import { CreateProductController } from '../../../infra/http/controllers/products/create-product-controller'

export async function makeCreateProductController (request: Request, response: Response): Promise<Response> {
  const productsRepository = new PrismaProductsRepository()
  const createProductUseCase = new CreateProductUseCase(productsRepository)
  const createProductController = new CreateProductController(createProductUseCase)
  return createProductController.handle(request, response)
}
