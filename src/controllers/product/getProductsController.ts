import { Request, Response } from 'express';
import { PrismaProductRepository } from '../../repositories/prismaProductRepository';
import { GetProducts } from '../../use-cases/getProducts';

const prismaProductRepository = new PrismaProductRepository();
const getProducts =  new GetProducts(prismaProductRepository);

export class GetProductsController {
	async execute(req: Request, res: Response) {

		const products = await getProducts.get();
		
		return res.json({products});
	}
}