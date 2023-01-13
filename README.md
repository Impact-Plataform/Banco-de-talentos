# Welcome to Death Star Database

Boas vindas ao repositório da Death Star Database! Esse site foi desenvolvido utilizando React com Typescript.



## Sobre

Death Star Database é um site onde você pode descobrir mais sobre os personagens de Star Wars. O site pode ser acessado utilizando um celular, tablet ou computador.

Quando clicar em um personagem, você será direcionado a uma página dedicada a ele, com informações e uma síntese abrangente. **Cuidado com spoilers**.

Além disso, há três filtros disponíveis para melhorar sua pesquisa: gênero, espécie e filme em que é apresentado. Eles podem ser combinados para refinar ainda mais seus resultados. Adicionalmente, há uma barra de procura para encontrar um personagem rapidamente, que também pode ser mesclada com os filtros. 

Você também pode pesquisar por um personagem inserindo o nome dele no link da aplicação - por exemplo - **https://deathstardb.netlify.app/Luke**, irá retornar o personagem **Luke Skywalker**

Se você desejar usar este site localmente, siga as instruções abaixo para instalação. Caso contrário, [acesse o deploy](https://deathstardb.netlify.app/). 



## Deploy

**https://deathstardb.netlify.app/**

## Instalação

Pré requisitos:

* Você deve possuir a versão mais atual do Node ([instalar Node](https://nodejs.org/en/download/))
* Você deve possuir o git instalado em seu computador ([Instalar Git](https://git-scm.com/))

### Instalando o projeto localmente

* Abra o prompt de comando do Windows, digitando na barra de pesquisa do windows a palavra CMD
*  Navegue até o local desejado para a instalação, usando o comando **cd destino**
  - **Exemplo**: cd Documents (acessa a pasta documentos) 

* Digite o comando **git clone https://github.com/urielbochi/Banco-de-talentos.git**
* Acesse a pasta clonada com o comando **cd Banco-de-Talentos**
* Digite o comando **npm install** para instalar as dependências do Node

### Inicializando o projeto

* Com o Prompt de comando aberto na pasta raiz do projeto, digite o comando **npm start**



## Tecnologias utilizadas

* React
* Typescript
* React Select
* React Router Dom



## Próximos passos

* Adicionar uma página customizada para cada filme
* Adicionar uma página customizada para cada planeta
* Tornar o código menos dependente de requisições
* Utilizar um framework para estilizar o site
* Refatorar em mais componentes
* Permitir que o usuário favorite um personagem, um planeta ou filme.



## Desenvolvimento

* Foi utilizado o método Kanban para administrar o fluxo de objetivos;
* Não foi utilizado Context ou Redux, visando não adicionar mais um ciclo de desenvolvimento e evitar re-renderização;
* Utilização de ferramentas de pesquisa (Google)
* Estilização realizada apenas com CSS (BEMCSS como modelo de padronização)



## Estrutura do código

* A maior parte das regras de negócio é encontrada na pasta Services

**Services**

* **Index.tsx**
  * handleCharacters: Preenche um array com os resultados da API. A requisição a ser feita depende se existem filtros ou não, a resposta pode variar entre 1-87 resultados.
  * promisesDealer: Recebe um array com todos os personagens e resolve as promises pendentes através da função assincrona **characterDetailsHandler** para obter mais detalhes sobre o personagem. Após isso, envia para uma função de filtro.
  * getTotalPages: Enquanto o parâmetro next da API não for nulo, o número de páginas incrementa.

* **getSelectOptions**
  * getOptions: Recupera as opções existentes de gênero, espécie e filme. Esses dados são alocados no Select.

* **filterOptions**
  * filterData: Verifica se os personagens dentro de um determinado Array seguem determinadas condições. Se sim, retorna esses personagens

* **characterDetailsHandler**
  * characterDetailsHandler: Resolve as promises e despacha as informações dos personagens e filmes.

* **characterDetailed:**
  * getDetailedCharacter: Obtem um único personagem com seus dados. Caso nenhum personagem seja encontrado, uma mensagem de erro é exibida.



**Componentes** | **Páginas**

* **Home**
  * É despachado as opções utilizadas nos selects;
  * É onde o conteúdo principal é renderizado.
  * A paginação é feita através da Home.

* **SideBar**
  * Componente destinado para tratamento de filtros;
  * Dois callbacks são chamados: um para obter os personagens, o outro para resolver promises e encaminhar para a filtragem
  * É onde ocorre a renderização dos elementos Select

* **CharacterDetails**
  * Componente destinado para renderizar a página interna de um personagem;
  * Ocorre um callback que preenche um estado com os dados do personagem;

* **CharacterCard**
  * Estrutura onde os personagens são renderizados

* **CharacterNotFound**
  * Página renderizada quando um personagem não é encontrado através do link.

* **Loading**
  * Tela de carregamento, é renderizada quando o conteúdo não está pronto.

* **Background**
  * Estrutura HTML para renderizar o vídeo de fundo do site.

* **Types**
  * São definidas interfaces para tipagem de variáveis.

* **Routes**
  * /    Retorna a página home
  * /:id   Retorna um personagem especifico

* **assets**
  * Material com foco visual utilizado na construção do site (fontes, imagens, vídeos e gifs)
  * Estruturas json de personagens e filmes



## Agradecimentos

Agradeço sinceramente a oportunidade de ter participado deste projeto incrível e ter tido a chance de conhecer alguns personagens por trás da saga Star Wars. Ter vivido em primeira mão a mitologia criada por George Lucas foi extremamente inspirador e motivou-me a mergulhar ainda mais fundo na história, através dos filmes, livros e outras mídias, desta jornada épica e maravilhosa.



