import { describe, expect, expectTypeOf, it } from 'vitest';
import { InMemoryRepository } from '../../repositories/InMemoryRepository';
import { NotFoundError } from '../../utils/apiErrors';
import { CreateProduct } from './createProduct';
import { DeleteProduct } from './deleteProduct';
import { GetProducts } from './getProducts';

describe('Validate use case "get products"', async () => {

	const productRepository = new InMemoryRepository();
	const createProduct = new CreateProduct(productRepository);
	const getProducts = new GetProducts(productRepository);
	const deleteProduct = new DeleteProduct(productRepository);

	const productFields = {
		name: 'Teclado',
		value: 90,
		amount: 15
	};

	await createProduct.create(productFields);

	it('Should be able to return a product array', async () => {
		
		const products = await getProducts.get();

		expectTypeOf(products).toBeArray();
		expect(products[0]).toHaveProperty('valueUSD');
		expect(products[0]).toHaveProperty('valueEUR');
	});

	it('Should not be able to return a non-existent product array', async () => {
		await deleteProduct.delete(1);
		try {
			await getProducts.get();
		} catch (error) {
			expect(error).toBeInstanceOf(NotFoundError);
			expect(error).toHaveProperty('message', 'Sem produtos cadastrados.');
		}		
	});
});