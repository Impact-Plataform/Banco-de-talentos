import { AppError } from "../../../shared/errors/app-error";
import { ProductsRepository, updatedProps } from "../../repositories/products-repository";

export class UpdateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ id, data }: updatedProps): Promise<void> {
    const productAlreadyExists = await this.productsRepository.loadById(
      id
    );

    if (!productAlreadyExists) {
      throw new AppError("Product not found", 404);
    }

    await this.productsRepository.update({ id, data });
  }
}
