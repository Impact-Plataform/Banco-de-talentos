import { Product } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { cache } from '..';

export class GetCurrencyValues {
	async get(req: Request<Pick<Product, 'id'>> | any, res: Response, next: NextFunction) {
		const currencies = await cache.find();

		let firstCurrency;
		let secondCurrency;

		for (const currency of currencies) {
			if (currency.code === 'USD') {
				firstCurrency = currency.value;
			}

			if (currency.code === 'EUR') {
				secondCurrency = currency.value;
			}
		}

		req.selectedCurrencies = { firstCurrency, secondCurrency };
		
		next();
	}
}