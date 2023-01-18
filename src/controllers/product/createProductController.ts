import { Product } from '@prisma/client';
import { Request, Response } from 'express';
import { PrismaProductRepository } from '../../repositories/prismaProductRepository';
import { CreateProduct } from '../../use-cases/createProduct';

const prismaProductRepository = new PrismaProductRepository();
const createProduct = new CreateProduct(prismaProductRepository);

export class createProductController {
	async execute(req: Request<unknown, unknown, Omit<Product, 'id'>>, res: Response) {
		const { amount, name, value } = req.body;

		const product = await createProduct.create({amount, name, value});
		return res.status(201).json({ product });
	}
}