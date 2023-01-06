export const currencySchema = {
  type: "object",
  properties: {
    code: {
      type: "string",
      description: "Simbolo da moeda",
    },
    codein: {
      type: "string",
      description: "Moeda remetente para câmbio",
    },
    name: {
      type: "string",
      format: "string",
      description: "nome da moeda para conversão",
    },
    high: {
      type: "string",
      format: "currency",
      description: "maior preço de câmbio registrado nas ultimas 24 horas",
    },
    low: {
      type: "string",
      format: "currency",
      description: "menor preço de câmbio registrado nas ultimas 24 horas",
    },
    varBid: {
      type: "string",
      format: "currency",
      description: "variação do câmbio",
    },
    pctChange: {
      type: "string",
      format: "currency",
      description: "porcentagem de variação da moeda",
    },
    bid: {
      type: "string",
      format: "currency",
      description: "preço de compra da moeda para moeda remetente",
    },
    ask: {
      type: "string",
      format: "currency",
      description: "preço de venda da moeda para moeda remetente",
    },
    timestamp: {
      type: "string",
      format: "currency",
      description: "data em milisegundos da consulta da cotação",
    },
    create_date: {
      type: "string",
      format: "currency",
      description: " data da consulta da cotação",
    },
  },
};
