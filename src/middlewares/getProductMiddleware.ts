import { NextFunction, Request, Response } from 'express';
import { prismaClient } from '../database/PrismaClient';
import { validateIdtype } from '../yupschemas/validateIdSchema';

export class GetProductMiddleware {
	async execute (req: Request<{id: number}>, res: Response, next: NextFunction) {
		const { id } = req.params;

		await validateIdtype.validate({ id });

		const existsProduct = await prismaClient.product.findUnique({
			where: {
				id: Number(id)
			}
		});

		if (!existsProduct) {
			return res.status(404).json({message: 'Produto não encontrado'});
		}

		req.product = {...existsProduct};

		next();
	}
}