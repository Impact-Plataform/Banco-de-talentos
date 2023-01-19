import { Router } from 'express';

import { CurencyController } from '../controllers/currencyController';

const curencyController = new CurencyController();

export const currencyRouter = Router();

currencyRouter.get('/', curencyController.getCurrencies);
currencyRouter.get('/:symbol', curencyController.getCurrency);