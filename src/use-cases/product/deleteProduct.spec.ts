import { describe, expect, expectTypeOf, it } from 'vitest';
import { InMemoryRepository } from '../repositories/InMemoryRepository';
import { NotFoundError } from '../utils/apiErrors';
import { CreateProduct } from './createProduct';
import { DeleteProduct } from './deleteProduct';

describe('Validate use case "delete product"', async () => {

	const productRepository = new InMemoryRepository();
	const createProduct = new CreateProduct(productRepository);
	const deleteProduct = new DeleteProduct(productRepository);

	const productFields = {
		name: 'Teclado',
		value: 90,
		amount: 15
	};

	await createProduct.create(productFields);

	it('Should be able to delete a product', async () => {
		
		const deletedProduct = await deleteProduct.delete(1);

		expectTypeOf(deletedProduct).toBeObject();
		expect(deletedProduct).not.toBeNull();
		expect(deletedProduct).toMatchObject({ id: 1, name: 'Teclado', value: 90, amount: 15 });
	});

	it('Should not be able to delete a non-existent product', async () => {
		try {
			await deleteProduct.delete(1);
		} catch (error) {
			expect(error).toBeInstanceOf(NotFoundError);
			expect(error).toHaveProperty('message', 'Produto não encontrado');
		}		
	});
});