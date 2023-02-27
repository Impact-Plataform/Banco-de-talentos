# API PRODUCTS

## [Summary](#summary)
* [About this application](#about-this-application)
* [Conventional commits ](#conventional-commits)
* [Dependencies](#dependencies)
* [How to run locally](#how-to-run-locally)
   * [Using docker](#using-docker)
   * [Without docker](#without-docker) 
* [Routes](#routes)
* [Routes docs at Swagger](#routes-docs-at-swagger)
* [Architecture](#architecture)

## [[About this application](#summary)]
This is a simple API made with node, express and mongodb. You can create, update, read and delete products. It returns too currencies in EUR and USD.

## [Conventional commits](#summary)
  This application uses conventional commits to standardize commit messages. You can know more [here](https://www.conventionalcommits.org/en/v1.0.0/)

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

* [Mongod](https://www.mongodb.com/what-is-mongodb): MongoDB is a NoSQL document database. I used him because it is easy to use and has a good performance.

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