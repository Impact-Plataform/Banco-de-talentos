export default {
  openapi: '3.0.3',
  info: {
    title: 'Projeto Jedi',
    version: '1.0.0',
    description: 'Api desenvolvida para o desafio técnico da plataforma impact',
    contact: {
      email: 'lucaasmedeiros7@gmail.com'
    }
  },
  components: {
    schemas: {
      Product: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Auto generated id of the product',
            readOnly: true
          },
          name: {
            type: 'string',
            description: 'Name of product'
          },
          price: {
            type: 'number',
            description: 'Price of the product in BRL'
          },
          quantity: {
            type: 'number',
            description: 'Quantity of the product'
          },
          createdAt: {
            type: 'string',
            description: 'The auto generated time the product was created',
            readOnly: true
          },
          priceUSD: {
            type: 'number',
            description: 'Price of the product in USD',
            readOnly: true
          },
          priceEUR: {
            type: 'number',
            description: 'Price of the product in EUR',
            readOnly: true
          }
        },
        required: ['name', 'price', 'quantity'],
        example: {
          id: '4f29aef2-2dbd-45a6-b083-a186c5f406f6',
          name: 'First Product',
          price: 50.99,
          quantity: 10,
          createdAt: '2023-01-05T09:57:22.084Z',
          priceUSD: 4.456,
          priceEUR: 3.76
        }
      },
      Currency: {
        type: 'object',
        properties: {
          code: {
            type: 'string',
            description: 'Currency code for the currency being discussed',
            readOnly: true
          },
          codein: {
            type: 'string',
            description: 'Currency code for the currency being used as the reference. In this case, it is BRL for Brazilian Real',
            readOnly: true
          },
          name: {
            type: 'string',
            description: 'Name of the currency pair, combining the names of the currency being discussed and the reference currency',
            readOnly: true
          },
          high: {
            type: 'string',
            description: 'Highest value that the currency being discussed has reached in relation to the reference currency',
            readOnly: true
          },
          low: {
            type: 'string',
            description: 'Lowest value that the currency being discussed has reached in relation to the reference currency',
            readOnly: true
          },
          varBid: {
            type: 'string',
            description: 'Change in value of the currency being discussed in relation to the reference currency',
            readOnly: true
          },
          pctChange: {
            type: 'string',
            description: 'Percentage change in value of the currency being discussed in relation to the reference currency',
            readOnly: true
          },
          bid: {
            type: 'string',
            description: 'Current bid price for the currency being discussed in relation to the reference currency',
            readOnly: true
          },
          ask: {
            type: 'string',
            description: 'Current ask price for the currency being discussed in relation to the reference currency',
            readOnly: true
          },
          timestamp: {
            type: 'string',
            description: 'Timestamp representing the time at which this data was collected',
            readOnly: true
          },
          create_date: {
            type: 'string',
            description: 'Date on which this Data was collected',
            readOnly: true
          }
        },
        example: {
          code: 'USD',
          codein: 'BRL',
          name: 'Dólar Americano/Real Brasileiro',
          high: '5.3689',
          low: '5.2186',
          varBid: '-0.125',
          pctChange: '-2.34',
          bid: '5.2254',
          ask: '5.2264',
          timestamp: '1673040579',
          create_date: '2023-01-06 18:29:39'
        }
      }
    }
  },
  paths: {
    '/products': {
      get: {
        tags: ['Products'],
        summary: 'Return all products',
        operationId: 'getAllProducts',
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Product'
                  }
                }
              }
            }
          }
        }
      },
      post: {
        tags: ['Products'],
        summary: 'Create a new product',
        operationId: 'createProduct',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                example: {
                  name: 'New Product',
                  price: 10,
                  quantity: 3
                }
              }
            }
          }
        },
        responses: {
          201: {
            description: 'Successfully created',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    product: {
                      $ref: '#/components/schemas/Product'
                    }
                  }
                }
              }
            }
          },
          400: {
            description: 'Bad request - Check your input',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
                      type: 'string',
                      example: 'Check your input'
                    }
                  }
                }
              }
            }
          },
          409: {
            description: 'Bad request - Product already exists',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
                      type: 'string',
                      example: 'Product already exists'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    '/products/{id}': {
      get: {
        tags: ['Products'],
        summary: 'Return selected product by id',
        operationId: 'getOneProduct',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of the product to retrieve',
            required: true,
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Product'
                }
              }
            }
          },
          404: {
            description: 'Product not found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
                      type: 'string',
                      example: 'Product not found'
                    }
                  }
                }
              }
            }
          }
        }
      },
      put: {
        tags: ['Products'],
        summary: 'Update a product',
        operationId: 'editProduct',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'Update selected product by id',
            required: true,
            schema: {
              type: 'string'
            }
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                example: {
                  name: 'Product ready to be updated',
                  price: 1000,
                  quantity: 15
                }
              }
            }
          }
        },
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: {
                      type: 'string',
                      example: 'Successfuly updated product'
                    }
                  }
                }
              }
            }
          },
          400: {
            description: 'Bad request - Check your input',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
                      type: 'string',
                      example: 'Check your input'
                    }
                  }
                }
              }
            }
          },
          404: {
            description: 'Product not found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
                      type: 'string',
                      example: 'Product not found'
                    }
                  }
                }
              }
            }
          }
        }
      },
      delete: {
        tags: ['Products'],
        summary: 'Delete a product',
        operationId: 'deleteProduct',
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of the product to delete',
            required: true,
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            description: 'Product deleted',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: {
                      type: 'string',
                      example: 'Successfuly deleted product'
                    }
                  }
                }
              }
            }
          },
          400: {
            description: 'Bad request - Check your input',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
                      type: 'string',
                      example: 'Check your input'
                    }
                  }
                }
              }
            }
          },
          404: {
            description: 'Product not found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
                      type: 'string',
                      example: 'Product not found'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    '/currency': {
      get: {
        tags: ['Currency'],
        summary: 'Return all currencies',
        operationId: 'getCurrencies',
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Currency'
                  }
                }
              }
            }
          }
        }
      }
    },
    '/currency/{symbol}': {
      get: {
        tags: ['Currency'],
        summary: 'Return selected currency',
        operationId: 'getSpecificCurrency',
        parameters: [
          {
            name: 'symbol',
            in: 'path',
            description: 'Symbol of the currency to retrieve',
            required: true,
            schema: {
              type: 'string'
            }
          }
        ],
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Currency'
                }
              }
            }
          },
          404: {
            description: 'Currency not found',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: {
                      type: 'string',
                      example: 'Currency with specified symbol was not found'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
