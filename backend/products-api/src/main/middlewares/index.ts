import { Express } from "express";
import { bodyParser } from "./bodyParser/bodyParser";

export const middleWares = (app: Express): void => {
  app.use(bodyParser);
};
