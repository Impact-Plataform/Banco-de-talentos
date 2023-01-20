import yup from '../config/yup';

export const validateIdtype: yup.SchemaOf<{id: number}> = yup.object().shape({
	id: yup.number().positive().integer().required().typeError('id deve ser um tipo de `number`')
});