require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
import express, { Express } from "express";
import routes from "./routes";
import db from "./database/index";
import swaggerUi from "swagger-ui-express";
const cors = require("cors");

class App {
  declare server: Express;
  constructor() {
    this.server = express();
    this.initializeDB();
    this.middlewares();
    this.document();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }
  routes() {
    this.server.use(routes);
  }
  document() {
    this.server.use("/docs", swaggerUi.serve);
  }
  async initializeDB() {
    try {
      await db.authenticate();
      console.log("Conexão com o banco de dados realizada com sucesso");
    } catch (err: any) {
      console.log("Não foi possível conectar ao banco de dados: ", err.message);
    }
  }
}

export default new App().server;
