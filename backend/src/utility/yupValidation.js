const yup = require('yup');

const productSchema = yup.object().shape({
	name: yup.string().min(3).max(30).required(),
	description: yup.string().min(3).max(155).required(),
	priceBRL: yup.number().moreThan(0).required()
});

const validateRequest = async (req) => {
	try {
		const validatedData = await productSchema.validate(req.body, {
			abortEarly: false
		});
		return validatedData;
	} catch (validationError) {
		throw validationError;
	}
};

module.exports = {
	validateRequest
};
