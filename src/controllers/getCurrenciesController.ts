import { Request, Response } from 'express';
import { GenerateCache } from '../utils/nodeCache';

const generatedCache = new GenerateCache();

export class GetCurenciesController {
	async execute (req: Request, res: Response) {
		const currencies = await generatedCache.generate();
  
		return res.json({currencies});
	}
}