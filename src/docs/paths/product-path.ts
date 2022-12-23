import { productParamsSchema } from "./../schemas/product-params-schema";
export const productPath = {
  get: {
    tags: ["Product"],
    summary: "Obtém a lista de produtos",
    parameters: productParamsSchema,
    responses: {
      200: {
        description: "Sucesso",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/product",
            },
          },
        },
      },
    },
  },
};
