import { Request, Response } from 'express'
import { LoadProductsUseCase } from '../../../application/use-cases/products/load-products-use-case'
import { PrismaProductsRepository } from '../../../infra/database/prisma/repositories/prisma-products-repository'
import { LoadProductsController } from '../../../infra/http/controllers/products/load-products-controller'

export async function makeLoadProductsController (request: Request, response: Response): Promise<Response> {
  const productsRepository = new PrismaProductsRepository()
  const loadProductsUseCase = new LoadProductsUseCase(productsRepository)
  const loadProductsController = new LoadProductsController(loadProductsUseCase)
  return loadProductsController.handle(request, response)
}
