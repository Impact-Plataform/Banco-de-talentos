import { prisma } from "../../../../prisma";
import { CreateProductDTO } from "../../DTO/createProductDTO";

export class CreateProductUseCase {
  async execute({ title, description, brlPrice, category }: CreateProductDTO) {
    const product = await prisma.products.create({
      data: {
        title,
        description,
        category,
        brlPrice,
      },
    });

    return product;
  }
}
