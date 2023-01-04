import { Product } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { prismaClient } from '../database/PrismaClient';
import { validateBody } from '../yupschemas/productSchema';

export class ValidateBodyFields {
	async execute(req: Request<unknown, unknown, Omit<Product, 'id'>>, res: Response, next: NextFunction) {
		await validateBody.validate(req.body);

		const existsProduct = await prismaClient.product.findUnique({
			where: {
				name: req.body.name
			},
			select: {
				name: true
			}
		});

		if (existsProduct) {
			return res.status(400).json({message: 'Produto já cadastrado'});
		}
    
		next();
	}
}