import { Router } from 'express'
import { makeCreateProductController } from '../factories/create-product-factory'

const productsRoutes = Router()

productsRoutes.post('/products', makeCreateProductController)

export { productsRoutes }
