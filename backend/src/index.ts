import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_request, response) => {
  return response.json({ message: 'hello world' });
});

export { app };
