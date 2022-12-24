import { Iquotation } from "./../../../libs/awesomeApi/quotation.interface";
import QuotationService from "../../services/Quotation/QuotationService";
import { Request, Response } from "express";
class ShowCurrencyController {
  async show(req: Request, res: Response) {
    try {
      const symbol: string = req.params.symbol.toLocaleUpperCase();
      const quotations: Iquotation[] = await QuotationService.getQuotation([
        symbol,
      ]);
      if (!(quotations.length > 0))
        return res
          .status(404)
          .json({ error: "cotação não encontrada, verifique a ortografia" });
      return res.status(200).json(quotations);
    } catch (error: any) {
      return res.status(401).json({ error: error.message });
    }
  }
}

export default ShowCurrencyController;
