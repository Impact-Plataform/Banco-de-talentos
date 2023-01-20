import { Product } from '@prisma/client';
import { ProductRepository } from './productRepository';
import { prismaClient } from '../database/PrismaClient';

export class PrismaProductRepository implements ProductRepository {

	create(product: Omit<Product, 'id'>): Promise<Product> {
		const registeredProduct = prismaClient.product.create({
			data: {
				amount: Number(product.amount),
				name: product.name,
				value: Number(product.value)
			}
		});
    
		return registeredProduct;
	}
  
	findById(productId: number): Promise<Product | null> {
		const product = prismaClient.product.findUnique({
			where: {
				id: Number(productId)
			}
		});
    
		return product;
	}
  
	findByName(productName: string): Promise<Product | null> {
		const product = prismaClient.product.findUnique({
			where: {
				name: productName
			}
		});

		return product;
	}
  
	find(): Promise<Product[] | null> {
		const products = prismaClient.product.findMany();

		return products;
	}

	update(productId: number, product: Omit<Product, 'id'>): Promise<Product> {
		const updatedProduct = prismaClient.product.update({
			data: {
				amount: Number(product.amount),
				name: product.name,
				value: Number(product.value)
			},
			where: {
				id: Number(productId)
			}
		});

		return updatedProduct;
	}

	delete(productId: number): Promise<Product> {
		const product = prismaClient.product.delete({
			where: {
				id: Number(productId)
			}
		});

		return product;
	}

}