import { describe, expect, it } from 'vitest';
import { ValidationError } from 'yup';
import { validateSymboltype } from './validateSymbolSchema';

describe('validate the currency symbol.', () => {
	it('Should not to be able to validate without symbol field', async () => {
		const symbol = {};

		try {
			await validateSymboltype.validate(symbol);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'symbol é um campo obrigatório');
		}
	});

	it('Should be able to return an error when the "symbol" value length is less than 3', async() => {

		const symbol = {symbol: 'ab'};

		try {
			await validateSymboltype.validate(symbol);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'symbol deve ser pelo menos 3 caracteres');
		}
	});

	it('Should be able to return an error when the "symbol" value length is more than 4', async() => {

		const symbol = {symbol: 'abcdf'};

		try {
			await validateSymboltype.validate(symbol);
		} catch (error) {
			expect(error).toBeInstanceOf(ValidationError);
			expect(error).toHaveProperty('message', 'symbol deve ser no máximo 4 caracteres');
		}
	});
});