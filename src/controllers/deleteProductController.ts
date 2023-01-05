import { Product } from '@prisma/client';
import { Request, Response } from 'express';
import { prismaClient } from '../database/PrismaClient';

export class DeleteProductController {
	async execute(req: Request<Pick<Product, 'id'>>, res: Response) {
		const { id } = req.params;

		await prismaClient.product.delete({
			where: {
				id: Number(id)
			}
		});

		return res.json({message: 'Produto deletado com sucesso'});
	}
}