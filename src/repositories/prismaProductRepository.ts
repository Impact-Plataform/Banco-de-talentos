import { PrismaClient, Product } from '@prisma/client';
import { ProductRepository } from './productRepository';

export class PrismaProductRepository implements ProductRepository {

	constructor(private prismaClient: PrismaClient){}
  
	create(product: Omit<Product, 'id'>): Promise<Product> {
		const registeredProduct  = this.prismaClient.product.create({
			data: {
				amount: Number(product.amount),
				name: product.name,
				value: Number(product.value)
			}
		});
    
		return registeredProduct;
	}
  
	findById(productId: number): Promise<Product | null> {
		const product = this.prismaClient.product.findUnique({
			where: {
				id: Number(productId)
			}
		});
    
		return product;
	}
  
	findByName(productName: string): Promise<Product | null> {
		const product = this.prismaClient.product.findUnique({
			where: {
				name: productName
			}
		});

		return product;
	}
  
	find(): Promise<Product[] | null> {
		const products = this.prismaClient.product.findMany();

		return products;
	}

	update(productId: number, product: Omit<Product, 'id'>): Promise<Product> {
		const updatedProduct = this.prismaClient.product.update({
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
		const product = this.prismaClient.product.delete({
			where: {
				id: Number(productId)
			}
		});

		return product;
	}

}