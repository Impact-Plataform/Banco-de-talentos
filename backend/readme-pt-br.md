[<img align="right" width="250" height="120" src="https://user-images.githubusercontent.com/23271567/211178068-0ad2732f-9cd1-4f07-81ca-5e8209686070.png">](https://www.plataformatech.com) [**Equipe Plataforma Impact**](https://www.plataformatech.com) <br> <br>
[<img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">](https://twitter.com/PlataformaMpact)  
[<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">](https://www.linkedin.com/company/plataforma-impact) <br> 
[<img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white">](https://www.facebook.com/plataformaimpact)



# Spring Boot "Microservice" Impact Platafrom Project  



Este é um exemplo de aplicativo Java / Maven / Spring Boot (versão 3.0.1) que pode ser usado como um iniciador para criar um resto de microsserviço.

Volte para a linguagem o primeiro readme: [Inglês](https://github.com/rodriigolima/Banco-de-talentos/blob/rodrigo-lima-backend/backend/readme.md)

## Como rodar [🔝](#spring-boot--microservice--impact-platafrom-project)

Este aplicativo é empacotado que possui o Tomcat 10.1.4 incorporado.

* Clone este repositório 
* Verifique se você está usando JDK 19.0.1 e Maven 3.x
* Você pode construir o projeto e executar os testes executando ```mvn clean package```
* Uma vez construído com sucesso, pode executar o serviço por um destes métodos: ```mvn spring-boot:run```
 ou pode utilizar a IDE que achar melhor para você.
* Verifique o arquivo stdout ou boot_example.log para garantir que nenhuma exceção seja lançada

Depois que o aplicativo for executado, você deverá ver algo como isto

```
2023-01-06T14:11:32.770-03:00  INFO 13332 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2023-01-06T14:11:32.778-03:00  INFO 13332 --- [  restartedMain] c.i.project.ImpactProjectApplication     : Started ImpactProjectApplication in 4.978 seconds (process running for 5.462)
```

# Indice [🔝](#spring-boot--microservice--impact-platafrom-project)

- [Spring Boot "Microservice" Impact Platafrom Project](#spring-boot--microservice--impact-platafrom-project)
   - [Como rodar](#como-rodar-)
     - [Sobre o serviço](#sobre-o-serviço-)
       - [Get endpoints, configurações de documentação, etc.](#get-endpoints-configurações-de-documentação-etc-)
       - [Criar um recurso de produto](#criar-um-recurso-de-produto-)
       - [listar todos os produtos](#listar-todos-os-produtos-)
       - [pelo ID utilizando UUID](#pelo-id-utilizando-uuid--using-hateoas-to-link-the-urls-to-product-list-)
       - [Atualizar um recurso de produto](#atualizar-um-recurso-de-produto-)
       - [Excluir um recurso de produto](#excluir-um-recurso-de-produto-)
       - [Para visualizar os documentos da API no Swagger 2](#para-visualizar-os-documentos-da-api-no-swagger-2-) 
   - [Sobre Spring Boot](#sobre-spring-boot-)
   - [Rodando o projeto com MySQL](#rodando-o-projeto-com-mysql-)

## Sobre o serviço [🔝](#spring-boot--microservice--impact-platafrom-project)

O serviço é apenas um simples serviço REST de revisão de produtos, que consome outra API de moedas e converte o preço de
o produto em tempo de execução para as duas moedas (ver mais) https://shorturl.at/jxzNP (USD/EUR) para isso foi necessário aplicar dependências que funcionam de forma síncrona,
atualização do preço do produto em reais do medicamento que o preço de compra de outras moedas são alterados; usando o conceito de webflux.
onde algumas linguagens de programação como javascript, utilizam muito no seu dia a dia. Ele usa um banco de dados na memória (H2) para armazenar os dados. Você pode
também fazer com um banco de dados relacional como MySQL ou PostgreSQL. Se suas propriedades de conexão com o banco de dados funcionarem, você pode chamar algumas
Pontos de extremidade REST definidos em ```com.impact.project.controller.ProductController``` na **port 8080**. 



Você pode usar este serviço de exemplo para entender as convenções e configurações que permitem criar um serviço RESTful com base em banco de dados. Depois de entender e se familiarizar com o aplicativo de amostra, você pode adicionar seus próprios serviços seguindo os mesmos padrões do serviço de amostra.

Aqui está o que este pequeno aplicativo demonstra:

* Integração total com o mais recente **Spring** Framework: inversão de controle, injeção de dependência, etc.
* Empacotando como um único com contêiner incorporado (tomcat 9.0.34): Não há necessidade de instalar um contêiner separadamente no host, apenas execute usando o comando ``mvn spring-boot:run``
* Endpoints automaticamente em uma porta configurada. 
* Escrevendo um serviço RESTful usando anotação: JSON request / response
* Mapeamento de exceções de aplicativo para a resposta HTTP correta com detalhes de exceção no corpo
* *Spring Data* Integração com JPA/Hibernate com apenas algumas linhas de configuração e anotações familiares.
* Funcionalidade CRUD automática contra a fonte de dados usando o padrão Spring *Repository*
* Demonstra a estrutura de teste MockMVC com bibliotecas associadas
* Todas as APIs são "autodocumentadas" pelo Swagger2 usando anotações 


O serviço possui aplicações estruturais mais utilizadas no mercado de desenvolvimento como arquitetura MVC, conceito TDD
aplicativos, código limpo. [Veja uma imagem da estrutura do projeto](https://user-images.githubusercontent.com/23271567/211178746-19d6f453-b3ea-4ae4-9743-0431291c0589.png) :point_left:

Também estava implementando um sistema de teste de unidade com JUnit5, que fornece uma aplicação mais robusta e menos propensa a bugs.
como você viu acima existe um comando para executar todos os testes que foram bem sucedidos. e também você pode encontrar dentro da pasta
[```htmlReport.index.html```](https://user-images.githubusercontent.com/23271567/211178668-2a27ea8a-32c0-42ed-9c32-2bc11bc8d15e.png) onde você pode ver o relatório de cobertura, identificando os pontos onde o projeto ainda
pode ser melhorado, observe que você encontrará dentro do resource dois arquivos sql que foram usados para teste.



Aqui estão alguns endpoints que você pode executar:

### Get endpoints, configurações de documentação, etc. [🔝](#spring-boot--microservice--impact-platafrom-project)

```
http://localhost:8080/api/swagger-ui.html
http://localhost:8080/api/products
http://localhost:8080/api/products/:id
http://localhost:8080/api/currency
http://localhost:8080/api/currency/:symbol   // (USD or EUR)
```

### Criar um recurso de produto [🔝](#spring-boot--microservice--impact-platafrom-project)

```
POST /api/products
Accept: application/json
Content-Type: application/json

{
    "name" : "Produto A",
    "description" : "Exemplo de descrição do produto A",
    "price" : 2500.00
}

RESPONSE: HTTP 201 (Created)
Location header: http://localhost:8080/api/products/1
```

### listar todos os produtos [🔝](#spring-boot--microservice--impact-platafrom-project)

```
GET http://localhost:8080/api/products

Response: HTTP 200
Content: list of application/json
```
### pelo ID utilizando UUID (Using hateoas to link the URLs to product list)
```
GET http://localhost:8080/api/products/3d28df79-20a6-4509-a689-8304490fc72f

Response: HTTP 200
Content: application/json


{
        "id": "3d28df79-20a6-4509-a689-8304490fc72f",
        "name": "Produto A",
        "description": "Exemplo de descrição do produto A",
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

### Atualizar um recurso de produto [🔝](#spring-boot--microservice--impact-platafrom-project)

```
PUT /api/products/e6ec75a3-cf21-4fa5-864f-2d6144f06b4c
Accept: application/json
Content-Type: application/json

{
    "name" : "Produto B",
    "description" : "Exemplo de descrição do produto B",
    "price" : 1800.00
}

RESPONSE: HTTP 204 
```
### Excluir um recurso de produto [🔝](#spring-boot--microservice--impact-platafrom-project)

```
DELETE /api/products/e6ec75a3-cf21-4fa5-864f-2d6144f06b4c
Content-Type: No content

RESPONSE: HTTP 204 
Content: No Content
```
### Para visualizar os documentos da API no Swagger 2 [🔝](#spring-boot--microservice--impact-platafrom-project)

Execute o servidor e navegue até localhost:8080/swagger-ui.html

# Sobre Spring Boot [🔝](#spring-boot--microservice--impact-platafrom-project)

O Spring Boot é uma estrutura de inicialização de aplicativo "opinativa" que facilita a criação de novos serviços RESTful (entre outros tipos de aplicativos). Ele fornece muitas das facilidades comuns do Spring que podem ser configuradas facilmente, geralmente sem nenhum XML. Além da fácil configuração de Spring Controllers, Spring Data, etc. O Spring Boot vem com o módulo Actuator que fornece ao aplicativo os seguintes endpoints úteis no monitoramento e operação do serviço:

**/metrics** Mostra informações de “métricas” para o aplicativo atual.

**/health** Mostra informações de integridade do aplicativo.

**/info** Exibe informações arbitrárias do aplicativo.

**/configprops** Exibe uma lista agrupada de todos os @ConfigurationProperties.

**/mappings** Exibe uma lista agrupada de todos os caminhos @RequestMapping.

**/beans** Exibe uma lista completa de todos os Spring Beans em seu aplicativo.

**/env** Expõe as propriedades do ConfigurableEnvironment do Spring.

**/trace** Exibe informações de rastreamento (por padrão, as últimas solicitações HTTP).

### Para você ver H2 in-memory datbase [🔝](#spring-boot--microservice--impact-platafrom-project)

O perfil 'teste' é executado no banco de dados H2 na memória. Para visualizar e consultar o banco de dados, você pode navegar até http://localhost:8080/h2-console. O nome de usuário padrão é 'sa' com uma senha 'password'. Certifique-se de desativar isso em seus perfis de produção. Para saber mais, consulte https://goo.gl/U8m62X

# Rodando o projeto com MySQL [🔝](#spring-boot--microservice--impact-platafrom-project)

Este projeto usa um banco de dados na memória para que você não precise instalar um banco de dados para executá-lo. No entanto, convertê-lo para executar com outro banco de dados relacional, como MySQL ou PostgreSQL, é muito fácil. Como o projeto usa Spring Data e o padrão Repository, é até bastante fácil fazer backup do mesmo serviço com o MongoDB.

Aqui está o que você faria para apoiar os serviços com o MySQL, por exemplo: 

### Adiciona a dependência no pom.xml:  [🔝](#spring-boot--microservice--impact-platafrom-project)

```
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>
```

### Anexe isso ao final de application.yml:  [🔝](#spring-boot--microservice--impact-platafrom-project)

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
### Ou anexe isso ao final de application.properties: [🔝](#spring-boot--microservice--impact-platafrom-project)
```
spring.datasource.driver-class-name = com.mysql.cj.jdbc.Driver
spring.datasource.url = jdbc:mysql://localhost:3306/desafioimpact2?useSSL=false&serverTimezone=UTC&useLegacyDatetimeCode=false
spring.datasource.username = root
spring.datasource.password = <your_mysql_password>
spring.datasource.initialization-mode=always
spring.jpa.hibernate.ddl-auto=update
```

### :bangbang: IMPORTANTE [🔝](#spring-boot--microservice--impact-platafrom-project)   

Neste caso, eu já usei o MySQL neste projeto, então se quiser usar o mySQL, não é necessário adicionar uma dependência.
se você quiser usar outro banco de dados como postgreSQL, é necessário adicionar à dependência. Para saber mais, consulte https://shorturl.at/iBEYZ




Author                                                                                                                                                     |                                                                                                                                                                                                                                                                         |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars.githubusercontent.com/u/23271567?v=4" width=115><br><sub>@rodrigoml21</sub>](https://github.com/rodriigolima) <br><br> | :computer: [About me](https://about.me/rmls)




