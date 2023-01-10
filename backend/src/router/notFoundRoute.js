const { Router } = require('express');
const router = Router();

router.get('*', (req, res) => {
	const apiDocsUrl = `${req.protocol}://${req.get('host')}/api-docs`;
	res.status(404).send({
		status: 404,
		message: `Resource not found, go to /api-docs for more information`,
		apiDocs: `${apiDocsUrl}`
	});
});

module.exports = router;
