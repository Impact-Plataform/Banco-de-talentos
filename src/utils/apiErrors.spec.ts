import { describe, expect, it } from 'vitest';
import { ApiError, BadRequestError, NotFoundError } from './apiErrors';

describe('Validate erros classes', () => {
	it('Should be able to create a BadRequestError', () => {
		const error = new BadRequestError('BadRequest error');

		expect(error).toBeInstanceOf(ApiError);
		expect(error).toHaveProperty('statusCode', 400);
	});

	it('Should be able to create a NotFoundError', () => {
		const error = new NotFoundError('NotFound error');

		expect(error).toBeInstanceOf(ApiError);
		expect(error).toHaveProperty('statusCode', 404);
	});
});