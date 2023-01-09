import { describe, expect, it, vi } from 'vitest';
const request = require('supertest');

process.env.PORT = 0;
const app = require('../index');
const db = require('../models');

describe('ProductController', () => {
	describe('GET /Products', () => {
		it('should return a list of all products', async () => {
			const products = [];

			db.Product.findAll = vi.fn(() => products);

			const res = await request(app).get('/Products');

			expect(res.body).toMatchObject(products);
		});

		it('should return an appropriate error message and status code if there is an issue with the database query', async () => {
			db.Product.findAll = vi.fn(() => {
				throw new Error('Error accessing the database');
			});

			const res = await request(app).get('/Products');

			expect(res.statusCode).toBe(400);
			expect(res.text).toBe('Error accessing the database');
		});
	});
});
