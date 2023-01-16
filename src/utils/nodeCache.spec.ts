import { describe, expectTypeOf, it } from 'vitest';
import { cache } from '../index';

describe('validate the creation and retrieval of the cache', () => {
	it('Should be able to generate a cache', async () => {		

		await cache.generate();

		const generatedCache = await cache.find();

		expectTypeOf(generatedCache).toBeArray();
	});
});