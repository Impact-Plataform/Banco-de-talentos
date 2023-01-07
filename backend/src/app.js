import express from 'express';
import fs from 'fs';
import https from 'https';
import cors from 'cors';
import router from './controller/Routes.js';
import currencyRoutes from './quotes/routes/CurrencyRoutes.js'
import * as scheduler from "./quotes/service/CacheScheduler.js";
import * as  swaggerUI  from "swagger-ui-express";
import  swaggerJsDoc  from "swagger-jsdoc"
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(currencyRoutes)
scheduler.removeExpiredKeys();

let swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
        title: "Desafio Backend",
        version: "1.0.0"
    },
    servers: [
        {
            url: "http://localhost:3000"
        },
    ],
  },
  apis: [`${path.join(__dirname, "controller/Routes.js")}`],
} 

app.use("/api-doc",
    swaggerUI.serve, 
    swaggerUI.setup(swaggerJsDoc(swaggerSpec)))


app.listen(PORT, () => console.log(`Api rodando rodando na porta ${PORT}`));


https.createServer({
          cert: fs.readFileSync('src/SSL/code.crt'),
          key: fs.readFileSync('src/SSL/code.key')
      }, app).listen(3001, ()=>console.log('Rodando em https'));
      