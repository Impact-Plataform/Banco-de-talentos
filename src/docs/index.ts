import { productPath } from "./paths/product-path";
import { productIdPath } from "./paths/product-id-path";
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
  },
  schemas: {
    product: productSchema,
  },
};
