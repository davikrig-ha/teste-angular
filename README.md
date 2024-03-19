# Setup do Projeto

## Banco de Dados

O banco de dados utilizado é o SQL Server. Você pode instalá-lo no Windows ou utilizá-lo em uma imagem Docker.

## Backend

1. Clone o projeto.
2. Configure seu banco de dados e na raiz do projeto, você encontrará um arquivo `.env.example`. Crie um arquivo `.env` e utilize o exemplo como base, preenchendo com as informações do seu banco.
3. Abra o terminal e navegue até a raiz do projeto `test-back`.
4. Execute o comando `pnpm i` para instalar as dependências. Caso não tenha o `pnpm` instalado, você pode instalá-lo com o `npm`.
5. Após a instalação das dependências, execute `pnpm run start:dev`. Assim, o backend será executado e criará a tabela no banco de dados.

## Frontend

1. Clone o projeto.
2. Configure a URL do backend, onde ele está rodando, no arquivo `environment.ts` localizado em `src/environments`.
3. No terminal, na raiz do frontend, execute `npm i` para instalar as dependências.
4. Para rodar o frontend, execute `npm start`.

## Observações

Certifique-se de ter o Node.js e o npm instalados em sua máquina antes de prosseguir com a instalação das dependências do projeto.

Certifique-se também de ter acesso ao banco de dados e de que as configurações no arquivo `.env` estão corretas para uma conexão bem-sucedida.