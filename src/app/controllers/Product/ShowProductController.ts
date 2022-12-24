import { Request, Response } from "express";
import Product from "../../models/Product.model";
import QuotationService from "../../services/Quotation/QuotationService";
import ShowProductService from "../../services/Product/ShowProductService";
const showProductService = new ShowProductService();
class ShowProductController {
  async show(req: Request, res: Response) {
    try {
      const id: string = req.params.id as any;

      const product: Product | string = await showProductService.show(id);
      if (typeof product === "string")
        return res.status(404).json({ error: "Produto não encontrado" });

      const quotedProduct: Product =
        await QuotationService.transformQuotationSingle(product);

      return res.status(200).json(quotedProduct);
    } catch (error: any) {
      return res.status(401).json({ error: error.message });
    }
  }
}

export default ShowProductController;
