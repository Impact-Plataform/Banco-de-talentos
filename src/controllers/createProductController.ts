import { Product } from '@prisma/client';
import { Request, Response } from 'express';
import { prismaClient } from '../database/PrismaClient';

export class createProductController {
	async execute(req: Request<unknown, unknown, Omit<Product, 'id'>>, res: Response) {
		const { amount, name, value } = req.body;

		const product = await prismaClient.product.create({
			data: {
				amount: Number(amount),
				name,
				value: Number(value)
			}
		});

		return res.json({ product });
	}
}