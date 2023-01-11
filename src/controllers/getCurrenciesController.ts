import { Request, Response } from 'express';
import { cache } from '../index';

export class GetCurenciesController {
	async execute (req: Request, res: Response) {
		const currencies = await cache.find();
  
		return res.json({currencies});
	}
}