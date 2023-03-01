import express from "express";
import { middleWares } from "./middlewares";
import setupRoutes from "./routes";
import swaggerUi from 'swagger-ui-express';
import swagerFile from '../swaggerDocs/swagger.json';


const app = express();
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swagerFile))
middleWares(app);
setupRoutes(app);
export default app;
