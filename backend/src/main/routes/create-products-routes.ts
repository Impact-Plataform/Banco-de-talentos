import { Router } from 'express'
import { makeCreateProductController } from '../factories/products/create-product-factory'
import { makeLoadProductByIdController } from '../factories/products/load-product-by-id-factory'
import { makeLoadProductsController } from '../factories/products/load-products-factory'

const productsRoutes = Router()

productsRoutes.post('/products', makeCreateProductController)
productsRoutes.get('/products', makeLoadProductsController)
productsRoutes.get('/products/:id', makeLoadProductByIdController)

export { productsRoutes }
