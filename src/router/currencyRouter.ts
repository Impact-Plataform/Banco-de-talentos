import { Router } from 'express';
import { GetCurenciesController } from '../controllers/getCurrenciesController';

const getCurencies = new GetCurenciesController();

export const currencyRouter = Router();

currencyRouter.get('/', getCurencies.execute);