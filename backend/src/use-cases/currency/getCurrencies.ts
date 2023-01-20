import { currencyApi } from '../../utils/currencyApi';

export class GetCurrencies {  
	async get() {

		const currencies = await currencyApi.getApiData();

		return currencies;
	}
}