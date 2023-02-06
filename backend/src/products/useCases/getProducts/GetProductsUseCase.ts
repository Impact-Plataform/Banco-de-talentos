import { prisma } from "../../../../prisma";
import { quoteProductPrice } from "../../../utils/quoteProductPrice";

export class GetProductsUseCase {
  async execute() {
    const products = await prisma.products.findMany({});

    return await Promise.all(
      products.map(async (product) => {
        const { eurPrice, usdPrice } = await quoteProductPrice(
          product.brlPrice
        );
        return { ...product, eurPrice, usdPrice };
      })
    );
  }
}
