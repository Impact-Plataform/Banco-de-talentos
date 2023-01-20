import { expect, it, describe } from 'vitest';
import { ValidationError } from 'yup';
import { validateBody } from './productSchema';

class ReqBody{
	constructor(public name: string | number, public amount: number | string, public value: number | string){}
}

describe('validate the body of the request to register or update the product.', () => {
	it('Should be able to validate fields', async () => {

		const reqBody = new ReqBody('Mouse', 2, 20);
	
		const validation = await validateBody.validate(reqBody);
		
		expect(validation).toBe(reqBody);
	});

	it('Should not to be able to validate without name field', async() => {
		const reqBody = {
			amount: 2,
			value: 20
		};

		try {
			await validateBody.validate(reqBody);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'name é um campo obrigatório');
		}
	});

	it('Should not to be able to validate without amount field', async() => {
		const reqBody = {
			name: 'Mouse',
			value: 20
		};

		try {
			await validateBody.validate(reqBody);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'amount é um campo obrigatório');
		}
	});

	it('Should not to be able to validate without value field', async() => {
		const reqBody = {
			name: 'Mouse',
			amount: 2
		};

		try {
			await validateBody.validate(reqBody);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'value é um campo obrigatório');
		}
	});

	it('Should be able to return an error when the "value" value is not a number', async() => {
		
		const reqBody = new ReqBody('Mouse', 2, 'abc');

		try {
			await validateBody.validate(reqBody);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'value deve ser um tipo de `number`');
		}
	});

	it('Should be able to return an error when the "value" value is not a positive number', async() => {
		
		const reqBody = new ReqBody('Mouse', 2, -1);

		try {
			await validateBody.validate(reqBody);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'value deve ser um número positivo');
		}
	});

	it('Should be able to return an error when the "name" value length is less than 3', async() => {

		const reqBody = new ReqBody('Mo', 2, 2);

		try {
			await validateBody.validate(reqBody);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'name deve ser pelo menos 3 caracteres');
		}
	});

	it('Should be able to return an error when the "amount" value is not a number', async() => {

		const reqBody = new ReqBody('Mouse', 'abc', 20);

		try {
			await validateBody.validate(reqBody);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'amount deve ser um tipo de `number`');
		}
	});

	it('Should be able to return an error when the "amount" value is not a positive number', async() => {

		const reqBody = new ReqBody('Mouse', -2, 20);

		try {
			await validateBody.validate(reqBody);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'amount deve ser um número positivo');
		}
	});

	it('Should be able to return an error when the "amount" value is not a integer', async() => {

		const reqBody = new ReqBody('Mouse', 1.2, 20);

		try {
			await validateBody.validate(reqBody);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'amount deve ser um inteiro');
		}
	});
});