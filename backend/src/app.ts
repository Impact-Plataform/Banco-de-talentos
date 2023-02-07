import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./swaggerDoc.json";
import { routes } from "./routes/routes";
import ErrorController from "./middleware/error/ErrorController";

export const app = express();

app
  .use(express.json(), cors())
  .use(routes)
  .use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
  .use(ErrorController.handle);
