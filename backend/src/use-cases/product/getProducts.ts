import { currencyApi } from '../../utils/currencyApi';
import { ProductRepository } from '../../repositories/productRepository';
import { NotFoundError } from '../../utils/apiErrors';

export class GetProducts {
	constructor(private productRepository: ProductRepository) {}

	async get() {
		const products = await this.productRepository.find();

		if (!products) {
			throw new NotFoundError('Sem produtos cadastrados.');
		}

		const firstCurrency = 'USD';
		const secondCurrency = 'EUR';
		const result = [];

		const {firstCurrencyValue, secondCurrencyValue} = await currencyApi.getTwoCurrencyValues(firstCurrency, secondCurrency);

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