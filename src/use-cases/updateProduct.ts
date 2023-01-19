import { Product } from '@prisma/client';
import { ProductRepository } from '../repositories/productRepository';
import { BadRequestError, NotFoundError } from '../utils/apiErrors';
import { validateBody } from '../yupschemas/productSchema';
import { validateIdtype } from '../yupschemas/validateIdSchema';

export class UpdateProduct {
	constructor(private productRepository: ProductRepository) {}

	async update(id: number, props: Omit<Product, 'id'>) {
    
		await validateIdtype.validate({ id });
    
		const existsId = await this.productRepository.findById(id);
    
		if (!existsId) {
			throw new NotFoundError('Produto não encontrado');
		}
    
		await validateBody.validate(props);

		if(Number(props.name)) {
			throw new BadRequestError('name deve ser um tipo de `string`');
		}
    
		const existsProduct = await this.productRepository.findByName(props.name);

		if(existsProduct) {
			throw new BadRequestError('Produto já cadastrado');
		}

		const product = await this.productRepository.update(id, props);

		return product;
	}
}