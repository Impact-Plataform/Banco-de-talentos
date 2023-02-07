import { prisma } from "../../../../prisma";
import { UpdateProductDTO } from "../../DTO/updateProductDTO";

export class UpdateProductUseCase {
  async execute({
    id,
    description,
    title,
    category,
    brlPrice,
  }: UpdateProductDTO) {
    const product = await prisma.products.update({
      where: { id },
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
