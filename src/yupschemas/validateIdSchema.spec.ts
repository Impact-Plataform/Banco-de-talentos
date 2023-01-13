import { describe, expect, it } from 'vitest';
import { ValidationError } from 'yup';
import { validateIdtype } from './validateIdSchema';

describe('validate the product ID.', () => {
	it('Should not to be able to validate without id field', async () => {
		const productId = {};

		try {
			await validateIdtype.validate(productId);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'id é um campo obrigatório');
		}
	});

	it('Should be able to return an error when the "id" value is not a number', async() => {

		const productId = {id: 'abc'};

		try {
			await validateIdtype.validate(productId);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'id deve ser um tipo de `number`, Mas o valor final foi: `NaN` (Elenco do valor `\"abc\"`).');
		}
	});

	it('Should be able to return an error when the "id" value is not a positive number', async() => {

		const productId = {id: -1};

		try {
			await validateIdtype.validate(productId);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'id deve ser um número positivo');
		}
	});

	it('Should be able to return an error when the "id" value is not a integer', async() => {

		const productId = {id: 1.6};

		try {
			await validateIdtype.validate(productId);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'id deve ser um inteiro');
		}
	});
});