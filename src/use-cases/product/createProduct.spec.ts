import { describe, expect, expectTypeOf, it } from 'vitest';
import { InMemoryRepository } from '../repositories/InMemoryRepository';
import { BadRequestError } from '../utils/apiErrors';
import { CreateProduct } from './createProduct';

describe('Validate use case "create product"', () => {

	const productRepository = new InMemoryRepository();
	const createProduct = new CreateProduct(productRepository);

	const productFields = {
		name: 'Teclado',
		value: 90,
		amount: 15
	};

	it('Should be able to create a product', async () => {

		const product = await createProduct.create(productFields);

		expectTypeOf(product).toBeObject();
		expect(product).toHaveProperty('id');
		expect(product).toMatchObject({ id: 1, name: 'Teclado', value: 90, amount: 15 });
	});

	it('Should not be able to register an existing product', async () => {
		try {
			await createProduct.create(productFields);
		} catch (error) {
			expect(error).toBeInstanceOf(BadRequestError);
			expect(error).toHaveProperty('message', 'Produto já cadastrado');
		}		
	});
});