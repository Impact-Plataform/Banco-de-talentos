import { Sequelize } from "sequelize";

const config = require("../config/database");


import "dotenv/config";

class Database {
  declare connection: Sequelize
  constructor() {
    this.connection = new Sequelize(config);
  }
}

export default new Database().connection;
