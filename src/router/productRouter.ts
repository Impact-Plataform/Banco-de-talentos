import { Router } from 'express';
import { createProductController } from '../controllers/createProductController';
import { GetProductsController } from '../controllers/getProductsController';
import { CreateProductMiddleware } from '../middlewares/createProductMiddleware';

export const productRouter = Router();

productRouter.get('/', new GetProductsController().execute);
productRouter.post('/', new CreateProductMiddleware().validateBodyFields , new createProductController().execute);