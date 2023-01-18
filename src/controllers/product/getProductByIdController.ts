import { Product } from '@prisma/client';
import { Request, Response } from 'express';
import { PrismaProductRepository } from '../../repositories/prismaProductRepository';
import { GetProduct } from '../../use-cases/getProduct';

const prismaProductRepository = new PrismaProductRepository();
const getProduct = new GetProduct(prismaProductRepository);

export class getProductByIdController {
	async execute(req: Request<Pick<Product, 'id'>>, res: Response) {
		
		const { id } = req.params;

		const product = await getProduct.get(id);

		return res.json({product});
	}
}