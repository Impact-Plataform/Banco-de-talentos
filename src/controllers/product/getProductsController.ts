import { Request, Response } from 'express';
import { prismaClient } from '../../database/PrismaClient';

export class GetProductsController {
	async execute(req: Request, res: Response) {
		const { firstCurrency, secondCurrency } = req.selectedCurrencies;

		const products = await prismaClient.product.findMany();

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