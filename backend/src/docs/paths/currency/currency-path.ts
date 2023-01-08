export const currencyPath = {
  get: {
    tags: ["Currency"],
    summary: "Obtém a lista de cotação de todas as moedas disponíveis",
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
      401: {
        description: "Requisição inválida",
      },
    },
  },
};
