import { Request, Response } from 'express';
import { prismaClient } from '../database/PrismaClient';

export class GetProductsController {
	async execute(req: Request, res: Response) {
		const products = await prismaClient.product.findMany();
		
		return res.json({products});
	}
}