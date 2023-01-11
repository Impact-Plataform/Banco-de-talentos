import { Product } from '@prisma/client';
import { Request, Response } from 'express';
import { prismaClient } from '../../database/PrismaClient';

export class UpdateProductController {
	async execute(req: Request<Pick<Product, 'id'>, unknown, Omit<Product, 'id'>>, res: Response) {
		
		const { amount, name, value } = req.body;
		const { id } = req.params;
    
		const product = await prismaClient.product.update({
			data: {
				amount,
				name,
				value
			},
			where: {
				id: Number(id)
			}
		});

		return res.json({product});
	}
}