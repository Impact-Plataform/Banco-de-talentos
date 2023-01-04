import { Router } from 'express';
import { createProductController } from '../controllers/createProductController';
import { getProductByIdController } from '../controllers/getProductByIdController';
import { GetProductsController } from '../controllers/getProductsController';
import { CreateProductMiddleware } from '../middlewares/createProductMiddleware';

export const productRouter = Router();

productRouter.get('/', new GetProductsController().execute);
productRouter.post('/', new CreateProductMiddleware().validateBodyFields , new createProductController().execute);
productRouter.get('/:id', new getProductByIdController().execute);