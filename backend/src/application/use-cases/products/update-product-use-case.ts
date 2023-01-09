import { AppError } from "../../../shared/errors/app-error";
import { ProductsRepository } from "../../repositories/products-repository";

interface UpdateProductRequest {
  productId: string;
  data: {
    name: string;
    price: number;
    quantity: number;
  };
}

type UpdateProductResponse = void;

export class UpdateProductUseCase {
  constructor(private productsRepository: ProductsRepository) {}

  async execute({ productId, data }: UpdateProductRequest): Promise<UpdateProductResponse> {
    const productAlreadyExists = await this.productsRepository.loadById(productId);

    if (!productAlreadyExists) {
      throw new AppError("Product not found", 404);
    }

    await this.productsRepository.update({ id: productId, data });
  }
}
