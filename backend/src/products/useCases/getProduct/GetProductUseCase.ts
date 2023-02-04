import { prisma } from "../../../../prisma";

export class GetProductUseCase {
  async execute(id: number) {
    const product = await prisma.products.findUnique({ where: { id } });

    return product;
  }
}
