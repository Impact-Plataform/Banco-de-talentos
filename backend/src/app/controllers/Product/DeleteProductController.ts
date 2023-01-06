import { Request, Response } from "express";
import Product from "../../models/Product.model";
import DeleteProductService from "../../services/Product/DeleteProductService";
const deleteProductService = new DeleteProductService();
class DeleteProductController {
  async delete(req: Request, res: Response) {
    try {
      const id: string = req.params.id as any;

      const result: {} | string = await deleteProductService.delete(id);
      if (typeof result === "string")
        return res.status(404).json({ error: "Produto não encontrado" });
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(401).json({ error: error.message });
    }
  }
}

export default DeleteProductController;
