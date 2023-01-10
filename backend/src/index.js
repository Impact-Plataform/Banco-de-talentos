const express = require('express');
const router = require('./router');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.json');

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.get('/', (_, res) => res.redirect('/api-docs'));

router(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));

module.exports = app;
