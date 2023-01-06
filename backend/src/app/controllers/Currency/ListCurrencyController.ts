import { Iquotation } from "./../../../libs/awesomeApi/quotation.interface";
import QuotationService from "../../services/Quotation/QuotationService";
import { Request, Response } from "express";
class ListCurrencyController {
  async list(req: Request, res: Response) {
    try {
      const quotations: Iquotation[] = await QuotationService.getQuotation();
      return res.status(200).json(quotations);
    } catch (error: any) {
      return res.status(401).json({ error: error.message });
    }
  }
}

export default ListCurrencyController;
