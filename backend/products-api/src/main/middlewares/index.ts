import { Express } from "express";
import { bodyParser } from "./bodyParser";
import { cors } from "./cors";
import { contentType } from "./contentType";

export const middleWares = (app: Express): void => {
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);
};
