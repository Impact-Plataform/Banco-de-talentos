import { Request, Response } from 'express';

export const redirect = (req: Request, res: Response) => {
	return res.redirect('/api-doc');
};