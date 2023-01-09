const Joi = require('joi');

module.exports = {
	validateProduct: {
		body: Joi.object().keys({
			name: Joi.string().min(3).max(30).required(),
			description: Joi.string().required(),
			priceBRL: Joi.number().positive().required()
		})
	}
};
