# Portfolio API

This is the backend API of my [Portfolio](https://github.com/ctam62/portfolio).

![Static Badge](https://img.shields.io/badge/deployed-%2523FF9900.svg?style=flat&logo=amazon-aws&logoColor=white&label=AWS&color=FF9900)

## Backend Tech Stack

-   Express.js
-   Node.js
-   Knex
-   PostgreSQL

## Setup

Install nodeJS dependencies

```
npm i
```

Create and select the portfolio database in a separate psql terminal

```
CREATE DATABASE portfolio;
\c portfolio;
```

Create database tables with knex migrations

```
npm run migrate
```

Seed the tables with data

```
npm run seed
```

Run Express App in development mode

```
npm run dev
```

Or to Start Express App

```
npm start
```
