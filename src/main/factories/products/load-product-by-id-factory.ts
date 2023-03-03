import { Request, Response } from 'express'
import { LoadProductByIdUseCase } from '../../../application/use-cases/products/load-product-by-id-use-case'
import { PrismaProductsRepository } from '../../../infra/database/prisma/repositories/prisma-products-repository'
import { LoadProductByIdController } from '../../../infra/http/controllers/products/load-product-by-id-controller'

export async function makeLoadProductByIdController (request: Request, response: Response): Promise<Response> {
  const productsRepository = new PrismaProductsRepository()
  const loadProductByIdUseCase = new LoadProductByIdUseCase(productsRepository)
  const loadProductByIdController = new LoadProductByIdController(loadProductByIdUseCase)
  return loadProductByIdController.handle(request, response)
}
