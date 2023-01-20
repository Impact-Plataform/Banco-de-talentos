import { describe, expect, expectTypeOf, it } from 'vitest';
import { GetCurrencies } from './getCurrencies';

describe('Validate use case "get currencies"', async () => {

	const getCurrencies = new GetCurrencies();

	it('Should be able to return a curreny array', async () => {
		
		const currencies = await getCurrencies.get();

		expectTypeOf(currencies).toBeArray();
		expect(currencies[0]).toHaveProperty('code');
		expect(currencies[0]).toHaveProperty('name');
		expect(currencies[0]).toHaveProperty('value');
		
	});
});