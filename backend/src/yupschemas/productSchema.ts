import { Product } from '@prisma/client';
import yup from '../config/yup';

export const validateBody: yup.SchemaOf<Omit<Product, 'id'>> = yup.object().shape({
	amount: yup.number().required().positive().integer().typeError('amount deve ser um tipo de `number`'),
	name: yup.string().required().min(3),
	value: yup.number().required().positive().typeError('value deve ser um tipo de `number`')
});