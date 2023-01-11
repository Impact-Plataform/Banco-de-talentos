import { Request, Response } from 'express';
import { cache } from '../index';
import { prismaClient } from '../database/PrismaClient';

export class GetProductsController {
	async execute(req: Request, res: Response) {
		const products = await prismaClient.product.findMany();
		const currencies = await cache.find();

		const firstCurrency = currencies.find(element => element.code === 'USD');
		const secondCurrency = currencies.find(element => element.code === 'EUR');

		const result = [];

		for (const element of products) {
			result.push({
				...element,
				valueUSD: firstCurrency ? (element.value * firstCurrency.value) : '' ,
				valueEUR: secondCurrency ? (element.value * secondCurrency.value) : ''
			});
		}
		
		return res.json({products: result});
	}
}