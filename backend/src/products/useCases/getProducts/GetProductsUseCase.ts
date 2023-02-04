import { prisma } from "../../../../prisma";

export class GetProductsUseCase {
  async execute() {
    const products = await prisma.products.findMany({});

    return products;
  }
}
