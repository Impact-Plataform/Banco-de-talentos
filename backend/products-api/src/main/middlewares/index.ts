import { Express } from "express";
import { bodyParser } from "./bodyParser/bodyParser";
import { cors } from "./cors/cors";

export const middleWares = (app: Express): void => {
  app.use(bodyParser);
  app.use(cors)
};
