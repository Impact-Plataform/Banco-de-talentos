import { axiosInstance } from '../config/axios';
import { ICurrency } from '../interfaces/currencyInterface';

export class AxiosUtils {
  
	async getApiData() {
		const axiosData = await axiosInstance.get('/all');
		return axiosData.data;
	}
  
	transformArray(data: Record<string, Record<string, string>>) {
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