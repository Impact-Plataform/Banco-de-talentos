# < Impact API >

<fig>
<img src="https://rockcontent.com/br/wp-content/uploads/sites/2/elementor/thumbs/modelo-de-projeto-p2he6clp7uhmwqd16ikv9jgz30a5liixoon908hej0.png" alt="Uma imagem relacionada ao projeto">
<figcaption>Uma imagem relacionada ao projeto</figcaption>
</fig>

## Inicialização

Para executar o projeto, utilize as ferramentas descritas na sessão _Ferramentas_.

### Passo a passo

**< via download do repositório >**

- Faça download do repositório;
- descompacte o arquivo;
- abra a pasta _backend_ com sua IDE de preferência;
- instale as dependências com um gerenciador de pacotes
  (com yarn `yarn` / com npm `npm install`);
- crie um arquivo `.env` na raiz da pasta backend com a variável `DATABASE_URL`, o caminho do banco de dados por default é `"file:./dev.db"`;
- integre o banco de dados ao sistema como comando `npx prisma migrate dev` ou `yarn prisma migrate dev`

**< via conexão remota >**

- crie uma pasta;
- abra sua IDE de preferência, no terminal digite o comando `git init`;
- conecte-se ao repositório com o comando `git remote add origin https://github.com/Moreira-Edu/Banco-de-talentos.git`;
- feito a conexão, digite o comando `git pull origin eduardo-moreira-backend`;
- navegue até a pasta _backend_;
- instale as dependências com um gerenciador de pacotes
  (com yarn `yarn` / com npm `npm install`);
- crie um arquivo `.env` na raiz da pasta backend com a variável `DATABASE_URL`, o caminho do banco de dados por default é `"file:./dev.db"`;
- integre o banco de dados ao sistema como comando `npx prisma migrate dev` ou `yarn prisma migrate dev`

## Ferramentas

- [vscode](https://code.visualstudio.com/) - IDE para desenvolvimento.
- [npm](https://www.npmjs.com/) - Gerenciador de pacotes para Nodejs.
- [node](https://nodejs.org/en/) - Ambiente de execução Javascript.
- [git](https://git-scm.com/) - Ferramenta de versionamento de códigos.

## Links importantes

- [Typescript Rest API](https://medium.com/@eldes.com/tutorial-aplica%C3%A7%C3%A3o-rest-api-com-node-em-typescript-usando-express-e-sqlite-a4ea6a7c3563) - API com Typescript.

# < Impact API >

## Introdução

API rest simples de cadastramento e listagem de produtos.  
Este projeto também permite cotar moedas estrangeiras.
O objetivo principa é **< Apresentar minhas habilidades gerais com API's >**, com os objetivos gerais de realizar a inserção de **< produtos >** e verificação de **< Produtos >**.

## Análise técnica

As ferramentas utilizadas para o desenvolvimento incluem **< Typescript >** que é um superset do javascript, traz uma forte tipagem e funcionalidades que nativamente não estão disponíves na linguagem. Para renderizar a documentação foi utilizado **< Swagger >**, que é capaz de renderizar informações em **< Json, UML, jsDocs>** para **< HTML, CSS e JS >**, criando, assim, uma página estática capaz de comunicar-se com o sistema. **< SQLite >** atuando como sistema gerenciador de banco de dados relacional e **< Prisma >** como query builder.

## Regras de Negócio

_Cadastro do produto_

- O cliente só fará o cadastro do produto se obedecer aos requisitos obrigatórios das propriedades do produto. **Ver modelo do produto**

_Atualização do produto_

- O cliente só fará a atualização do produto se obedecer aos requisitos obrigatórios das propriedades do produto. **Ver modelo do produto**

_Deleção do produto_

- O cliente só fará a deleção do produto se informar corretamente seu ID.

## Modelo do Produto

```
{
  id          Int
  title       String
  description String
  category    String
  brlPrice    Int
}
```

### Mensagens internas

Rotas utilizadas pela aplicação web para executar metodos de **POST** e **GET** no banco de dados. Onde o retorno de cada uma das funções estara contido em uma sessão para renderização de páginas web.

| nome                   | Funcionalidade                                                 |
| ---------------------- | -------------------------------------------------------------- |
| `GET` /products        | Informa todos os produtos registrados no banco.                |
| `GET` /products/id     | Informa um produto selecionado pelo ID                         |
| `POST` /products       | Insere um novo produto.                                        |
| `PUT` /products/id     | Atualiza o produto.                                            |
| `DELETE`/products/id   | Delete o produto.                                              |
|                        |                                                                |
| `GET` /currency        | Informa todos as moedas registradas na API de moedas ou cache. |
| `GET` /currency/symbol | Informa uma moeda selecionada pelo código de moeda             |

## Conceitos básicos

- [API](https://www.redhat.com/pt-br/topics/api/what-are-application-programming-interfaces) - são conjuntos de ferramentas, definições e protocolos para a criação de aplicações de software. APIs conectam soluções e serviços, sem a necessidade de saber como esses elementos foram implementados.
