# Impact Plataform - Programa Jedi

Welcome to my project! This challenge is intended by Impact Plataform to evaluate me as a Back-end developer.

This API allows you to manage products and retrieve current currency exchange rates. It includes endpoints for creating, reading, updating, and deleting products, as well as for retrieving current exchange rates for various currencies. Please see the API documentation (/api-docs) for more details on the structure and usage of these endpoints.

## [API Link](https://banco-de-talentos-production.up.railway.app/)

## Running this project locally

```bash
# with yarn
git clone git@github.com:brunonasc74/Banco-de-talentos.git
cd .\Banco-de-talentos\backend
git checkout bruno-nascimento-backend
yarn
yarn start

# with npm
git clone git@github.com:brunonasc74/Banco-de-talentos.git
cd .\Banco-de-talentos\backend
git checkout bruno-nascimento-backend
npm install
npm start
```

```bash
# Server will run on port 4000
http://localhost:4000
```

## Swagger documentation

```bash
# For more information about the API follow this link
https://jedi-backend-challenge-production.up.railway.app/api-docs/
# Or locally
http://localhost:4000/api-docs
```

## Schemas

### <strong>Product</strong>

| Method     | Route                   | Description                   |
| ---------- | ----------------------- | ----------------------------- |
| **GET**    | `/Products`             | Return all products           |
| **POST**   | `/Products`             | Create a new product          |
| **GET**    | `/Products/`<strong>:id | Return selected product by id |
| **PUT**    | `/Products/`<strong>:id | Update selected product by id |
| **DELETE** | `/Products/`<strong>:id | Delete selected product by id |

### <strong>Currency</strong>

| Method  | Route                       | Description              |
| ------- | --------------------------- | ------------------------ |
| **GET** | `/Currency`                 | Return all currencies    |
| **GET** | `/Currency/`<strong>:symbol | Return selected currency |

<hr>
  
## Obrigado!
