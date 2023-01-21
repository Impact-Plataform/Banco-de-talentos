import { Router } from 'express';

import { ProductController } from '../controllers/productController';

export const productRouter = Router();

const productController = new ProductController();

productRouter.get('/', productController.get);
productRouter.post('/', productController.create);
productRouter.get('/:id', productController.getById);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id', productController.delete);