import { describe, expect, it } from 'vitest';
import request from 'supertest';

process.env.PORT = 0;
import app from '../index';

describe('CurrencyController', () => {
	describe('GET /Currency', () => {
		it('should return a status code of 200', async () => {
			const res = await request(app).get('/Currency');

			expect(res.statusCode).toBe(200);
		});
	});

	describe('GET /Currency/:id', () => {
		it(`should return a status code of 200 and the Canadian currency (CAD) when passing it's code to the params`, async () => {
			const res = await request(app).get('/Currency/CAD');
			const mockRes = { code: 'CAD' };

			expect(res.statusCode).toBe(200);
			expect(res.body).toMatchObject(mockRes);
		});

		it('should return a status code of 404 on invalid param', async () => {
			const res = await request(app).get('/Currency/INVALID');

			expect(res.statusCode).toBe(404);
			expect(res.body).toEqual({ error: 'route not found' });
		});
	});
});
