<details>
<summary>English Version</summary>

# Blogs API

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [API Endpoints](#api-endpoints)
4. [Architecture](#architecture)
5. [Getting Started](#getting-started)
6. [Docker Configuration](#docker-configuration)
7. [To be implemented](#to-be-implemented)

## Introduction

This API enables users to singup, login and to perform CRUD operations on blog categories and blog posts. The project is built with TypeScript, Express.js, Sequelize (ORM), MySQL, JSON Web Token (JWT), Joi (Data Validations), and Bcrypt (Encryption). The project follows a layered architecture, is object-oriented, and adheres to SOLID principles. The application runs on Docker containers for the database and the API server. The main objective of the project was to train OOP, clean-architecture, solid principles and also to improve the rest of the stack. Above all the goal was to build a powerful and secure application for managing blogs.

## Technologies

The project utilizes the following technologies:

- [TypeScript](https://github.com/microsoft/TypeScript): A typed superset of JavaScript that compiles to plain JavaScript.
- [Express.js](https://github.com/expressjs/express): A fast and minimalist web framework for Node.js.
- [Sequelize](https://github.com/sequelize/sequelize): A powerful ORM for Node.js to interact with the MySQL database.
- [MySQL](https://github.com/mysql/mysql-server): An open-source relational database management system.
- [JSON Web Token (JWT)](https://github.com/auth0/node-jsonwebtoken): A compact, URL-safe means of representing claims to be transferred between two parties.
- [Joi](https://github.com/sideway/joi): A powerful schema description language and data validator for JavaScript.
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js): A library to help you hash passwords securely.

## API Endpoints

The API provides enpoints for the following base routes:

<details>

<summary>Login endpoint</summary>

- **POST /login**: Endpoint to authenticate users and receive a JWT token. (*Requires: email and password in request body*).
</details>

<details>
<summary>Users endpoints</summary>

- **POST /users**: create a new user in the database and return the inserted ID. (*Requires: displayName, email, and password in request body*).
- **GET /users**: fetch all users.
- **GET /users/:id**: retrieve a user by their corresponding ID.
- **DELETE /users/:id**: delete user.
</details>

<details>
<summary>Categories endpoints</summary>

- **GET /categories**: Fetch all blog categories. (*Requires JWT token*)
- **GET /categories/:id**: Fetch a blog category by its corresponding ID. (*Requires JWT token*)
- **POST /categories**: Create a new blog category. (*Requires JWT token and validation of category data*)
</details>

<details>
<summary>Blog-posts endpoint</summary>

- **GET /blogposts**: Fetch all blog posts. (*Requires JWT token*)
- **GET /blogposts/search**: Search for blog posts. (*Requires JWT token*)
- **POST /blogposts**: Create a new blog post. (*Requires JWT token and validation of blog post data*)
- **PUT /blogposts/:id**: Update a blog post by its corresponding ID. (*Requires JWT token and validation of updated blog post data*)
</details>


## Architecture

The project follows a layered architecture with the following layers:

1. **Controllers:** Responsible for handling HTTP requests and responses, and delegating work to the services layer.
2. **Services:** Contain business logic and interact with repositories to perform CRUD operations.
3. **Repositories:** Responsible for communication with the database using Sequelize models.
4. **Models:** Sequelize models representing database entities.

The architecture's adherence to SOLID principles ensures maintainability and extensibility.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/your-project-repo.git`
2. Install dependencies: `npm install`
3. Start both containers through Docker Compose: `docker-compose up -d`
4. Access the api container in bash: `docker exec -it blogs_api bash`
5. Run the database reset script, wich include db:create, db:migrate, db:seed: `npm run db:reset`
6. Install dependencies inside the container: `npm install`
7. Start the server: `npm start`
8. Or start the server in watch mode with nodemon: `npm run dev`

Make sure to replace `yourusername` and `your-project-repo` with the actual values related to your project.

## Docker Configuration

The application is containerized using Docker, allowing for easy setup and deployment. It consists of two containers:

1. MySQL Database Container: To store and manage the application's data.
2. API Server Container: To host the Express.js application and expose the API endpoints.

Make sure you have Docker installed on your system

## To be implemented

- Implement unit and integrantion tests to ensure the application works as expected.
- Add singup validation
- Add two factor authentication option to login

</details>
<br>
<details>
<summary>Versão Português</summary>

# API de Blogs

## Tabela de Conteúdos

1. [Introdução](#introdução)
2. [Tecnologias](#tecnologias)
3. [Endpoints da API](#endpoints-da-api)
4. [Arquitetura](#arquitetura)
5. [Primeiros Passos](#primeiros-passos)
6. [Configuração Docker](#configuração-docker)
7. [A ser implementado](#a-ser-implementado)

## Introdução

Esta API permite aos usuários se inscreverem, fazerem login e realizarem operações CRUD em categorias de blogs e postagens de blogs. O projeto é construído com TypeScript, Express.js, Sequelize (ORM), MySQL, JSON Web Token (JWT), Joi (Validações de Dados) e Bcrypt (Criptografia). O projeto segue uma arquitetura em camadas, é orientado a objetos e adere aos princípios SOLID. A aplicação é executada em containers Docker para o banco de dados e o servidor da API. O objetivo principal do projeto era treinar OOP, arquitetura limpa, princípios SOLID e também melhorar o restante do conjunto de tecnologias. Acima de tudo, o objetivo era construir uma aplicação poderosa e segura para gerenciar blogs.

## Tecnologias

O projeto utiliza as seguintes tecnologias:

- [TypeScript](https://github.com/microsoft/TypeScript): Um superset tipado do JavaScript que compila para JavaScript puro.
- [Express.js](https://github.com/expressjs/express): Um framework web rápido e minimalista para o Node.js.
- [Sequelize](https://github.com/sequelize/sequelize): Um ORM poderoso para o Node.js para interagir com o banco de dados MySQL.
- [MySQL](https://github.com/mysql/mysql-server): Um sistema de gerenciamento de banco de dados relacional de código aberto.
- [JSON Web Token (JWT)](https://github.com/auth0/node-jsonwebtoken): Um meio compacto e seguro de representar reivindicações a serem transferidas entre duas partes.
- [Joi](https://github.com/sideway/joi): Uma linguagem poderosa de descrição de esquemas e validador de dados para JavaScript.
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js): Uma biblioteca para ajudar a criptografar senhas de forma segura.

## Endpoints da API

A API fornece pontos de extensão para as seguintes rotas base:

<details>
<summary>Ponto de Extensão: Endpoint de Login</summary>

- **POST /login**: Endpoint para autenticar usuários e receber um token JWT. (*Requer: email e senha no corpo da requisição*).
</details>

<details>
<summary>Pontos de Extensão: Usuários</summary>

- **POST /users**: criar um novo usuário no banco de dados e retornar o ID inserido. (*Requer: displayName, email e senha no corpo da requisição*).
- **GET /users**: buscar todos os usuários.
- **GET /users/:id**: recuperar um usuário pelo respectivo ID.
- **DELETE /users/:id**: excluir usuário.
</details>

<details>
<summary>Pontos de Extensão: Categorias</summary>

- **GET /categories**: Buscar todas as categorias de blogs. (*Requer token JWT*)
- **GET /categories/:id**: Buscar uma categoria de blog pelo respectivo ID. (*Requer token JWT*)
- **POST /categories**: Criar uma nova categoria de blog. (*Requer token JWT e validação dos dados da categoria*)
</details>

<details>
<summary>Pontos de Extensão: Postagens de Blogs</summary>

- **GET /blogposts**: Buscar todas as postagens de blogs. (*Requer token JWT*)
- **GET /blogposts/search**: Pesquisar postagens de blogs. (*Requer token JWT*)
- **POST /blogposts**: Criar uma nova postagem de blog. (*Requer token JWT e validação dos dados da postagem de blog*)
- **PUT /blogposts/:id**: Atualizar uma postagem de blog pelo respectivo ID. (*Requer token JWT e validação dos dados atualizados da postagem de blog*)
</details>

## Arquitetura

O projeto segue uma arquitetura em camadas com as seguintes camadas:

1. **controllers:** Responsáveis por lidar com requisições e respostas HTTP, e delegar o trabalho para a camada de serviços.
2. **services:** Contêm a lógica de negócios e interagem com os repositórios para realizar operações CRUD.
3. **repositories:** Responsáveis pela comunicação com o banco de dados usando modelos Sequelize.
4. **models:** Modelos Sequelize que representam entidades do banco de dados.

A aderência da arquitetura aos princípios SOLID garante a manutenção e extensibilidade.

## Primeiros Passos

Para executar este projeto localmente, siga estas etapas:

1. Clone o repositório: `git clone https://github.com/seunome/repodo-seuprojeto.git`
2. Instale as dependências: `npm install`
3. Inicie ambos os containers através do Docker Compose: `docker-compose up -d`
4. Acesse o container da API no bash: `docker exec -it blogs_api bash`
5. Execute o script de redefinição do banco de dados, que inclui db:create, db:migrate, db:seed: `npm run db:reset`
6. Instale as dependências dentro do container: `npm install`
7. Inicie o servidor: `npm start`
8. Ou inicie o servidor em modo de observação com o nodemon: `npm run dev`

Certifique-se de substituir `seunome` e `repodo-seuprojeto` pelos valores reais relacionados ao seu projeto.

## Estrutura Docker

A aplicação é containerizada usando o Docker, permitindo uma configuração e implantação fáceis. Ela consiste em dois containers:

1. Container do Banco de Dados MySQL: Para armazenar e gerenciar os dados da aplicação.
2. Container do Servidor da API: Para hospedar a aplicação Express.js e expor os pontos de extensão da API.

Certifique-se de ter o Docker instalado em seu sistema.

## A ser implementado

- Implementar testes unitários e de integração para garantir que a aplicação funcione como esperado.
- Adicionar validação de inscrição.
- Adicionar a opção de autenticação de dois fatores ao login.


</details>