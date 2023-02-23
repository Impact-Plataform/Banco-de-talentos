import { Request, Response } from "express";
import { CurrencyController } from "../../controllers/CurrencyController";

export const adaptGetCurrencyBySymbolRoute = (controller: CurrencyController) => {
    return async (req: Request, res: Response) => {
        const {symbol} = req.params
        const getCurrencyBySymbol = await controller.getACurrency(symbol)
        const {statusCode, body} = getCurrencyBySymbol
        res.status(statusCode).json(body)
    }
}