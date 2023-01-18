import { Product } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { validateIdtype } from '../yupschemas/validateIdSchema';
import { PrismaProductRepository } from '../repositories/prismaProductRepository';

const prismaProductRepository = new PrismaProductRepository();

export class GetProductMiddleware {
	async execute (req: Request<Pick<Product, 'id'>>, res: Response, next: NextFunction) {
		const { id } = req.params;

		await validateIdtype.validate({ id });

		const existsProduct = await prismaProductRepository.findById(id);

		if (!existsProduct) {
			return res.status(404).json({message: 'Produto não encontrado'});
		}

		req.product = {...existsProduct};

		next();
	}
}