## Objetivo

Desenvolver uma API REST que execute as seguintes operações nas rotas `Products` e `Currency`:

- Products:
 - [X] GET, POST, PATCH, DELETE
- Currency: 
 - [X] GET

A rota `Currency` tem seus dados recebidos através da requisição a API [Awesome API](https://economia.awesomeapi.com.br/all).

## Tecnologias

- [X] Javascript(ES6)
- [X] Node.JS 18.x LTS
- [X] npm
- [X] Express
- [X] Nodemon
- [X] Dotenv
- [X] Mongoose
- [X] Axios
- [X] node-cache
- [X] supertest
- [X] CORS
- [X] Jest
- [X] Swagger-UI-Express
- [X] Insomnia/Postman 

## Preparando o ambiente

Primeiro, deve-se clonar este repositório a partir do terminal ou da interface de um editor de código com o comando abaixo:

```
https://github.com/cxavier6/Banco-de-talentos.git
```
Acessar a pasta da aplicação na branch `camila-reis-backend`

```
cd backend
```
Instalar as dependências necessárias para criar pasta node_modules

```
npm install
```

## Iniciar a aplicação
 
 Para iniciar a aplicação através do terminal, utilize o comando abaixo:
 
 ```
 npm start
 ```
 
 Para iniciar a aplicação em ambiente de desenvolvimento, utilize o seguinte comando:

```
 npm run dev
 ```
A seguinte mensagem aparecerá no terminal após a inicialização:
 
 ![image](https://user-images.githubusercontent.com/79461028/213547291-ce08f9c8-9b9f-472a-ad3a-dd5f42da716b.png)


## Dependências
As dependências necessárias instaladas para este projeto estão listadas abaixo e podem ser visualizadas no arquivo package.json.
 
 ```javascript
 "dependencies": {
    "axios": "^1.2.2",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "mongoose": "^6.8.3",
    "node-cache": "^5.1.2",
    "swagger-ui-express": "^4.6.0"
  }
 ```
 
 ### Dependências de desenvolvimento
 
 As dependências instaladas para o ambiente de desenvolvimento.
 
 ```javascript
 "devDependencies": {
    "jest": "^29.3.1",
    "nodemon": "^2.0.20",
    "supertest": "^6.3.3"
  }
 ```
 
 ## Rotas
 
A partir da URL base `http://localhost:4000` pode-se executar as operações CRUD(Create, Read, Update e Delete) com os métodos HTTP: POST, GET, PATCH e DELETE.
 
 #### Retorna todos os produtos cadastrados

```http
  GET /Products
```

#### Retorna um produto a partir do ID

```http
  GET /Products/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do produto que você quer buscar.|

#### Atualiza um produto a partir do ID

```http
  PATCH /Products/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do produto que você quer atualizar.|

Por se tratar do método PATCH, incluir no corpo da requisição apenas o campo que se quer
atualizar. Exemplo:

Para atualizar o campo `name` incluir apenas o referido campo e o nome atualizado:
```json
{
    "name": "Nome Atualizado"
}
```
#### Deleta um produto a partir do ID

```http
  DELETE /Products/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do produto que você quer deletar.|

#### Retorna todas as moedas cadastradas

```http
  GET /Currency
```
#### Retorna uma moeda a partir do símbolo

```http
  GET /Currency/{symbol}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `symbol`      | `string` | **Obrigatório**. O símbolo do produto que você quer buscar.|

Exemplo: USD, EUR e etc.

Para mais informações sobre as rotas, consultar swagger da API na seguinte rota:

```http
  /api-docs
```
 
<i>Caso aconteça algum erro em alguma das requisições, uma mensagam de `ERRO` será exibida com o tipo de erro apresentado</i>.

Para derrubar o servidor e deixar o terminal livre novamente execute o comando `CTRL + C`, e caso seja necessário digite `S` para confirmar a operação.

![image](https://user-images.githubusercontent.com/79461028/182672924-fb76aac3-d477-45a3-b3c9-2e444e38bb75.png)

## Testes unitários

A partir do framework Jest e o módulo supertest utilizados como dependências de desenvolvimento nesta aplicação, testes unitários podem ser realizados para testar as rotas de Products.
Os testes encontrados na pasta `test` podem ser executados no terminal com o seguinte comando:

```
npm test
```
Caso todos os testes sejam bem-sucedidos, a seguinte mensagem deve aparecer no terminal:

![image](https://user-images.githubusercontent.com/79461028/213549039-bfdbef4a-d673-4535-9aad-db338d26d8dc.png)

