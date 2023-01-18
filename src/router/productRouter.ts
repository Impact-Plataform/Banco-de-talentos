import { Router } from 'express';

import { createProductController } from '../controllers/product/createProductController';
import { DeleteProductController } from '../controllers/product/deleteProductController';
import { getProductByIdController } from '../controllers/product/getProductByIdController';
import { GetProductsController } from '../controllers/product/getProductsController';
import { UpdateProductController } from '../controllers/product/updateProductController';
import { GetCurrencyValues } from '../middlewares/getCurrencyValue';
import { GetProductMiddleware } from '../middlewares/getProductMiddleware';
import { ValidateBodyFields } from '../middlewares/validateBodyFieldsMiddleware';

export const productRouter = Router();

const getProducts = new GetProductsController();
const registerProduct = new createProductController();
const getProduct = new getProductByIdController();
const updateProduct = new UpdateProductController();
const deleteProduct = new DeleteProductController();

const validateBodyFields = new ValidateBodyFields();
const validateProductId = new GetProductMiddleware();
const currencyValues = new GetCurrencyValues();

productRouter.get('/', getProducts.execute);
productRouter.post('/', registerProduct.execute);
productRouter.get('/:id', validateProductId.execute, currencyValues.get, getProduct.execute);
productRouter.put('/:id', validateProductId.execute,  validateBodyFields.execute, updateProduct.execute);
productRouter.delete('/:id', validateProductId.execute, deleteProduct.execute);