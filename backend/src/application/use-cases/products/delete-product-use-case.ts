import { AppError } from "../../../shared/errors/app-error";
import { ProductsRepository } from "../../repositories/products-repository";

export class DeleteProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(name: string): Promise<void> {
    const productAlreadyExists = await this.productsRepository.loadByName(name);

    if (!productAlreadyExists) {
      throw new AppError("Product not found", 404);
    }

    await this.productsRepository.delete(name);
  }
}
