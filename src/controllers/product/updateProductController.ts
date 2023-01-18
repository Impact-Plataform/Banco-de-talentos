import { Product } from '@prisma/client';
import { Request, Response } from 'express';
import { PrismaProductRepository } from '../../repositories/prismaProductRepository';

const prismaProductRepository = new PrismaProductRepository();

export class UpdateProductController {
	async execute(req: Request<Pick<Product, 'id'>, unknown, Omit<Product, 'id'>>, res: Response) {
		
		const { amount, name, value } = req.body;
		const { id } = req.params;
    
		const product = await prismaProductRepository.update(id, { amount, name, value });

		return res.json({product});
	}
}