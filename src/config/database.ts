require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

module.exports = {
  dialect: process.env.DB_DIALECT || "mysql",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,

  storage: "./__tests__/database.sqlite",
  define: {
    timestamp: true, // cria duas colunas: createdAt e updateAt
    underscored: true, // nomeclatura nao camelcase
    underscoredAll: true,
    freezeTableName: true,
  },
};
