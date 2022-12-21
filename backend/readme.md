# Desafio para integrar o banco de talentos como Desenvolvedor Back-end

Este desafio tem como objetivo te avaliar como desenvolvedor Back-end;

## Sobre o desafio
Este é um desafio, não um teste de faculdade, então há várias respostas corretas.

Daremos a você alguns requisitos que devem ser cumpridos e pelos quais você será avaliado, mas você é livre para escolher um método de solução.

O que esperamos aprender com você com este desafio:

- Seu estilo de trabalho.
- Como você pensa e resolve problemas.
- Como você se comunica.

## Descrição do Desafio
Crie uma API REST, que responda os seguintes métodos:

[get] /Products (todos os produtos)
[post] /Products (Para criar produtos)
[get/put/delete] /Products/$ID (por ID)

[get] /Currency/ (todas as cotações)
[get] /Currency/$symbol (exemplo: BRL, USD, EUR)
   
   - Os produtos devem ser cadastrados em BRL, usando a API Rest
   - A cotação das outras moedas deve vir da API:
     - https://economia.awesomeapi.com.br/all/USD-BRL para USD 
     - https://economia.awesomeapi.com.br/all/EUR-BRL para EUR
   - Ou, se preferir você pode buscar todas as moedas e encontrar as cotações usando o identificador, através do endpoint:
   - https://economia.awesomeapi.com.br/all
   - Armazene os dados da cotação em cache para evitar atingir o limite de requests da api; 
   - Ao buscar o produto ele deverá vir com o valor cadastrador em Real e o valor equivalente em mais duas outras moedas da sua escolha (Ex: Dolar e EUR)
  
## Requisitos

  - A api rest deverá está devidamente documentada (swagger)
  - Escrever testes unitarios para o sistema
 
## Critérios de avaliação

  - Seu código será avaliado por: semântica, organização, estrutura, legibilidade, tamanho, entre outros fatores.
  - O histórico do `git` será avaliado.

## Considerações

- Não limitaremos sua escolha de ferramentas ou bibliotecas. Mas faça escolhas que atendam às suas necessidades. Não há necessidade de usar uma bazuca para matar uma formiga, mas o objetivo do desafio é avaliar suas habilidades.
- Tente escrever o melhor código possível. Vai facilitar nossa vida na hora de avaliar sua solução.
- Não se esqueça de documentar o processo necessário para buildar e executar seu aplicativo. Ou então como vamos avaliar seu trabalho se não podemos iniciar o projeto em nossas máquinas?

## Como submeter seu projeto
  1. Efetue o fork deste repositório e crie um branch com o seu nome, sobrenome e qual teste você está submetendo. (exemplo: fulano-dasilva-backend);
  2. Após finalizar o desafio, crie um Pull Request;
  3. Aguarde algum contribuidor realizar o code review;

## Dúvidas?
Tem alguma dúvida relacionada ao processo? Abra um [issue](https://github.com/Impact-Plataform/Banco-de-talentos/issues) e teremos prazer em ajudar.

## Obrigado!
Agradecemos sua participação no desafio. Boa sorte! 😄
