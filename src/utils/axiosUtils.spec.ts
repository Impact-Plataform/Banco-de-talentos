import { describe, expectTypeOf, it } from 'vitest';
import { AxiosUtils } from './axiosUtils';

describe('Validate the return of the function transformArray', () => {
	it('Should be able to retun a array of objects', () => {

		const object = {
			'USD': {
				'code': 'USD',
				'codein': 'BRL',
				'name': 'Dólar Americano/Real Brasileiro',
				'high': '5.1544',
				'low': '5.0786',
				'varBid': '-0.0121',
				'pctChange': '-0.24',
				'bid': '5.0956',
				'ask': '5.0966',
				'timestamp': '1673645400',
				'create_date': '2023-01-13 18:30:00'
			},
			'USDT': {
				'code': 'USD',
				'codein': 'BRLT',
				'name': 'Dólar Americano/Real Brasileiro Turismo',
				'high': '5.175',
				'low': '5.105',
				'varBid': '0.01',
				'pctChange': '0.2',
				'bid': '4.97',
				'ask': '5.28',
				'timestamp': '1673638740',
				'create_date': '2023-01-13 16:39:00'
			}
		};

		const axiosUtils = new AxiosUtils();

		const result = axiosUtils.transformArray(object);

		expectTypeOf(result).toBeArray();
	});
});