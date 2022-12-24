const SequelizeMock = require("sequelize-mock");
const DBConnectionMock = new SequelizeMock({ dialect: "mysql" });

const ProductMock = DBConnectionMock.define(
  "Product",
  {
    id: "1",
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
    // autoQueryFallback: false,
  }
);
ProductMock.$queryInterface.$useHandler(function (
  query: string,
  queryOptions: { where: { id: string } }[],
  done: any
) {
  if (query === "findOne") {
    if (queryOptions[0].where.id === "42") {
      return ProductMock.build({ id: "42" });
    } else {
      return null;
    }
  }
});

export default ProductMock;
