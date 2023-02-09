import express from "express";
import { middleWares } from "./middlewares";
import setupRoutes from "./routes";

const app = express();
middleWares(app);
setupRoutes(app);
export default app;
