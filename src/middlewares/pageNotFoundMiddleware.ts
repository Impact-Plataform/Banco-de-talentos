import { NextFunction, Request, Response } from 'express';

export const pageNotFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
	return res.status(404).send('Sorry cant find that!');
};