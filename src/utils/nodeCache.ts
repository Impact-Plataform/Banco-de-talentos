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
}
