import { Product } from '@prisma/client';
import { ProductRepository } from './productRepository';

export class InMemoryRepository implements ProductRepository{

	public products: Product[] = [];

	async create(product: Omit<Product, 'id'>): Promise<Product> {
		const arrayLength = this.products.push({
			id: this.products.length + 1,
			...product
		});

		const newProduct = this.products[arrayLength - 1];

		return newProduct;
	}
	async findById(productId: number): Promise<Product | null> {
		const product = this.products.find(product => product.id === productId);

		if(!product) {
			return null;
		}

		return product;
	}
	async findByName(productName: string): Promise<Product | null> {
		const product = this.products.find(product => product.name === productName);

		if(!product) {
			return null;
		}

		return product;
	}
	async find(): Promise<Product[] | null> {
		if(this.products.length === 0) {
			return null;
		}

		return this.products;
	}
	async update(productId: number, product: Omit<Product, 'id'>): Promise<Product> {
		const productIndex = this.products.findIndex(element => element.id === productId);

		this.products.splice(productIndex, 1, {
			id: productId,
			...product
		});

		return this.products[productIndex];
	}
	async delete(productId: number): Promise<Product> {
		const productIndex = this.products.findIndex(element => element.id === productId);

		const deletedProduct = this.products.splice(productIndex, 1);

		return deletedProduct[0];
	}

}