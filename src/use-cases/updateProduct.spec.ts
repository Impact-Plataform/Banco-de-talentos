import { describe, expect, expectTypeOf, it } from 'vitest';
import { InMemoryRepository } from '../repositories/InMemoryRepository';
import { BadRequestError, NotFoundError } from '../utils/apiErrors';
import { CreateProduct } from './createProduct';
import { UpdateProduct } from './updateProduct';

describe('Validate use case "update product"', async () => {

	const productRepository = new InMemoryRepository();
	const createProduct = new CreateProduct(productRepository);
	const updateProduct = new UpdateProduct(productRepository);

	const productFields = {
		name: 'Teclado',
		value: 90,
		amount: 15
	};

	const updateProductFields = {
		name: 'Teclado sem fio',
		value: 100,
		amount: 8
	};

	await createProduct.create(productFields);

	it('Should be able to update one product', async () => {
		
		const product = await updateProduct.update(1, updateProductFields);

		expectTypeOf(product).toBeObject();
		expect(product).toMatchObject({ id: 1, name: 'Teclado sem fio', value: 100, amount: 8 });
	});

	it('Should not be able to update a non-existent product', async () => {
		try {
			await updateProduct.update(2, updateProductFields);
		} catch (error) {
			expect(error).toBeInstanceOf(NotFoundError);
			expect(error).toHaveProperty('message', 'Produto não encontrado');
		}		
	});

	it('should not be able to update a product with an existing name', async () => {
		try {
			await updateProduct.update(1, updateProductFields);
		} catch (error) {
			expect(error).toBeInstanceOf(BadRequestError);
			expect(error).toHaveProperty('message', 'Produto já cadastrado');
		}		
	});
});