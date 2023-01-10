import NodeCache from 'node-cache';
import { ICurrency } from '../interfaces/currencyInterface';
import { AxiosUtils } from '../utils/axiosUtils';

const myCache = new NodeCache({ stdTTL: 10 });
const axiosUtil = new AxiosUtils();

export class GenerateCache {

	async generate(): Promise<ICurrency[]> {

		const cache: ICurrency[] | undefined = myCache.get('currencies');

		if (cache) {
			return cache;
		}

		const axiosData = await axiosUtil.getApiData();
		const formatedAxiosData = axiosUtil.transformArray(axiosData);
  
		myCache.set('currencies', formatedAxiosData);

		return this.generate();
	}
}
