[<img align="right" width="250" height="120" src="https://user-images.githubusercontent.com/23271567/211178068-0ad2732f-9cd1-4f07-81ca-5e8209686070.png">](https://www.plataformatech.com) [**Equipe Plataforma Impact**](https://www.plataformatech.com) <br> <br>
[<img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">](https://twitter.com/PlataformaMpact)  
[<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">](https://www.linkedin.com/company/plataforma-impact) <br> 
[<img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white">](https://www.facebook.com/plataformaimpact)



# Spring Boot "Microservice" Impact Platafrom Project  



This is a sample Java / Maven / Spring Boot (version 3.0.1) application that can be used as a starter for creating a microservice rest.

Read this in other languages: Português-BR

## How to Run [🔝](#spring-boot--microservice--impact-platafrom-project)

This application is packaged as a war which has Tomcat 10.1.4 embedded. 

* Clone this repository 
* Make sure you are using JDK 19.0.1 and Maven 3.x
* You can build the project and run the tests by running ```mvn clean package```
* Once successfully built, you can run the service by one of these methods: ```mvn spring-boot:run```
or can use any IDE.
* Check the stdout or boot_example.log file to make sure no exceptions are thrown

Once the application runs you should see something like this

```
2023-01-06T14:11:32.770-03:00  INFO 13332 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2023-01-06T14:11:32.778-03:00  INFO 13332 --- [  restartedMain] c.i.project.ImpactProjectApplication     : Started ImpactProjectApplication in 4.978 seconds (process running for 5.462)
```

# Indice [🔝](#spring-boot--microservice--impact-platafrom-project)

- [Spring Boot "Microservice" Impact Platafrom Project](#spring-boot--microservice--impact-platafrom-project-)
   - [How to Run](#how-to-run-)
     - [About the Service](#about-the-service-)
       - [Get endpoints, documentation configurations, etc.](#get-endpoints-documentation-configurations-etc-)
       - [Create a product resource](#create-a-product-resource-)
       - [list of products](#list-of-products-)
       - [By ID with UUID](#by-id-with-uuid-)
       - [Update a product resource](#update-a-product-resource-)
       - [Delete a product resource](#delete-a-product-resource-)
       - [Documentation Swagger](#to-view-swagger-2-api-docs-) 
   - [About Spring Boot](#about-spring-boot-)
   - [Running the project with MySQL](#running-the-project-with-mysql-)

## About the Service [🔝](#spring-boot--microservice--impact-platafrom-project)

The service is just a simple products review REST service, that consumes another api of currencies and converts the price of 
the product at runtime for the two currencies (see more) https://shorturl.at/jxzNP (USD / EUR) for this it was necessary to apply dependencies that work synchronously, 
updating the price of the product in real the medicine that the price of purchase of other currencies are changed; using the concept of webflux. 
where some programming languages like javascript, use a lot in your day to day. It uses an in-memory database (H2) to store the data. You can 
also do with a relational database like MySQL or PostgreSQL. If your database connection properties work, you can call some 
REST endpoints defined in ```com.impact.project.controller.ProductController``` on **port 8080**. 



You can use this sample service to understand the conventions and configurations that allow you to create a DB-backed RESTful service. Once you understand and get comfortable with the sample app you can add your own services following the same patterns as the sample service.
 
Here is what this little application demonstrates: 

* Full integration with the latest **Spring** Framework: inversion of control, dependency injection, etc.
* Packaging as a single war with embedded container (tomcat 9.0.34): No need to install a container separately on the host just run using the ``mvn spring-boot:run`` command
* Endpoints automatically on a configured port. 
* Writing a RESTful service using annotation:  JSON request / response; 
* Exception mapping from application exceptions to the right HTTP response with exception details in the body
* *Spring Data* Integration with JPA/Hibernate with just a few lines of configuration and familiar annotations. 
* Automatic CRUD functionality against the data source using Spring *Repository* pattern
* Demonstrates MockMVC test framework with associated libraries
* All APIs are "self-documented" by Swagger2 using annotations 


The service has structural applications most used in the development market such as MVC architecture, TDD concept 
applications, clean Code. [The picture you see the structure](https://user-images.githubusercontent.com/23271567/211178746-19d6f453-b3ea-4ae4-9743-0431291c0589.png) :point_left:

It was also implementing a unit testing system with JUnit5, which provides a more robust application and less prone to bugs.
as you saw above there is a command to execute all tests that were successful. and also you can find inside the folder 
[```htmlReport.index.html```](https://user-images.githubusercontent.com/23271567/211178668-2a27ea8a-32c0-42ed-9c32-2bc11bc8d15e.png) where you can see the coverage report, identifying the points where the project still 
can be improved, note that you will find inside the resource two files sql file that was used for testing.



Here are some endpoints you can call:

### Get endpoints, documentation configurations, etc. [🔝](#spring-boot--microservice--impact-platafrom-project)

```
http://localhost:8080/api/swagger-ui.html
http://localhost:8080/api/products
http://localhost:8080/api/products/:id
http://localhost:8080/api/currency
http://localhost:8080/api/currency/:symbol   // (USD or EUR)
```

### Create a product resource [🔝](#spring-boot--microservice--impact-platafrom-project)

```
POST /api/products
Accept: application/json
Content-Type: application/json

{
    "name" : "Product A",
    "description" : "Example product A description",
    "price" : 2500.00
}

RESPONSE: HTTP 201 (Created)
Location header: http://localhost:8080/api/products/1
```

### list of products [🔝](#spring-boot--microservice--impact-platafrom-project)

```
GET http://localhost:8080/api/products

Response: HTTP 200
Content: list of application/json
```
### By ID with UUID (Using hateoas to link the URLs to product list)
```
GET http://localhost:8080/api/products/3d28df79-20a6-4509-a689-8304490fc72f

Response: HTTP 200
Content: application/json


{
        "id": "3d28df79-20a6-4509-a689-8304490fc72f",
        "name": "Product A",
        "description": "Example product A description",
        "price": 2500.00,
        "priceUSD": 478.34,
        "priceEUR": 449.36,
        "_links": {
            "list of products": {
                "href": "/api/products"
            }
        }   
}
```

### Update a product resource [🔝](#spring-boot--microservice--impact-platafrom-project)

```
PUT /api/products/e6ec75a3-cf21-4fa5-864f-2d6144f06b4c
Accept: application/json
Content-Type: application/json

{
    "name" : "Product B",
    "description" : "Example product A description",
    "price" : 1800.00
}

RESPONSE: HTTP 204 
```
### Delete a product resource [🔝](#spring-boot--microservice--impact-platafrom-project)

```
DELETE /api/products/e6ec75a3-cf21-4fa5-864f-2d6144f06b4c
Content-Type: No content

RESPONSE: HTTP 204 
Content: No Content
```
### To view Swagger 2 API docs [🔝](#spring-boot--microservice--impact-platafrom-project)

Run the server and browse to localhost:8080/swagger-ui.html

# About Spring Boot [🔝](#spring-boot--microservice--impact-platafrom-project)

Spring Boot is an "opinionated" application bootstrapping framework that makes it easy to create new RESTful services (among other types of applications). It provides many of the usual Spring facilities that can be configured easily usually without any XML. In addition to easy set up of Spring Controllers, Spring Data, etc. Spring Boot comes with the Actuator module that gives the application the following endpoints helpful in monitoring and operating the service:

**/metrics** Shows “metrics” information for the current application.

**/health** Shows application health information.

**/info** Displays arbitrary application info.

**/configprops** Displays a collated list of all @ConfigurationProperties.

**/mappings** Displays a collated list of all @RequestMapping paths.

**/beans** Displays a complete list of all the Spring Beans in your application.

**/env** Exposes properties from Spring’s ConfigurableEnvironment.

**/trace** Displays trace information (by default the last few HTTP requests).

### To view your H2 in-memory datbase [🔝](#spring-boot--microservice--impact-platafrom-project)

The 'test' profile runs on H2 in-memory database. To view and query the database you can browse to http://localhost:8080/h2-console. Default username is 'sa' with a blank password. Make sure you disable this in your production profiles. For more, see https://goo.gl/U8m62X

# Running the project with MySQL [🔝](#spring-boot--microservice--impact-platafrom-project)

This project uses an in-memory database so that you don't have to install a database in order to run it. However, converting it to run with another relational database such as MySQL or PostgreSQL is very easy. Since the project uses Spring Data and the Repository pattern, it's even fairly easy to back the same service with MongoDB. 

Here is what you would do to back the services with MySQL, for example: 

### In pom.xml add:  [🔝](#spring-boot--microservice--impact-platafrom-project)

```
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>
```

### Append this to the end of application.yml:  [🔝](#spring-boot--microservice--impact-platafrom-project)

```
---
spring:
  profiles: mysql

  datasource:
    driverClassName: com.mysql.jdbc.Driver
    url: jdbc:mysql://<your_mysql_host_or_ip>/bootexample
    username: <your_mysql_username>
    password: <your_mysql_password>

  jpa:
    hibernate:
      dialect: org.hibernate.dialect.MySQLInnoDBDialect
      ddl-auto: update # todo: in non-dev environments, comment this out:


hotel.service:
  name: 'test profile:'
```
### Append this to the end of application.properties: [🔝](#spring-boot--microservice--impact-platafrom-project)
```
spring.datasource.driver-class-name = com.mysql.cj.jdbc.Driver
spring.datasource.url = jdbc:mysql://localhost:3306/desafioimpact2?useSSL=false&serverTimezone=UTC&useLegacyDatetimeCode=false
spring.datasource.username = root
spring.datasource.password = <your_mysql_password>
spring.datasource.initialization-mode=always
spring.jpa.hibernate.ddl-auto=update
```

### :bangbang: Important [🔝](#spring-boot--microservice--impact-platafrom-project)   

In this case, I already used MySQL in this project, so if want used mySQL, is not necessary add a dependency.
if you want used other DB like postgreSQL, is necessessary add to dependency. For more, see https://shorturl.at/iBEYZ




Author                                                                                                                                                     |                                                                                                                                                                                                                                                                         |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars.githubusercontent.com/u/23271567?v=4" width=115><br><sub>@rodrigoml21</sub>](https://github.com/rodriigolima) <br><br> | :computer: [About me](https://about.me/rmls)




