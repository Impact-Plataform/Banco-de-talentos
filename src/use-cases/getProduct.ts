import { currencyApi } from '../utils/currencyApi';
import { ProductRepository } from '../repositories/productRepository';
import { NotFoundError } from '../utils/apiErrors';
import { validateIdtype } from '../yupschemas/validateIdSchema';

export class GetProduct {
	constructor(private productRepository: ProductRepository) {}

	async get(id: number) {
		await validateIdtype.validate({ id });

		const existsProduct = await this.productRepository.findById(id);

		if (!existsProduct) {
			throw new NotFoundError('Produto não encontrado');
		}

		const firstCurrency = 'USD';
		const secondCurrency = 'EUR';

		const {firstCurrencyValue, secondCurrencyValue} = await currencyApi.getTwoCurrencies(firstCurrency, secondCurrency);

		const product = {
			...existsProduct,
			valueUSD: firstCurrencyValue ? (existsProduct.value * firstCurrencyValue) : '' ,
			valueEUR: secondCurrencyValue ? (existsProduct.value * secondCurrencyValue) : ''
		};

		return product;
	}
}