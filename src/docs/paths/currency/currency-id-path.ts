export const currencyIdPath = {
  get: {
    tags: ["Currency"],
    summary: "Mostra a cotação de uma moeda",
    parameters: [
      {
        name: "symbol",
        in: "path",
        description: "",
        required: true,
        style: "simple",
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        description: "Sucesso",
        content: {
          "application/json": {
            schema: {
              $ref: "#/schemas/currency",
            },
            example: {
              code: "USD",
              codein: "BRLT",
              name: "Dólar Americano/Real Brasileiro Turismo",
              high: "5.41",
              low: "5.145",
              varBid: "-0.02",
              pctChange: "-0.38",
              bid: "5.03",
              ask: "5.34",
              timestamp: "1671823320",
              create_date: "2022-12-23 16:22:00",
            },
          },
        },
      },
      404: {
        description: "Moeda não encontrada",
        content: {
          "application/json": {
            example: {
              error: "cotação não encontrada, verifique a ortografia",
            },
          },
        },
      },
    },
  },
};
