# `Product API`

### Desafio para integrar o banco de talentos como Desenvolvedor Back-end

## :page_facing_up: Descrição da API

É uma API REST que responde aos seguintes métodos:

- [get] /Products (listagem de todos os produtos)
- [post] /Products (cadastrar um produto)
- [get/put/delete] /Products/$ID (listar/atualizar/deletar um produto)

- [get] /Currency/ (listagem de todas as cotações)
- [get] /Currency/$symbol (listar uma cotação)

## :warning: Requisitos

### Deve ter instalado na máquina

- [x] Git
- [x] NodeJs
- [x] API Client (insommia, postman, etc)

## :rocket: Orientações para executar o projeto

Localize a pasta em que foi feito o Download ou clonagem do projeto e abra a pasta `bruno-bispo-backend`. Vá até a pasta `backend`, abra seu terminal e instale as dependências do projeto com o comando:

```bash
npm install
```

:exclamation: **Importante:** Para evitar ter que possuir um banco de dados instalado na máquina, foi utilizado o SQLite, e nele já estão cadastrados alguns produtos.

Agora, para compilar o projeto digite:

```bash
npm run build
```

E para executar, digite:

```bash
npm start
```

Ou se preferir não compilar o projeto, pode executá-lo em modo **desenvolvedor**:

```bash
npm run dev
```

### A URL base da aplicação é `http://localhost:3000/`

:arrow_forward: Agora é só abrir o API Client e testar as rotas da aplicação. Para saber mais detalhes sobre elas, `com a aplicação em execução`, confira a documentação através da URL base.

## :writing_hand: Orientações para testar o projeto

Basta digitar no terminal:

```bash
npm run test
```
