import { describe, expect, it } from 'vitest';

const {
	fetchEconomiaAPI,
	getCurrencyData,
	assignUsdAndEur
} = require('../utility/cache');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 3600 });

describe('utility/cache.js', () => {
	it('fetchEconomiaAPI function: should fetch data with success', async () => {
		const result = await fetchEconomiaAPI();

		expect(result).toBeDefined();
		expect(result).not.toBeNull();
		expect(result).toHaveProperty('USD');
		expect(result.USD).toHaveProperty('code');
	});

	it('getCurrencyData function: should store the fetch in a cache for 1 hour', async () => {
		const apiData = await getCurrencyData();

		cache.set('apiData', apiData);
		const data = cache.get('apiData');

		expect(data).toBeDefined();
		const ttl = +((cache.getTtl('apiData') - Date.now()) / 1000).toFixed(); // converting miliseconds to seconds
		expect(ttl).toBe(3600); // 3600 seconds -> 1 hour
	});

	it(`assignUsdAndEur function: "priceUSD" and "priceEUR" keys are added into an object and 
        it's value is equal to the object's price divided by it's initial value (fetched from a data)`, async () => {
		const mockObj = { name: 'Product', price: 100 };
		const data = await fetchEconomiaAPI();
		const result = await assignUsdAndEur(mockObj, mockObj.price);

		expect(result).toHaveProperty('priceUSD');
		expect(result).toHaveProperty('priceEUR');

		expect(result.priceUSD).toBe(+(mockObj.price / data.USD.bid).toFixed(2));
		expect(result.priceEUR).toBe(+(mockObj.price / data.EUR.bid).toFixed(2));
	});
});
