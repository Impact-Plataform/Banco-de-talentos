import { BadRequestError, NotFoundError } from '../../utils/apiErrors';
import { currencyApi } from '../../utils/currencyApi';
import { validateSymboltype } from '../../yupschemas/validateSymbolSchema';

export class GetCurrency {  
	async get(symbol: string) {

		if (Number(symbol)) {
			throw new BadRequestError('Simbolo deve ser uma string');
		}

		await validateSymboltype.validate({symbol});

		const currencies = await currencyApi.getApiData();

		const existsSymbol = currencies.find(currency => currency.code === symbol.toUpperCase());

		if (!existsSymbol) {
			throw new NotFoundError('Simbolo não encontrado');
		}

		return existsSymbol;
	}
}