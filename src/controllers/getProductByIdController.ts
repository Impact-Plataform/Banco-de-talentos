import { Request, Response } from 'express';

export class getProductByIdController {
	async execute(req: Request<{ id: number }>, res: Response) {

		return res.json({product: req.product});
	}
}