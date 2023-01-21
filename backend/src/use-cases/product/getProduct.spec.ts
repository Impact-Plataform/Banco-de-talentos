import { describe, expect, expectTypeOf, it } from 'vitest';
import { InMemoryRepository } from '../../repositories/InMemoryRepository';
import { NotFoundError } from '../../utils/apiErrors';
import { CreateProduct } from './createProduct';
import { GetProduct } from './getProduct';

describe('Validate use case "get product"', async () => {

	const productRepository = new InMemoryRepository();
	const createProduct = new CreateProduct(productRepository);
	const getProduct = new GetProduct(productRepository);

	const productFields = {
		name: 'Teclado',
		value: 90,
		amount: 15
	};

	await createProduct.create(productFields);

	it('Should be able to return one product', async () => {
		
		const product = await getProduct.get(1);

		expectTypeOf(product).toBeObject();
		expect(product).toHaveProperty('valueUSD');
		expect(product).toHaveProperty('valueEUR');
	});

	it('Should not be able to return a non-existent product', async () => {
		try {
			await getProduct.get(2);
		} catch (error) {
			expect(error).toBeInstanceOf(NotFoundError);
			expect(error).toHaveProperty('message', 'Produto não encontrado');
		}		
	});
});