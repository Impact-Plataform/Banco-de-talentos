# Impact Plataform - Programa Jedi

Back-end challenge provided by Impact to join its talent pool.

<br>

## Running this project locally

```bash
# with yarn
git clone git@github.com:brunonasc74/Banco-de-talentos.git
cd Banco-de-talentos
yarn
yarn start

# with npm
git clone git@github.com:brunonasc74/Banco-de-talentos.git
cd Banco-de-talentos
npm install
npm start
```

```bash
# Server will run on port 4000
http://localhost:4000
```

<br>

## Swagger documentation

```bash
# For more information about the API follow this link
http://localhost:4000/api-docs
```

<br>

## Schemas

## <strong>Product</strong>

| Method     | Route                   | Description                   |
| ---------- | ----------------------- | ----------------------------- |
| **GET**    | `/Products`             | Return all products           |
| **POST**   | `/Products`             | Create a new product          |
| **GET**    | `/Products/`<strong>:id | Return selected product by id |
| **PUT**    | `/Products/`<strong>:id | Update selected product by id |
| **DELETE** | `/Products/`<strong>:id | Delete selected product by id |

<br>

## <strong>Currency</strong>

| Method  | Route                       | Description              |
| ------- | --------------------------- | ------------------------ |
| **GET** | `/Currency`                 | Return all currencies    |
| **GET** | `/Currency/`<strong>:symbol | Return selected currency |

<br>
<hr>

## Obrigado!
