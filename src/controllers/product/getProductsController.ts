import { Request, Response } from 'express';
import { PrismaProductRepository } from '../../repositories/prismaProductRepository';

const prismaProductRepository = new PrismaProductRepository();

export class GetProductsController {
	async execute(req: Request, res: Response) {
		const { firstCurrency, secondCurrency } = req.selectedCurrencies;

		const products = await prismaProductRepository.find();

		if (!products) {
			return res.status(404).json({message: 'Sem produtos cadastrados.'});
		}

		const result = [];

		for (const element of products) {
			result.push({
				...element,
				valueUSD: firstCurrency ? (element.value * firstCurrency) : '' ,
				valueEUR: secondCurrency ? (element.value * secondCurrency) : ''
			});
		}
		
		return res.json({products: result});
	}
}