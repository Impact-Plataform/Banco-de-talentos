import express from 'express';
import { errorMiddleware } from './middlewares/errorMiddleware';
import { productRouter } from './router/productRouter';

const app = express();

app.use(express.json());

app.use('/Products', productRouter);

app.use(errorMiddleware);

app.listen(3000, () => { console.log('Server is running on http://localhost:3000'); });