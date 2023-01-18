import { myCache } from '../index';
import { ICurrency } from '../interfaces/currencyInterface';
import { AxiosUtils } from '../utils/axiosUtils';

const axiosUtil = new AxiosUtils();

export class Cache {

	async find(): Promise<ICurrency[]> {

		const cache: ICurrency[] | undefined = myCache.get('currencies');

		if (cache) {
			return cache;
		}

		await this.generate();

		return this.find();
	}

	async generate() {
		const axiosData = await axiosUtil.getApiData();
		const formatedAxiosData = axiosUtil.transformArray(axiosData);
  
		myCache.set('currencies', formatedAxiosData);
	}

	async getTwoCurrencies(firstCurrency: string, secondCurrency: string) {
		const currencies = await this.find();

		let firstCurrencyValue;
		let secondCurrencyValue;

		for (const currency of currencies) {
			if (currency.code === firstCurrency.toUpperCase()) {
				firstCurrencyValue = currency.value;
			}

			if (currency.code === secondCurrency.toUpperCase()) {
				secondCurrencyValue = currency.value;
			}
		}

		return { firstCurrencyValue, secondCurrencyValue };
	}
}
