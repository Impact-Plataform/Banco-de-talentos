import { BadRequestError, NotFoundError } from '../../utils/apiErrors';
import { currencyApi } from '../../utils/currencyApi';
import { validateSymboltype } from '../../yupschemas/validateSymbolSchema';

export class GetCurrency {  
	async get(symbol: string) {

		await validateSymboltype.validate({symbol});

		if (Number(symbol)) {
			throw new BadRequestError('symbol deve ser um tipo de `string`');
		}

		const currencies = await currencyApi.getApiData();

		const existsSymbol = currencies.find(currency => currency.code === symbol.toUpperCase());

		if (!existsSymbol) {
			throw new NotFoundError('Simbolo não encontrado');
		}

		return existsSymbol;
	}
}