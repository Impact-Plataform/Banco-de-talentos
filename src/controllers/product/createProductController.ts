import { Product } from '@prisma/client';
import { Request, Response } from 'express';
import { prismaClient } from '../../database/PrismaClient';
import { PrismaProductRepository } from '../../repositories/prismaProductRepository';

const prismaProductRepository = new PrismaProductRepository(prismaClient);

export class createProductController {
	async execute(req: Request<unknown, unknown, Omit<Product, 'id'>>, res: Response) {
		const { amount, name, value } = req.body;

		const product = await prismaProductRepository.create({amount, value, name});

		return res.status(201).json({ product });
	}
}