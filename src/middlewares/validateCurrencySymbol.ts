import { NextFunction, Request, Response } from 'express';
import { cache } from '../index';
import { validateSymboltype } from '../yupschemas/validateSymbolSchema';

export class ValidateCurrencysymbol {
	async validate(req: Request<{symbol: string}>, res: Response, next: NextFunction) {
		const { symbol } = req.params;

		if (Number(symbol)) {
			return res.status(400).json({message: 'Simbolo deve ser uma string'});
		}

		await validateSymboltype.validate({symbol});

		const currencies = await cache.find();

		const existsSymbol = currencies.find(currency => currency.code === symbol.toUpperCase());

		if (!existsSymbol) {
			return res.status(404).json({message: 'Simbolo não encontrado'});
		}

		req.currency = { ...existsSymbol };
		next();

	}
}