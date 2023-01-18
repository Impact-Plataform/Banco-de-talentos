import { Product } from '@prisma/client';
import { Request, Response } from 'express';
import { PrismaProductRepository } from '../../repositories/prismaProductRepository';
import { DeleteProduct } from '../../use-cases/deleteProduct';

const prismaProductRepository = new PrismaProductRepository();
const deleteProduct = new DeleteProduct(prismaProductRepository);

export class DeleteProductController {
	async execute(req: Request<Pick<Product, 'id'>>, res: Response) {
		const { id } = req.params;

		const product = await deleteProduct.delete(id);
		
		if (product) {
			return res.json({message: 'Produto deletado com sucesso'});
		}
	}
}