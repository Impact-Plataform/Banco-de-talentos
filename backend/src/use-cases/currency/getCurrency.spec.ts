import { describe, expect, expectTypeOf, it } from 'vitest';
import { NotFoundError } from '../../utils/apiErrors';
import { GetCurrency } from './getCurrency';

describe('Validate use case "get currency"', async () => {

	const getCurrency = new GetCurrency();

	it('Should be able to return one currency', async () => {
		
		const currency = await getCurrency.get('usd');

		expectTypeOf(currency).toBeObject();
		expect(currency).toHaveProperty('code', 'USD');
		expect(currency).toHaveProperty('name');
		expect(currency).toHaveProperty('value');		
	});

	it('Should not be able to return a non-existent symbol', async () => {
		try {
			await getCurrency.get('awe');
		} catch (error) {
			expect(error).toBeInstanceOf(NotFoundError);
			expect(error).toHaveProperty('message', 'Simbolo não encontrado');
		}		
	});

});