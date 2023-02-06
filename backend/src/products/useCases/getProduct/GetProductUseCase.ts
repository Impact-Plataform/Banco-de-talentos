import { prisma } from "../../../../prisma";
import { quoteProductPrice } from "../../../utils/quoteProductPrice";

export class GetProductUseCase {
  async execute(id: number) {
    const product = await prisma.products.findUnique({ where: { id } });
    const { eurPrice, usdPrice } = await quoteProductPrice(product!.brlPrice);
    return { ...product, eurPrice, usdPrice };
  }
}
