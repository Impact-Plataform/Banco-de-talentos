import express from 'express';
import 'express-async-errors';
import swaggerUi from  'swagger-ui-express';
import cors from 'cors';

import { errorMiddleware } from './middlewares/errorMiddleware';
import { pageNotFoundMiddleware } from './middlewares/pageNotFoundMiddleware';
import { currencyRouter } from './router/currencyRouter';
import { productRouter } from './router/productRouter';

import swaggerDocument from  '../swagger.json';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/Products', productRouter);
app.use('/Currency', currencyRouter);

app.use(pageNotFoundMiddleware);

app.use(errorMiddleware);

app.listen(3000, () => { console.log('Server is running on http://localhost:3000'); });