import { Product } from '@prisma/client';
import { Request, Response } from 'express';

export class getProductByIdController {
	async execute(req: Request<Pick<Product, 'id'>>, res: Response) {

		const { firstCurrency, secondCurrency } = req.selectedCurrencies;
		const product = req.product;

		const result = {
			...product,
			valueUSD: firstCurrency ? (product.value * firstCurrency) : '' ,
			valueEUR: secondCurrency ? (product.value * secondCurrency) : ''
		};

		return res.json({product: result});
	}
}