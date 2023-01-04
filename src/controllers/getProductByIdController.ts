import { Request, Response } from 'express';
import { prismaClient } from '../database/PrismaClient';
import { validateIdtype } from '../yupschemas/validateIdSchema';

export class getProductByIdController {
	async execute(req: Request<{ id: number }>, res: Response) {

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

		return res.json({product: {...existsProduct}});
	}
}