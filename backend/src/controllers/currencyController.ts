import { Request, Response } from 'express';

import { GetCurrencies } from '../use-cases/currency/getCurrencies';
import { GetCurrency } from '../use-cases/currency/getCurrency';

const getCurrencies = new GetCurrencies();
const getCurrency = new GetCurrency();

export class CurencyController {

	async getCurrencies (req: Request, res: Response) {

		const currencies = await getCurrencies.get();
  
		return res.json({currencies});
	}

	async getCurrency (req: Request<{symbol: string}>, res: Response) {
		
		const { symbol } = req.params;

		const currency = await getCurrency.get(symbol);
  
		return res.json({currency});
	}
}