import { Router } from 'express';
import { GetCurenciesController } from '../controllers/currency/getCurrenciesController';
import { GetCurencyController } from '../controllers/currency/getCurrencyController';
import { ValidateCurrencysymbol } from '../middlewares/validateCurrencySymbol';

const getCurencies = new GetCurenciesController();
const getCurrency = new GetCurencyController();

const validateCurrencysymbol = new ValidateCurrencysymbol();

export const currencyRouter = Router();

currencyRouter.get('/', getCurencies.execute);
currencyRouter.get('/:symbol', validateCurrencysymbol.validate, getCurrency.execute);