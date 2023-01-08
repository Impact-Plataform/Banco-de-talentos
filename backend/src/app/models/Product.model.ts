import { Model, Sequelize, DataTypes } from "sequelize";
const databaseConfig = require("../../config/database");
const sequelize = new Sequelize(databaseConfig);

class Product extends Model {
  [key: string]: any;
}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    priceEUR: {
      type: DataTypes.VIRTUAL(DataTypes.DECIMAL(10, 2)),
    },
    priceUSD: {
      type: DataTypes.VIRTUAL(DataTypes.DECIMAL(10, 2)),
    },
  },
  {
    sequelize,
    modelName: "Product",
  }
);

export default Product;
