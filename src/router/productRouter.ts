import { Router } from 'express';

import { createProductController } from '../controllers/createProductController';
import { getProductByIdController } from '../controllers/getProductByIdController';
import { GetProductsController } from '../controllers/getProductsController';
import { UpdateProductController } from '../controllers/updateProductController';
import { GetProductMiddleware } from '../middlewares/getProductMiddleware';
import { ValidateBodyFields } from '../middlewares/validateBodyFieldsMiddleware';

export const productRouter = Router();

const getProducts = new GetProductsController();
const registerProduct = new createProductController();
const getProduct = new getProductByIdController();
const updateProduct = new UpdateProductController();

const validateBodyFields = new ValidateBodyFields();
const validateProductId = new GetProductMiddleware();

productRouter.get('/', getProducts.execute);
productRouter.post('/', validateBodyFields.execute , registerProduct.execute);
productRouter.get('/:id', validateProductId.execute , getProduct.execute);
productRouter.put('/:id', validateProductId.execute,  validateBodyFields.execute, updateProduct.execute);