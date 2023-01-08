export const productParamsSchema = [
  {
    in: "query",
    name: "name",
    schema: {
      type: "string",
    },
  },
  {
    in: "query",
    name: "price",
    schema: {
      type: "string",
    },
  },
  {
    in: "query",
    name: "createdBefore",
    schema: {
      type: "date",
    },
  },
  {
    in: "query",
    name: "createdAfter",
    schema: {
      type: "date",
    },
  },
  {
    in: "query",
    name: "updatedBefore",
    schema: {
      type: "date",
    },
  },
  {
    in: "query",
    name: "updatedAfter",
    schema: {
      type: "date",
    },
  },
  {
    in: "query",
    name: "sort",
    schema: {
      type: "string",
    },
  },
  {
    in: "query",
    name: "page",
    schema: {
      type: "int32",
    },
  },
  {
    in: "query",
    name: "limit",
    schema: {
      type: "int32",
    },
  },
];
