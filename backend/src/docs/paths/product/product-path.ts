import { productParamsSchema } from "../../schemas/product-params-schema";
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
            example: {
              id: "1",
              name: "Produto 1",
              price: "12.00",
              createdAt: "2022-12-23T15:06:57.000Z",
              updatedAt: "2022-12-23T15:06:57.000Z",
              priceUSD: 2.39,
              priceEUR: 2.19,
            },
          },
        },
      },
      401: {
        description:
          "Requisição inválida, se a requisição estiver com query é necessário verificar se estão corretamente preenchidas",
      },
    },
  },
  post: {
    tags: ["Product"],
    summary: "Cria um produto",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/schemas/product",
          },
          example: {
            name: "Produto 1",
            price: "12.00",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Sucesso",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/product",
            },
            example: {
              id: "1",
              name: "Produto 1",
              price: "12.00",
              createdAt: "2022-12-23T15:06:57.000Z",
              updatedAt: "2022-12-23T15:06:57.000Z",
            },
          },
        },
      },
      400: {
        description:
          "Requisição inválida, nome e preço do produto são obrigátorios",
      },
    },
  },
};
