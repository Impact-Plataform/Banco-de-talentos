import { Product } from '@prisma/client';
import { ProductRepository } from '../../repositories/productRepository';
import { BadRequestError } from '../../utils/apiErrors';
import { validateBody } from '../../yupschemas/productSchema';

export class CreateProduct {
	constructor(private productRepository: ProductRepository) {}

	async create(props: Omit<Product, 'id'>) {
		await validateBody.validate(props);

		if(Number(props.name)) {
			throw new BadRequestError('name deve ser um tipo de `string`');
		}

		const existsProduct = await this.productRepository.findByName(props.name);

		if(existsProduct) {
			throw new BadRequestError('Produto já cadastrado');
		}

		const product = await this.productRepository.create(props);

		return product;
	}
}