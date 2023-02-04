import { prisma } from "../../../../prisma";
import { AppError } from "../../../errors/AppError";

export class DeleteProductUseCase {
  async execute(id: number) {
    await prisma.products.delete({ where: { id } });
  }
}
