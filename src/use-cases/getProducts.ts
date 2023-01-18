import { cache } from '..';
import { ProductRepository } from '../repositories/productRepository';
import { NotFoundError } from '../utils/apiErrors';

export class GetProducts {
	constructor(private productRepository: ProductRepository) {}

	async get() {
		const firstCurrency = 'USD';
		const secondCurrency = 'EUR';

		const {firstCurrencyValue, secondCurrencyValue} = await cache.getTwoCurrencies(firstCurrency, secondCurrency);

		const products = await this.productRepository.find();

		if (!products) {
			throw new NotFoundError('Sem produtos cadastrados.');
		}

		const result = [];

		for (const element of products) {
			result.push({
				...element,
				valueUSD: firstCurrencyValue ? (element.value * firstCurrencyValue) : '' ,
				valueEUR: secondCurrencyValue ? (element.value * secondCurrencyValue) : ''
			});
		}

		return result;
	}
}