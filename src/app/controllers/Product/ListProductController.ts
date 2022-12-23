import { Request, Response } from "express";
import Product from "../../models/Product.model";
import ListProductService from "../../services/Product/ListProductService";
import QuotationService from "../../services/Product/QuotationService";
const productService = new ListProductService();
class ListProductController {
  async list(req: Request, res: Response) {
    try {
      const {
        name,
        price,
        createdBefore,
        createdAfter,
        updatedBefore,
        updatedAfter,
        sort,
      } = req.query as any;

      const page: number = Number(req.query.page as any) || 1;
      const limit: number = Number(req.query.limit as any) || 25;

      const products: Product[] = await productService.list(
        name,
        price,
        createdBefore,
        createdAfter,
        updatedBefore,
        updatedAfter,
        sort,
        page,
        limit
      );

      const quotedProducts: Product[] =
        await QuotationService.transformQuotation(products);

      return res.status(200).json(quotedProducts);
    } catch (error: any) {
      return res.status(401).json({ error: error.message });
    }
  }
}

export default ListProductController;
