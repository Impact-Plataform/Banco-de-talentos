import express from 'express';
import 'express-async-errors';
import NodeCache from 'node-cache';
import swaggerUi from  'swagger-ui-express';

import { errorMiddleware } from './middlewares/errorMiddleware';
import { pageNotFoundMiddleware } from './middlewares/pageNotFoundMiddleware';
import { currencyRouter } from './router/currencyRouter';
import { productRouter } from './router/productRouter';
import { Cache } from './utils/nodeCache';

import swaggerDocument from  '../swagger.json';

export const myCache = new NodeCache({ stdTTL: 60 });
export const cache = new Cache();

const app = express();

app.use(express.json());

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/Products', productRouter);
app.use('/Currency', currencyRouter);

app.use(pageNotFoundMiddleware);

app.use(errorMiddleware);

app.listen(3000, () => { console.log('Server is running on http://localhost:3000'); });