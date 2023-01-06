import { Request, Response } from "express";
import Product from "../../models/Product.model";
import UpdateProductService from "../../services/Product/UpdateProductService";
const updateProductService = new UpdateProductService();
class UpdateProductController {
  async update(req: Request, res: Response) {
    try {
      const id: string = req.params.id as any;

      const name: string = req.body.name;
      const price: number = req.body.price;

      const product: Product | string = await updateProductService.update(
        id,
        name,
        price
      );
      if (typeof product === "string")
        return res.status(404).json({ error: "Produto não encontrado" });
      return res.status(200).json(product);
    } catch (error: any) {
      return res.status(401).json({ error: error.message });
    }
  }
}

export default UpdateProductController;
