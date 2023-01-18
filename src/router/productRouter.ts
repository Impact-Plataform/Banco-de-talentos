import { Router } from 'express';

import { createProductController } from '../controllers/product/createProductController';
import { DeleteProductController } from '../controllers/product/deleteProductController';
import { getProductByIdController } from '../controllers/product/getProductByIdController';
import { GetProductsController } from '../controllers/product/getProductsController';
import { UpdateProductController } from '../controllers/product/updateProductController';

export const productRouter = Router();

const getProducts = new GetProductsController();
const registerProduct = new createProductController();
const getProduct = new getProductByIdController();
const updateProduct = new UpdateProductController();
const deleteProduct = new DeleteProductController();

productRouter.get('/', getProducts.execute);
productRouter.post('/', registerProduct.execute);
productRouter.get('/:id', getProduct.execute);
productRouter.put('/:id', updateProduct.execute);
productRouter.delete('/:id', deleteProduct.execute);