import { Product } from '@prisma/client';
import { Request, Response } from 'express';

export class getProductByIdController {
	async execute(req: Request<Pick<Product, 'id'>>, res: Response) {

		return res.json({product: req.product});
	}
}