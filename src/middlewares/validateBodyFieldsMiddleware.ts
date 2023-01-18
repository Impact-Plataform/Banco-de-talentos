import { Product } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { PrismaProductRepository } from '../repositories/prismaProductRepository';
import { validateBody } from '../yupschemas/productSchema';

const prismaProductRepository = new PrismaProductRepository();

export class ValidateBodyFields {
	async execute(req: Request<unknown, unknown, Omit<Product, 'id'>>, res: Response, next: NextFunction) {
		await validateBody.validate(req.body);

		const existsProduct = await prismaProductRepository.findByName(req.body.name);

		if (existsProduct) {
			return res.status(400).json({message: 'Produto já cadastrado'});
		}
    
		next();
	}
}