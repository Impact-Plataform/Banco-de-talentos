import { Router } from 'express';

import { createProductController } from '../controllers/createProductController';
import { getProductByIdController } from '../controllers/getProductByIdController';
import { GetProductsController } from '../controllers/getProductsController';
import { UpdateProductController } from '../controllers/updateProductController';
import { GetProductMiddleware } from '../middlewares/getProductMiddleware';
import { ValidateBodyFields } from '../middlewares/validateBodyFieldsMiddleware';

export const productRouter = Router();

productRouter.get('/', new GetProductsController().execute);
productRouter.post('/', new ValidateBodyFields().execute , new createProductController().execute);
productRouter.get('/:id', new GetProductMiddleware().execute , new getProductByIdController().execute);
productRouter.put('/:id', new GetProductMiddleware().execute,  new ValidateBodyFields().execute, new UpdateProductController().execute);