import { Router } from 'express'
import { makeCreateProductController } from '../factories/products/create-product-factory'
import { makeDeleteProductController } from '../factories/products/delete-product-factory'
import { makeLoadProductByIdController } from '../factories/products/load-product-by-id-factory'
import { makeLoadProductsController } from '../factories/products/load-products-factory'
import { makeUpdateProductController } from '../factories/products/update-product-factory'

const productsRoutes = Router()

productsRoutes.post('/products', makeCreateProductController)
productsRoutes.get('/products', makeLoadProductsController)
productsRoutes.get('/products/:id', makeLoadProductByIdController)
productsRoutes.put('/products/:id', makeUpdateProductController)
productsRoutes.delete('/products/:id', makeDeleteProductController)

export { productsRoutes }
