export const productSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "a id gerada automaticamente",
    },
    name: {
      type: "string",
      description: "o nome do produto",
    },
    price: {
      type: "number",
      format: "currency",
      description: "o preço do produto",
    },
  },
};
