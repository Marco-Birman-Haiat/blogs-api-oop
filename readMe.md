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