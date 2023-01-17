import { Product } from '@prisma/client';
import { Request, Response } from 'express';
import { prismaClient } from '../../database/PrismaClient';
import { PrismaProductRepository } from '../../repositories/prismaProductRepository';

const prismaProductRepository = new PrismaProductRepository(prismaClient);

export class DeleteProductController {
	async execute(req: Request<Pick<Product, 'id'>>, res: Response) {
		const { id } = req.params;

		const product = await prismaProductRepository.delete(id);
		
		if (product) {
			return res.json({message: 'Produto deletado com sucesso'});
		}
	}
}