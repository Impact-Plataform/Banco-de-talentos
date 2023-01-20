import { axiosInstance } from '../config/axios';
import { ICurrency } from '../interfaces/currencyInterface';
import { cache } from '../cache/nodeCache';

class CurrencyApi {
  
	async getApiData() {

		const currencies = cache.getCache('currencies');

		if (!currencies) {
			const axiosData = (await axiosInstance.get('/all')).data;
			const formatedAxiosData = this.transformArray(axiosData);

			cache.setCache('currencies', formatedAxiosData);

			return formatedAxiosData;
		}

		return currencies;

	}

	async getTwoCurrencyValues(firstCurrency: string, secondCurrency: string) {
		const currencies = await this.getApiData();

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
  
	private transformArray(data: Record<string, Record<string, string>>) {
		const array: ICurrency[] = [];
  
		for (const [key, value] of Object.entries(data)) {
			array.push({
				code: key,
				name: value.name,
				value: Number(value.ask)
			});
		}
  
		return array;
	}
}

export const currencyApi = new CurrencyApi();