import { NextFunction, Request, Response } from "express";
import { prisma } from "../../../prisma";
import { AppError } from "../../errors/AppError";
import { CreateProductDTO } from "../../products/DTO/createProductDTO";
import { UpdateProductDTO } from "../../products/DTO/updateProductDTO";

export class ProductsValidation {
  static async handleCreate(
    req: Request<{}, {}, CreateProductDTO>,
    res: Response,
    next: NextFunction
  ) {
    const { title, description, category, price } = req.body;

    try {
      if (!title) throw new AppError("Título é um atributo obrigatório");
      if (typeof title !== "string")
        throw new AppError("Título é um atributo do tipo string");

      if (!description)
        throw new AppError("Descrição é um atributo obrigatório");
      if (typeof description !== "string")
        throw new AppError("Descrição é um atributo do tipo string");

      if (!category) throw new AppError("Categoria é um atributo obrigatório");
      if (typeof category !== "string")
        throw new AppError("Categoria é um atributo do tipo string");

      if (!price) throw new AppError("Preço é um atributo obrigatório");
      if (typeof price !== "number")
        throw new AppError("Preço é um atributo do tipo number");

      next();
    } catch (error) {
      next(error);
    }
  }

  static async handleUpdate(
    req: Request<{ id: string }, {}, UpdateProductDTO>,
    res: Response,
    next: NextFunction
  ) {
    const id = Number(req.params.id);
    const { title, description, category, price } = req.body;

    try {
      const productExists = await prisma.products.findUnique({ where: { id } });
      if (!productExists) throw new AppError("Produto não encontrado");

      if (title && typeof title !== "string")
        throw new AppError("Título é um atributo do tipo string");

      if (description && typeof description !== "string")
        throw new AppError("Descrição é um atributo do tipo string");

      if (category && typeof category !== "string")
        throw new AppError("Categoria é um atributo do tipo string");

      if (price && typeof price !== "number")
        throw new AppError("Preço é um atributo do tipo number");

      next();
    } catch (error) {
      next(error);
    }
  }
}
