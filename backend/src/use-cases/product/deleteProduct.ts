import { ProductRepository } from '../../repositories/productRepository';
import { NotFoundError } from '../../utils/apiErrors';
import { validateIdtype } from '../../yupschemas/validateIdSchema';

export class DeleteProduct {
	constructor(private productRepository: ProductRepository) {}

	async delete(id: number) {
    
		await validateIdtype.validate({ id });
    
		const existsId = await this.productRepository.findById(id);
    
		if (!existsId) {
			throw new NotFoundError('Produto não encontrado');
		}
    
		const deletedProduct = await this.productRepository.delete(id);

		return deletedProduct;
	}
}