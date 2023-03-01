# API PRODUCTS

## [Summary](#summary)
* [About this application](#about-this-application)
* [Conventional commits ](#conventional-commits)
* [Dependencies](#dependencies)
* [How to run locally](#how-to-run-locally)
   * [Using docker](#using-docker)
* [File system routing](#file-system-routing)
* [Routes](#routes)
  * [Base URL](#base-url)
  * [Product properties](#product-properties)
  * [POST -> /Products](#post-products)
  * [GET -> /Products](#get-products)
  * [GET -> /Products/:id](#get-product)
  * [PUT -> /Products/:id](#put-product)
  * [DELETE -> /Products/:id](#delete-product)
  * [GET -> /Currency](#get-currency)
  * [GET -> /Currency/:symbol](#get-currencies)

* [Routes docs at Swagger](#routes-docs-at-swagger)
* [Architecture](#architecture)

---

## [About this application](#summary)
This is a simple REST API made with node, express and mongodb. You can create, update, read and delete products. It returns too currencies in EUR and USD. This API has been made using node, typescript, clean architecure, SOLID, TDD, file system routing and too much more.

---

## [Conventional commits](#summary)
  This application uses conventional commits to standardize commit messages. You can know more [here](https://www.conventionalcommits.org/en/v1.0.0/)

  ---

## [Dependencies](#summary)
```JSON
"devDependencies": {
    "@shelf/jest-mongodb": "^4.1.6",
    "@types/express": "^4.17.17",
    "@types/jest": "^29.4.0",
    "@types/supertest": "^2.0.12",
    "@types/uuid": "^9.0.0",
    "@typescript-eslint/eslint-plugin": "^5.50.0",
    "eslint": "^8.33.0",
    "eslint-config-standard-with-typescript": "^34.0.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-n": "^15.6.1",
    "eslint-plugin-promise": "^6.1.1",
    "husky": "^8.0.3",
    "jest": "^29.4.1",
    "supertest": "^6.3.3",
    "ts-jest": "^29.0.5",
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.9.5"
  },
  "dependencies": {
    "axios": "^1.3.3",
    "express": "^4.18.2",
    "mongodb": "^5.0.1",
    "or": "^0.2.0",
    "redis": "^4.6.4"
  }
```
### Javascript Runtime
* [Node](https://nodejs.org/en/about/): asynchronous event-driven JavaScript runtime. Version used is 16.14.2

### Javascript superset

* [Typescript](https://www.typescriptlang.org/docs/): TypeScript is a syntactic superset of JavaScript which adds static typing. 

### Server side: 

* [Express](https://expressjs.com/): Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### Database

* [Mongodb](https://www.mongodb.com/what-is-mongodb): MongoDB is a NoSQL document database. I used him because it is easy to use and has a good performance.
'
### Cache 

* [Redis](https://redis.io/docs/about/): Redis is an open source (BSD licensed), in-memory data structure store used as a database, cache, message broker, and streaming engine..I used Redis to cache.

### API Request

* [Axios](https://axios-http.com/docs/intro): Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests. I used to make requests in Currency API.

### Git Hooks

* [Husky](https://typicode.github.io/husky/#/): Husky improves your commits, you can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks. I use to run tests before commits.

### Testing

* [Jest](https://jestjs.io/pt-BR/): Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

* [Supertest](https://openbase.com/js/supertest/documentation): The motivation with this module is to provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent. I used to test API routes.

### Node tools
* [Ts-node-dev](https://www.npmjs.com/package/ts-node-dev): It restarts target node process when any of required files changes (as standard node-dev) but shares Typescript compilation process between restarts. 

---

## [How to run locally](#summary)

### [Using docker](#summary)

1. First you need to clone or fork this repository
2. You need have docker installed in your machine.
3. Run ```docker build -t node_backend .```
  * If you change "node_backend" name, you need to change this name at docker-compose file too.  
4. run ```docker compose up -d```
  * "-d" (or --detach) is optional, using it means that docker container will run in the background of your terminal.
  * After running this command, you will have aplication running in your machine at port 3000, mongodb at port 27017 and redis at port 6379.

5. If you do not have docker in your computer, you can make these steps using [codespaces](https://docs.github.com/en/codespaces) or [gitpod](https://www.gitpod.io/screencasts/getting-started-with-gitpod).

---


## [File system routing](#summary) 
* In this applicaiton i used file system routing strategy.
* Configs to make it are in the file ```products-api/src/main/config/routes.ts```.
  * I used: readDirSync, join and dynamic imports from nodejs.
* All routes are in the folder ```products-api/src/main/routes```. 
* I used because it becomes easy and simple to make a new route.  

---

## [Routes](#summary)
### Base URL
Base URL is ```localhost:3000``` in your machine. 

### Product properties

```JSON
{
  "_id": "63fd2d4e1ed729e1ba09e3bd", // this is an id generated by mongodb
  "name": "product name", // it should be a string
  "price": 12, // it should be a Number
  "description": "product description", // it should be a string
  "id": "e4fb7c0c-e441-4a8a-8b11-7e7143b8dd88" // this is an id generated by node.js
}
```

<h3 id="post-products">POST -> /Products</h3>
* You need to send a request body with these properties:

```JSON
{
  "name": "product", // String
  "price": 2000, // Number
  "description": "product description" // String
}
```

* You cannot create a product with a existing name. If you try, it will return a **status code 400** and a body with this message:
```JSON
"already exists a product with this name"
```
* If you create a product with correct properties and an nonexisitng name, it will return a **status code 200** and a body with all informations you send and a id and mongodb id(_id). Example:

You create a product with properties: "name":"nonexisting name", "price": 8, "description":"product description".

it returns: 
```JSON
{
    "name": "nonexisting name",
    "price": 8,
    "description": "product description",
    "id": "870b3276-f38f-435c-928f-1cceb2507eb1",
    "_id": "63fd35131ed729e1ba09e3c0"
}
```


<h3 id="get-products">GET -> /Products</h3>
It will return a **status code 200** and body returns an array of products. These products will have Product properties.
Example: 

```JSON
[
  {
    "_id":"63fd2d4e1ed729e1ba09e3bd",
    "name":"product",
    "price":123, 
    "description":"description",
    "id":"e4fb7c0c-e441-4a8a-8b11-7e7143b8dd88"
  },
  {
  "_id":"63fd2d5d1ed729e1ba09e3be",
  "name":"product 2",
  "price":123,
  "description":"description",
  "id":"f0642985-8cfb-4afd-8d12-4f156539c784"
  },
  {
  "_id":"63fd2f5b1ed729e1ba09e3bf",
  "name":"best product",
  "price":12,
  "description":"description",
  "id":"f3e90d4c-3b7f-4af3-88f2-1c25693c49d3"
  }
]
```

<h3 id="get-product">Get -> /Products/:id</h3>

* If you put an existent id, it will return a **status code 200** and in body it will return a product with this id and prices in USD and EUR.
Example:
```JSON
{
    "_id": "63fd2f5b1ed729e1ba09e3bf",
    "name": "best product",
    "price": 12,
    "description": "description",
    "id": "f3e90d4c-3b7f-4af3-88f2-1c25693c49d3",
    "priceInUSD": "2.31",
    "priceInEUR": "2.17"
}
```

* If you put a nonexistent id, it will return a **status code 400** and body with message:
```JSON
"product not found"
```

<h3 id="put-product">PUT -> /Products/:id</h3>
* We will use this product as example.

```JSON
{
   "_id": "63fd2f5b1ed729e1ba09e3bf",
    "name": "best product",
    "price": 12,
    "description": "description",
    "id": "f3e90d4c-3b7f-4af3-88f2-1c25693c49d3"
}
```
1. With PUT method you can edit your product. You are enabled to edit: name, price and description.
2. In request body you do not need to fill with all enable props, you can put just price, or name, or description.
3. You cannot change your product name to a name of a already existing product.

* If everything works out fine, it will return a **status code 200** and a body with product 
updated.

Example:

URL: ```localhost:3000/Products/f3e90d4c-3b7f-4af3-88f2-1c25693c49d3```

request body: 
```JSON
{
  "price": 0.5
}
```

response body: 
```JSON
{
  "_id": "63fd2f5b1ed729e1ba09e3bf",
  "name": "best product",
  "price": 0.5,
  "description": "description",
  "id": "f3e90d4c-3b7f-4af3-88f2-1c25693c49d3"
}
```

* If you make any of the mentioned mistakes, it will return a **status code 400** and a body with message: ``` "Product not foud or you named a existent name" ```

<h3 id="delete-product">DELETE -> /Products/:id</h3>

1. In this API DELETE method is very easy, you just need product id.
2. You pass it as a param after ```"/Products/<here>"```

3. If you pass an id of an existing product, it will delete him. It will return a **status code 200** and body with message: ```"Product deleted successfully"```
4. If you pass an unexisting product id, it will return a **status code 400** and a body with message: ```"Does not exists a product with this id"```

---

<h3 id="get-currency">GET -> /Currency</h3>

* This route returns an array with all Currencies used (USD and EUR).
* <p id="currency-props">Each currency has properties:</p> 

```JSON
  {
    "code": "USD", // A string with currency code name.
    "codein": "BRL", // all currencies have a 'codein' BRL because it is converted to BRL
    "name": "Dólar Americano/Real Brasileiro", 
    "high": "5.2426" // high currency value
  }
```  

<h3 id="get-currencies">GET -> /Currency/:symbol</h3>

* It returns a currency specified by symbol param.
* If you put an unexisting currency it will return a **status code 400** and body with message: 
```"Currency not found"``` 
* If you put a existing currency, it will return a **status code 200** and body returns a currency with [props](#currency-props) .


## [Routes docs at Swagger](#summary)

  You can access Swagger docs in the endpoint **"/docs"** when application run.



## [Architecture](#summary)

 * I choose to implement [clean architecture](https://www.c-sharpcorner.com/article/what-is-clean-architecture/) in this simple API REST, i use [SOLID](#https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design) and [TDD](https://www.martinfowler.com/bliki/TestDrivenDevelopment.html). 
 * It is organized by layers.
 * I choose because it is a good way to practice, it do not depends on frameworks, databases or any external services. I can easily change my database, node.js and any other dependency, that is, it is a system very independent and becomes testable. 
 * Not just that, but my system is not coupled and very cohesive.

 ### Entities layer:
 * Entities layer is responsible by Enterprise business rules. In case of this API, until now we have 2 Entities: Product and Currency.
  * Ex: Products have properties: name, price and description.

 ### Repositories 
 * Repositories layer is the one responsible by database interfaces, and database itself. All Databases classes implement an interface. 
 * This way, We can create different classes that use different databases, but all implements same interface.  
 
 ### Services
 * In this layer are external services.
 * I made API requests to an external API using [Axios](https://axios-http.com/docs/intro).

 ### Use cases
 * Use cases layer is reponsible to implement application bussines rules.
  * Ex: Products can not be created if already exists other one with same name.
 * Receive services by constructor, but is just a signature, so i can use any class wich follows this signature ([LCP](https://stackify.com/solid-design-liskov-substitution-principle/)), and my class will be not coupled to other classes, just the coupled to an abstraction ([DIV](https://www.geeksforgeeks.org/dependecy-inversion-principle-solid/)), it dependes just of a signature.

    * Ex: ProductsUseCase depends on an interface IProductRepository. I have two differents implementations of this repository. MongodbProductsRepository and inMemoryProductsRepo. 
    
    When instantiate ProductsUseCase i can pass in my contructor an instantiation of MongodbProductsRepository or inMemoryProductsRepo.
  
    Don't matter wich one i use, it will not change my class ProductsUseCase functioning. 

### Controllers
* Controllers layer is responsible to intermediate the communication with external world. 
* This is a REST API, that is, it uses http requests and responses.
* So the communication with application and external world is through by HTTP.
* As controller just intermediate communication, it receives by param http request body(if it is needed), works in **business application methods** and return a http response.
* Busines application method are from use cases.
  * controller receives use cases by param. it follows same principles mentioned in the use cases layer.

### Main 
* This is the layer wich contains the communication between external world and application itself. In this one, we use external frameworks. 
* In the case of this API, i used express.





