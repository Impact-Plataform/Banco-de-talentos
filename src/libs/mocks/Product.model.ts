const SequelizeMock = require("sequelize-mock");
const DBConnectionMock = new SequelizeMock();

const ProductMock = DBConnectionMock.define(
  "Product",
  {
    name: "Product 001",
    price: "500.10",
    priceEUR: "900",
    priceUSD: "800",
  },
  {
    instanceMethods: {
      myTestFunc: function () {
        return "Test User";
      },
    },
  }
);

export default ProductMock;
