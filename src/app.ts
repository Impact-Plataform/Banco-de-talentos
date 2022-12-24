require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
import express, { Express } from "express";
import productRoutes from "./routes/Product.routes";
import currencyRoutes from "./routes/Currency.routes";
import db from "./database/index";
import swaggerUi from "swagger-ui-express";
const cors = require("cors");
import swaggerConfig from "./docs";

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
    this.server.use(currencyRoutes);
    this.server.use(productRoutes);
  }
  document() {
    this.server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));
  }
  async initializeDB() {
    if (process.env.NODE_ENV === "test") {
      return;
    }
    try {
      await db.authenticate();
      console.log("Conexão com o banco de dados realizada com sucesso");
    } catch (err: any) {
      console.log("Não foi possível conectar ao banco de dados: ", err.message);
    }
  }
}

export default new App().server;
