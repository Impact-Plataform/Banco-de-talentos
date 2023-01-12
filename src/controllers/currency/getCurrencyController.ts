import { Request, Response } from 'express';

export class GetCurencyController {
	async execute (req: Request<{symbol: string}>, res: Response) {
		
		const currency = req.currency;
  
		return res.json({currency});
	}
}