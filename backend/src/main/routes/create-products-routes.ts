import { Router } from 'express'
import { makeCreateProductController } from '../factories/products/create-product-factory'
import { makeLoadProductsController } from '../factories/products/load-products-factory'

const productsRoutes = Router()

productsRoutes.post('/products', makeCreateProductController)
productsRoutes.get('/products', makeLoadProductsController)

export { productsRoutes }
