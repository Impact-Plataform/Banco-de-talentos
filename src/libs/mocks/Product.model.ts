const SequelizeMock = require("sequelize-mock");
const DBConnectionMock = new SequelizeMock();

const ProductMock = DBConnectionMock.define(
  "Product",
  {
    name: "Product 001",
    price: 500.1,
    priceEUR: null,
    priceUSD: null,
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
