import { currencyIdPath } from "./paths/currency/currency-id-path";
import { currencyPath } from "./paths/currency/currency-path";
import { currencySchema } from "./schemas/currency-schema";
import { productPath } from "./paths/product/product-path";
import { productIdPath } from "./paths/product/product-id-path";
import { productSchema } from "./schemas/product-schema";

export default {
  openapi: "3.0.0",
  info: {
    title: "Products API",
    version: "1.0.0",
    description: "Api para obter/criar produtos",
  },
  servers: [
    {
      url: "http://localhost:3030",
    },
  ],
  tags: [
    {
      name: "Product",
    },
  ],
  paths: {
    "/products": productPath,
    "/products/{id}": productIdPath,
    "/currency": currencyPath,
    "/currency/{symbol}": currencyIdPath,
  },
  schemas: {
    product: productSchema,
    currency: currencySchema,
  },
};
