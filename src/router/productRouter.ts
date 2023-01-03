import { Router } from 'express';
import { GetProductsController } from '../controllers/getProductsController';

export const productRouter = Router();

productRouter.get('/', new GetProductsController().execute);