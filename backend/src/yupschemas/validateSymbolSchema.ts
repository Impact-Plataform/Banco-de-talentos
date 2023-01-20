import yup from '../config/yup';

export const validateSymboltype: yup.SchemaOf<{symbol: string}> = yup.object().shape({
	symbol: yup.string().min(3).max(4).required()
});